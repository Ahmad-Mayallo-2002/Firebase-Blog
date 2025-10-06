import { sendPasswordResetEmail } from "firebase/auth";
import { toaster } from "../../components/ui/toaster";
import { auth } from "../../assets/config/firebase";
export const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    toaster.success({
      title: "Success",

      description: "Password reset email sent!",
    });
    return true;
  } catch (error: any) {
    console.log(error);
    let description: string = "Failed to send reset email.";

    if (error.code === "auth/user-not-found")
      description = "No account found with this email.";
    else if (error.code === "auth/invalid-email")
      description = "Invalid email address.";

    toaster.error({
      title: "Error",

      description,
    });

    throw new Error(description);
  }
};
