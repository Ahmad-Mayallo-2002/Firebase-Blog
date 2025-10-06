import emailjs from "@emailjs/browser";
export const sendMail = async (form: string | HTMLFormElement) => {
  await emailjs.sendForm(
    import.meta.env.VITE_EMAIL_JS_SERVICE_ID as string,
    import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
    form,
    import.meta.env.VITE_EMAIL_JS_PUBLIC_ID
  );
};
