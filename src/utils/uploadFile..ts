import axios from "axios";
import type { ICloudImage } from "../assets/interface/cloudImage";

export const uploadImageToCloudinary = async (
  file: File
): Promise<ICloudImage | void> => {
  if (!file)
    return {
      secure_url:
        import.meta.env.VITE_MAIN_URL +
        "/" +
        import.meta.env.VITE_DEFAULT_USER_IMAGE,
      public_id: "",
    };

  const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_NAME;
  const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      formData
    );
    return await response.data;
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};
