import ContactForm from "@app/components/ContactForm";
import ContactHeading from "@app/components/ContactHeading";
import FAQSection from "@app/components/FAQSection";

const Contact = () => {
  return (
    <section className="w-full">
      <ContactHeading />
      <ContactForm />
      <FAQSection />
    </section>
  );
};

export default Contact;
