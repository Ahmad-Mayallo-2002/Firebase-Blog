import { Box, Button, Field, Heading, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaFeather } from "react-icons/fa";
import { resetPassword } from "../assets/firebase/resetPassword";

interface IEmail {
  email: string;
}

export default function ForgotPassword() {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEmail>();
  const { Root, Label, ErrorIcon, ErrorText } = Field;

  const onSubmit = async (data: IEmail) => {
    try {
      setLoading(true);
      const result = await resetPassword(data.email);
      console.log(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      as="section"
      id="forgotPassword"
      className="flex-center form-container"
    >
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <Heading className="flex-center" mb={3}>
          <FaFeather />
          Remember Password
        </Heading>

        <Heading size="md" mb={2}>
          Send Verification Code
        </Heading>

        <Text mb={4}>Enter your email to receive a verification code</Text>

        {/* Email Input */}
        <Root mt={4} invalid={!!errors.email}>
          <Label>Email</Label>
          <Input
            placeholder="Enter your email..."
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <ErrorText>
              <ErrorIcon className="error-icon" /> {errors.email.message}
            </ErrorText>
          )}
        </Root>

        {/* Submit Button */}
        <Button
          mt={3}
          type="submit"
          w="full"
          colorPalette="blue"
          loading={loading}
          loadingText="Sending..."
        >
          Send Code
        </Button>
      </Box>
    </Box>
  );
}
