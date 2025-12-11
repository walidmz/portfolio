import { Mail, Phone, User } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Information</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-4">
            <Mail className="h-6 w-6 text-primary" />
            <a href="mailto:walidmarzouk.dev@gmail.com" className="text-lg">walidmarzouk.dev@gmail.com</a>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="h-6 w-6 text-primary" />
            <a href="tel:+21699054353" className="text-lg">+216 99 054 535</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
