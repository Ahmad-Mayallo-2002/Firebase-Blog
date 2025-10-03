export interface ISignUp {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio?: string;
  image?: FileList;
}
