import { Box, Button, Field, Heading, Input, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaFeather } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface ICode {
  code: string;
}

export default function VerificationCode() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICode>();
  const navigate = useNavigate();
  const { Root, Label, ErrorIcon, ErrorText } = Field;

  const onSubmit = (data: ICode) => {
    try {
      console.log("Verification code:", data.code);
      navigate("/update-password");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      as="section"
      id="verification-code"
      className="form-container flex-center"
    >
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <Heading className="flex-center">
          <FaFeather />
          Verification Code
        </Heading>

        <Heading>Confirm your code</Heading>

        <Text>Enter your verification code to confirm it</Text>

        {/* Verification Code Input */}
        <Root invalid={!!errors.code} mt={4}>
          <Label>Verification Code</Label>
          <Input
            placeholder="Enter code..."
            maxLength={6}
            {...register("code", {
              required: "Code is required",
              minLength: {
                value: 6,
                message: "Code must be 6 digits",
              },
              maxLength: {
                value: 6,
                message: "Code must be 6 digits",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "Code must contain only numbers",
              },
            })}
          />
          {errors.code && (
            <ErrorText>
              <ErrorIcon className="error-icon" /> {errors.code.message}
            </ErrorText>
          )}
        </Root>

        {/* Submit Button */}
        <Button mt={3} type="submit" w="full" colorPalette="blue">
          Confirm Code
        </Button>
      </Box>
    </Box>
  );
}
