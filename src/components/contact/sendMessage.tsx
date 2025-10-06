import {
  Box,
  Button,
  Field,
  Flex,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { toaster } from "../ui/toaster";
import { useState } from "react";
import { sendMail } from "../../utils/emailSend";

interface Message {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function SendMessage() {
  const { Label, Root, ErrorIcon, ErrorText } = Field;
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Message>();
  const [loading, setLoading] = useState<boolean>(false);
  const onSubmit = async (_data: any, event: any) => {
    try {
      setLoading(true);
      await sendMail(event.target);
      toaster.success({
        title: "Success",
        description: "Message sent successfully",
      });
    } catch (error: any) {
      console.error(error);
      toaster.error({
        title: "Error",
        description: "There is error",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Box className="main-box">
        <Heading as="h3">Send us a message</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack gap={4}>
            <Flex w="100%" gap={4} flexDir={{ base: "column", md: "row" }}>
              <Root invalid={!!errors.firstName}>
                <Label>First Name</Label>
                <Input
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                />

                {errors.firstName && (
                  <ErrorText className="center-y">
                    <ErrorIcon className="error-icon" />
                    {errors.firstName?.message as string}
                  </ErrorText>
                )}
              </Root>

              <Root invalid={!!errors.lastName}>
                <Label>Last Name</Label>
                <Input
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                />

                {errors.lastName && (
                  <ErrorText className="center-y">
                    <ErrorIcon className="error-icon" />
                    {errors.lastName?.message as string}
                  </ErrorText>
                )}
              </Root>
            </Flex>

            <Root invalid={!!errors.email}>
              <Label>Email</Label>
              <Input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Za-z]{5,20}[0-9]+@gmail\.com$/,
                    message: "Invalid email syntax",
                  },
                })}
              />

              {errors.email && (
                <ErrorText className="center-y">
                  <ErrorIcon className="error-icon" />
                  {errors.email?.message as string}
                </ErrorText>
              )}
            </Root>

            <Root invalid={!!errors.message}>
              <Label>Message</Label>
              <Textarea
                {...register("message", {
                  required: "Message is required",
                })}
                h="150px"
                resize="none"
              ></Textarea>

              {errors.message && (
                <ErrorText className="center-y">
                  <ErrorIcon className="error-icon" />
                  {errors.message?.message as string}
                </ErrorText>
              )}
            </Root>

            <Button
              loading={loading}
              loadingText="Loading..."
              colorPalette="blue"
              w="full"
              type="submit"
            >
              Send Message
            </Button>
          </VStack>
        </form>
      </Box>
    </>
  );
}
