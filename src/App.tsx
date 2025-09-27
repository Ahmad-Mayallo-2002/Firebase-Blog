import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/custom/header";
import Footer from "./components/custom/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Categories from "./pages/categories";
import Post from "./pages/post";
import SignUp from "./pages/signUp";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/categories" Component={Categories} />
          <Route path="/post/:id" Component={Post} />
          <Route path="/sign-up" Component={SignUp} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
