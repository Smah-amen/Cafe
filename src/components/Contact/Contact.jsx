import ContactForm from "./ContactForm";
import Hero from "../Hero";
import { useEffect } from "react";

export default function Contact({ setBold, noNavBar }) {
  useEffect(() => {
    setBold(noNavBar);
  });
  return (
    <div>
      <Hero name={"Contact us"} />
      <ContactForm />
    </div>
  );
}
