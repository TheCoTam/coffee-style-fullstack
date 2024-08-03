import ContactAddress from "@/components/contact/contact-address";
import ContactDirectory from "@/components/contact/contact-directory";
import ContactForm from "@/components/contact/contact-form";
import ContactSubscribe from "@/components/contact/contact-subscribe";

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-28px)] flex flex-col items-center gap-14">
      <ContactAddress />
      <ContactForm />
      <ContactDirectory />
      <ContactSubscribe />
    </div>
  );
};

export default Contact;
