import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { toaster } from "../../components/ui/toaster";

export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("User logged out successfully");
  } catch (error: any) {
    console.error("Logout error:", error.message);
    toaster.error({
      title: "Error",
      duration: 3000,
      closable: true,
      description: "Failed to log out. Please try again.",
    });
    throw new Error("Failed to log out. Please try again.");
  }
};
