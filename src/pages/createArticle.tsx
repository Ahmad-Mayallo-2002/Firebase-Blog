import {
  Box,
  Container,
  VStack,
  Input,
  Textarea,
  Heading,
  Text,
  Flex,
  Image,
  Icon,
  Field,
  Button,
  FileUpload,
  Select,
  createListCollection,
  Portal,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaCloudUploadAlt } from "react-icons/fa";
import { toaster } from "../components/ui/toaster";
import { AuthContext } from "../context/auth";
import { uploadImageToCloudinary } from "../utils/uploadFile.";
import type { ICloudImage } from "../assets/interface/cloudImage";

interface IArticle {
  title: string;
  category: string;
  description: string;
  content: string;
  image: FileList;
}

const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ],
});

export default function CreateArticle() {
  const [loading, setLoading] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");
  const [maxLength, setMaxLength] = useState<number>(0);
  const { Root: FileRoot, HiddenInput, Dropzone, DropzoneContent } = FileUpload;
  const { Root, ErrorIcon, ErrorText, Label, HelperText } = Field;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IArticle>();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const { user } = useContext(AuthContext);

  const onSubmit = async (data: IArticle) => {
    try {
      setLoading(true);
      // if (!user) throw new Error("Access is denied, Login First");
      const result = await uploadImageToCloudinary(data.image?.[0]);
      

      reset();
      setImage("");
      toaster.success({
        title: "Success",
        description: "Article created",
      });
    } catch (error: any) {
      toaster.error({
        title: "Error",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box as="section" py={16} className="create-article">
      <Container>
        <VStack as="form" gap={4} onSubmit={handleSubmit(onSubmit)}>
          {/* Article Image */}
          <Root invalid={!!errors.image}>
            <Label>Image</Label>
            <FileRoot cursor="pointer">
              <HiddenInput
                accept=".png, .jpg, .webp"
                {...register("image", {
                  onChange: handleImageChange,
                  required: "Article image is required",
                })}
              />
              <Dropzone w="full">
                {image ? (
                  <Image mx="auto" src={image} h={256} />
                ) : (
                  <>
                    <Icon
                      as={FaCloudUploadAlt}
                      fontSize={75}
                      mb={-4}
                      color="gray.400"
                    />
                    <DropzoneContent>
                      <Heading as="h4" fontSize="md">
                        Drag and drop files here
                      </Heading>
                      <Text fontSize="sm" color="gray.500">
                        .png, .jpg, .webp up to 10MB
                      </Text>
                    </DropzoneContent>
                  </>
                )}
              </Dropzone>
            </FileRoot>

            {errors.image && (
              <ErrorText>
                <ErrorIcon className="error-icon" />
                {errors.image.message}
              </ErrorText>
            )}
          </Root>

          {/* Title and Category */}
          <Flex w="full" gap={6} flexDir={{ base: "column", md: "row" }}>
            {/* Article Title */}
            <Root invalid={!!errors.title}>
              <Label>Title</Label>
              <Input
                placeholder="Article Title"
                {...register("title", {
                  required: "Article title is required",
                })}
              />
              {errors.title && (
                <ErrorText>
                  <ErrorIcon className="error-icon" />
                  {errors.title.message}
                </ErrorText>
              )}
            </Root>

            {/* Article Category */}
            <Root invalid={!!errors.category}>
              <Label>Category</Label>
              <Select.Root w="full" collection={frameworks} size="sm">
                <Select.HiddenSelect
                  {...register("category", {
                    required: "Article category is required",
                  })}
                />
                <Select.Control>
                  <Select.Trigger>
                    <Select.ValueText placeholder="Select framework" />
                  </Select.Trigger>
                  <Select.IndicatorGroup>
                    <Select.Indicator />
                  </Select.IndicatorGroup>
                </Select.Control>
                <Portal>
                  <Select.Positioner>
                    <Select.Content>
                      {frameworks.items.map((framework) => (
                        <Select.Item item={framework} key={framework.value}>
                          {framework.label}
                          <Select.ItemIndicator />
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Positioner>
                </Portal>
              </Select.Root>
              {errors.category && (
                <ErrorText>
                  <ErrorIcon className="error-icon" />
                  {errors.category.message}
                </ErrorText>
              )}
            </Root>
          </Flex>

          {/* Article Description */}
          <Root invalid={!!errors.description}>
            <Label>Description</Label>
            <Textarea
              resize="none"
              h="100px"
              placeholder="Article Description"
              {...register("description", {
                required: "Article description is required",
                onChange(event) {
                  setMaxLength(+event.target.value.length);
                },
              })}
              maxLength={300}
            />
            <HelperText ms="auto">{maxLength}/300 Characters</HelperText>
            {errors.description && (
              <ErrorText>
                <ErrorIcon className="error-icon" />
                {errors.description.message}
              </ErrorText>
            )}
          </Root>

          {/* Article Content */}
          <Root invalid={!!errors.content}>
            <Label>Content</Label>
            <Textarea
              {...register("content", {
                required: "Article content is required",
              })}
              h="300px"
              resize="none"
              placeholder="Article Content"
            />
            {errors.content && (
              <ErrorText>
                <ErrorIcon className="error-icon" />
                {errors.content.message}
              </ErrorText>
            )}
          </Root>

          <Button
            loading={loading}
            loadingText="Loading..."
            type="submit"
            w="full"
            colorPalette="blue"
          >
            Create
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}
