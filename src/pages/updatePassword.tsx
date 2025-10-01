import { Box, Button, Field, Heading, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaFeather } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface IUpdatePassword {
  password: string;
  confirmPassword: string;
}

export default function UpdatePassword() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUpdatePassword>();
  const { Root, Label, ErrorIcon, ErrorText } = Field;

  const onSubmit = (data: IUpdatePassword) => {
    try {
      setLoading(true);
      console.log("Password updated:", data.password);
      navigate("/login");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const password = watch("password");

  return (
    <Box
      as="section"
      id="update-password"
      className="form-container flex-center"
    >
      <Box as="form" onSubmit={handleSubmit(onSubmit)} maxW="400px" w="full">
        <Heading className="flex-center">
          <FaFeather /> Update Password
        </Heading>

        <Text>Enter your new password and confirm it</Text>

        {/* New Password */}
        <Root invalid={!!errors.password} mb={4}>
          <Label>New Password</Label>
          <Input
            type="password"
            placeholder="Enter new password"
            {...register("password", {
              required: "New password is required",
              minLength: {
                value: 9,
                message: "Password must be at least 9 characters",
              },
              maxLength: {
                value: 20,
                message: "Password must not exceed 20 characters",
              },
            })}
          />
          {errors.password && (
            <ErrorText>
              <ErrorIcon className="error-icon" /> {errors.password.message}
            </ErrorText>
          )}
        </Root>

        {/* Confirm New Password */}
        <Root invalid={!!errors.confirmPassword} mb={6}>
          <Label>Confirm New Password</Label>
          <Input
            type="password"
            placeholder="Confirm new password"
            {...register("confirmPassword", {
              required: "Confirm password is required",
              minLength: {
                value: 9,
                message: "Password must be at least 9 characters",
              },
              maxLength: {
                value: 20,
                message: "Password must not exceed 20 characters",
              },
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <ErrorText>
              <ErrorIcon className="error-icon" />{" "}
              {errors.confirmPassword.message}
            </ErrorText>
          )}
        </Root>

        {/* Submit Button */}
        <Button
          type="submit"
          w="full"
          colorPalette="blue"
          loading={loading}
          loadingText="Updating..."
        >
          Update Password
        </Button>
      </Box>
    </Box>
  );
}
