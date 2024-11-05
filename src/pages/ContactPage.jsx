import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ContactForm from "../components/contact/ContactForm";

const ContactPage = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Contact | Gadgets Heaven</title>
        </Helmet>
      </HelmetProvider>
      <div className="max-w-7xl mx-auto">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
