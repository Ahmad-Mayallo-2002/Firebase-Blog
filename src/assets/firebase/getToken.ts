import { getAuth } from "firebase/auth";

export const getToken = async (): Promise<string> => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) throw new Error("Invalid Token or not found");
  const token = await user.getIdToken();
  console.log(token);
  return token;
};
