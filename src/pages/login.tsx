import {
  Box,
  Button,
  Field,
  Heading,
  Icon,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaFeather, FaGoogle } from "react-icons/fa";
import type { ILogin } from "../assets/interface/login";
import { loginUser } from "../assets/firebase/login";
import { signInWithGoogle } from "../assets/firebase/googleAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();
  const { Root, ErrorIcon, ErrorText, Label } = Field;
  const navigate = useNavigate();

  const onSubmit = async (data: ILogin) => {
    try {
      setLoading(true);
      const result = await loginUser(data.email, data.password);
      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box as="section" id="login" className="flex-center form-container">
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <Heading className="flex-center">
          <Icon>
            <FaFeather />
          </Icon>
          BlogSpace
        </Heading>

        <Heading>Welcome Back</Heading>

        <Text>Sign in to your account to continue</Text>

        {/* Email */}
        <Root invalid={!!errors.email}>
          <Label>Email</Label>
          <Input
            placeholder="Enter email..."
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z]{4,20}[0-9]+@gmail\.com$/,
                message:
                  "Email must match pattern: letters(4-20) + numbers + @gmail.com",
              },
            })}
          />
          {errors.email && (
            <ErrorText>
              <ErrorIcon className="error-icon" /> {errors.email.message}
            </ErrorText>
          )}
        </Root>

        {/* Password */}
        <Root invalid={!!errors.password}>
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Enter password..."
            {...register("password", {
              required: "Password is required",
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

        <Text
          textAlign="center"
          my={4}
          color="gray.400"
          pos="relative"
          _before={{
            pos: "absolute",
            content: "''",
            w: "full",
            h: 0.25,
            top: "50%",
            scaleY: "-50%",
            left: 0,
            bgColor: "gray.200",
          }}
        >
          <Text as="span" bgColor="#fff" px={2} pos="relative">
            Or login with
          </Text>
        </Text>

        <Button
          mb={4}
          colorPalette="red"
          variant="outline"
          onClick={async () => {
            await signInWithGoogle();
            navigate("/");
          }}
        >
          <FaGoogle />
          Google
        </Button>

        {/* Submit Button */}
        <Button
          loading={loading}
          loadingText="Loading..."
          w="full"
          type="submit"
          colorPalette="blue"
        >
          Login
        </Button>

        <Text textAlign="center" color="gray.400">
          Don't have an account?{" "}
          <Link
            href="/sign-up"
            color="blue.500"
            _hover={{ textDecor: "underline" }}
          >
            Sign up
          </Link>
        </Text>

        <Text textAlign="center" color="gray.400">
          Don't remember password?{" "}
          <Link
            href="/forgot-password"
            color="blue.500"
            _hover={{ textDecor: "underline" }}
          >
            Forgot Password
          </Link>
        </Text>
      </Box>
    </Box>
  );
}
