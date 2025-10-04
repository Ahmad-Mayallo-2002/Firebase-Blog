import { getAuth } from "firebase/auth";
import { toaster } from "../../components/ui/toaster";

const auth = getAuth();

export const getToken = async (): Promise<string> => {
  const user = auth.currentUser;
  if (!user) {
    toaster.error({
      title: "Error",
      description: "Invalid Token or not found",
    });
    throw new Error("Invalid Token or not found");
  }
  const token = await user.getIdToken();
  return token;
};
