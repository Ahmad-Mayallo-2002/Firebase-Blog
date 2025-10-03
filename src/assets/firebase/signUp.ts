import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { uploadImageToCloudinary } from "../utils/uploadFile.";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { toaster } from "../../components/ui/toaster";
import type { ISignUp } from "../interface/signUp";

export const signUpUser = async (data: ISignUp) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const user = userCredential.user;

    const image = data.image && (await uploadImageToCloudinary(data.image[0]));

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
    });
  } catch (error: any) {
    if (error.code === "auth/email-already-in-use") {
      toaster.error({
        title: "Error",

        description: "Email already in use",
      });
    }
  }
};
