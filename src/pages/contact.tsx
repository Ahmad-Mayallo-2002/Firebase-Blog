import ContactWays from "../components/contact/contactWays";
import Hero from "../components/contact/hero";

export default function Contact() {
  return (
    <>
      <Hero />
      <ContactWays />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.60649046174!2d-0.43124761032089226!3d51.52860700764721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2seg!4v1758975076608!5m2!1sen!2seg"
        width="100%"
        height="450"
        loading="lazy"
      ></iframe>
    </>
  );
}
