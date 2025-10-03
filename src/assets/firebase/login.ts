import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { toaster } from "../../components/ui/toaster";

export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    console.log("Logged in user:", user.uid);
    return user;
  } catch (error: any) {
    let description: string = "Something went wrong. Please try again.";

    if (error.code === "auth/user-not-found") {
      description = "No account found with this email.";
    } else if (error.code === "auth/wrong-password") {
      description = "Invalid password.";
    } else if (error.code === "auth/invalid-email") {
      description = "Invalid email address.";
    }

    toaster.error({
      title: "Error",
      duration: 3000,
      closable: true,
      description,
    });

    throw new Error(description);
  }
};
