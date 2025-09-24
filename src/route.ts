import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import SignUp from "./pages/signUp";
import Categories from "./pages/categories";
import Post from "./pages/post";

export const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/about", Component: About },
  { path: "/contact", Component: Contact },
  { path: "/sign-up", Component: SignUp },
  { path: "/categories", Component: Categories },
  { path: "/post/:id", Component: Post },
]);
