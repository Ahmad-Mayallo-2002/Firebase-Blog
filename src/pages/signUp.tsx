import {
  Box,
  Button,
  Field,
  Heading,
  Icon,
  Image,
  Input,
  Link,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState, type ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import type { ISignUp } from "../assets/interface/signUp";
import { FaFeather, FaGoogle } from "react-icons/fa";
import defaultUser from "../assets/images/default-user.jpg";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "../assets/config/firebase";
import { uploadImageToCloudinary } from "../assets/utils/uploadFile.";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toaster } from "../components/ui/toaster";

export default function SignUp() {
  const [image, setImage] = useState<string>(defaultUser);
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISignUp>();
  const { Root, ErrorIcon, ErrorText, Label } = Field;

  const onSubmit = async (data: ISignUp) => {
    try {
      setLoading(true);
      // Create user in firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;

      const image =
        data.image && (await uploadImageToCloudinary(data.image[0]));

      await setDoc(doc(db, "user", user.uid), {
        uid: user.uid,
        email: user.email,
        username: data.username,
        createdAt: serverTimestamp(),
        image: JSON.stringify({
          url: image?.secure_url,
          public_id: image?.public_id,
        }),
        bio: data.bio,
      });

      toaster.success({
        title: "Signup successful",
        description: "Welcome to the blog app 🎉",
        duration: 3000,
        closable: true,
      });
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        toaster.error({
          title: "Error",
          duration: 3000,
          description: "Email already in use",
          closable: true,
        });
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onloadend = () => setImage(`${fileReader.result}`);
      fileReader.readAsDataURL(file);
    }
  };

  // watch password to validate confirmPassword
  const password = watch("password");
  return (
    <Box as="section" id="sign-up" className="flex-center form-container">
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <Heading className="flex-center">
          <Icon>
            <FaFeather />
          </Icon>
          BlogSpace
        </Heading>

        <Heading>Create Account</Heading>

        <Text>Join our community of tech enthusiasts</Text>

        {/* Image */}
        <Root invalid={!!errors.image} minH="150px" className="flex-center">
          <Label htmlFor="image" cursor="pointer">
            <Image src={image} rounded="full" w="150px" />
          </Label>
          <Input
            accept="image/*"
            id="image"
            {...register("image", {
              onChange,
            })}
            type="file"
            hidden
          />
        </Root>

        {/* Username */}
        <Root invalid={!!errors.username}>
          <Label>Username</Label>
          <Input
            placeholder="Enter username..."
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 6,
                message: "Username must be at least 6 characters",
              },
              maxLength: {
                value: 20,
                message: "Username must not exceed 20 characters",
              },
            })}
          />
          {errors.username && (
            <ErrorText>
              <ErrorIcon className="error-icon" /> {errors.username.message}
            </ErrorText>
          )}
        </Root>

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

        {/* Confirm Password */}
        <Root invalid={!!errors.confirmPassword}>
          <Label>Confirm Password</Label>
          <Input
            type="password"
            placeholder="Confirm password..."
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              minLength: {
                value: 9,
                message: "Confirm Password must be at least 9 characters",
              },
              maxLength: {
                value: 20,
                message: "Confirm Password must not exceed 20 characters",
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

        {/* Bio */}
        <Root>
          <Label>Bio</Label>
          <Textarea
            h="150px"
            resize="none"
            placeholder="Enter your bio..."
            {...register("bio")}
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
          loading={loading}
          loadingText="Loading..."
          w="full"
          type="submit"
          colorPalette="blue"
        >
          Create Account
        </Button>

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
            Or sign up with
          </Text>
        </Text>

        <Button mb={4} colorPalette="red" variant="outline">
          <FaGoogle />
          Google
        </Button>

        <Text textAlign="center" color="gray.400">
          Already have an account?{" "}
          <Link
            href="/login"
            color="blue.500"
            _hover={{ textDecor: "underline" }}
          >
            Login
          </Link>
        </Text>
      </Box>
    </Box>
  );
}
