import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../assets/config/firebase";
import { toaster } from "../../components/ui/toaster";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    // 1. Open Google popup
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // 2. Check if user already exists in Firestore
    const userRef = doc(db, "user", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      // 3. Add new user to Firestore
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        username: user.displayName || "Anonymous",
        createdAt: serverTimestamp(),
        image: {
          url: user.photoURL,
          public_id: "", // Cloudinary not used here, Firebase stores Google’s photo URL
        },
        bio: "Hello, World",
      });
    }

    console.log("Google login success:", user.email);
    return user;
  } catch (error: any) {
    console.error("Google sign-in error:", error);
    toaster.error({
      title: "Error",
      description: "Google sign-in failed. Please try again.",
    });
    throw new Error("Google sign-in failed. Please try again.");
  }
};
