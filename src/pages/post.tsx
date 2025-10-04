import {
  Box,
  Button,
  Container,
  Field,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import img from "../assets/images/blog-1.jpg";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface Comment {
  comment: string;
}

export default function Post() {
  const [like, setLike] = useState<boolean>(true);
  const handleLike = () => setLike(true);
  const handleDisLike = () => setLike(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Comment>();
  const { Root, ErrorIcon, ErrorText } = Field;
  const onSubmit = (data: Comment) => {
    console.log(data);
  };
  return (
    <>
      <Box className="post" as="section" py={16}>
        <Container>
          <Image src={img} alt="Post Image" w="full" h="600px" />
          <Heading
            mt={7}
            mb={4}
            fontSize="3xl"
            textAlign={{ base: "center", lg: "start" }}
          >
            Post Title
          </Heading>

          <Text color="gray.600" lineHeight={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eum
            sapiente praesentium nisi cupiditate quae totam aliquid? Voluptas,
            accusantium aperiam harum quo at ipsam. Libero architecto
            perferendis unde ea, dolore vel? Molestiae perspiciatis excepturi
            iste sequi labore, minus quasi ullam. Architecto dignissimos a
            eveniet enim ipsam id reprehenderit, fugiat quod sit consequuntur
            velit odio tempora in hic, consectetur ducimus numquam labore non
            rem, molestiae provident accusamus unde doloremque. Nisi aliquam
            reprehenderit facilis quam nihil dicta tenetur provident? Ad enim
            aliquam inventore laborum laudantium. Expedita sunt repellat autem
            totam laboriosam quibusdam cumque et dolores pariatur alias laborum
            at ea, excepturi fugiat reiciendis facilis sequi veniam nisi
            corrupti harum magni sint natus magnam minus? Possimus a est ad?
            Ullam facere quas iure perspiciatis ab, reprehenderit atque beatae
            est neque sit exercitationem nisi soluta nihil consectetur unde.
            Laborum hic, placeat, quos in temporibus sit autem ducimus quidem
            rerum enim, eum deleniti dolor voluptate perferendis harum ut. Vel
            soluta ipsum rerum atque minus magnam ab voluptates asperiores quasi
            ipsam veniam amet neque laborum dolor ipsa totam eum laboriosam
            autem quis, iure, molestias assumenda pariatur at. Possimus, neque
            aperiam? Laboriosam alias, id animi sed a impedit, sit soluta, porro
            tenetur vel quas ad mollitia consequuntur! Delectus velit, iste,
            ullam veniam recusandae cum, aut voluptates dolorem minus aspernatur
            beatae officia explicabo dolore quo vero quia non sint in est.
            Nostrum omnis fugiat, quasi voluptate excepturi velit aspernatur
            facilis rerum inventore qui, aperiam natus nobis minus consequuntur
            saepe culpa vero similique enim. Quas beatae repellendus quia natus
            ipsa harum sed corrupti repudiandae nobis porro. Sed quasi eum saepe
            minima, ipsum similique, soluta quam aperiam libero adipisci quas
            ipsam eos ab possimus nemo. Et obcaecati expedita nesciunt eos.
            Dolore vitae quo autem ut ratione, quasi aliquid atque porro cum
            voluptates. Exercitationem vero fugit eum modi ab iste
            reprehenderit!
          </Text>

          <Flex gapX={1} mt={4}>
            <Button
              ps={0}
              variant="plain"
              onClick={handleLike}
              colorPalette={like ? "blue" : "black"}
            >
              <Icon>
                <BiSolidLike />
              </Icon>
              Like
            </Button>
            <Button
              variant="plain"
              onClick={handleDisLike}
              colorPalette={!like ? "blue" : "black"}
            >
              <Icon>
                <BiSolidDislike />
              </Icon>
              Dislike
            </Button>
          </Flex>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex gapX={3} my={4}>
              <Root invalid={!!errors.comment}>
                <Input
                  placeholder="Enter Comment"
                  {...register("comment", { required: "Comment is required" })}
                />
                {errors.comment && (
                  <ErrorText>
                    <ErrorIcon className="error-icon" />
                    {errors.comment?.message}
                  </ErrorText>
                )}
              </Root>
              <Button type="submit" colorPalette="blue">
                Enter
              </Button>
            </Flex>
          </form>

          <Heading my={4} fontSize="3xl">
            Comments
          </Heading>
        </Container>
      </Box>
    </>
  );
}
