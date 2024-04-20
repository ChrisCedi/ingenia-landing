import { ContactForm } from "../ContactForm/ContactForm";

export const ContactUs = () => {
  return (
    <div className="min-h-screen pb-12">
      <div className="flex  min-h-fit w-full pt-16 sm:pt-24 md:pt-36 pb-7 px-8 bg-orange flex-col items-center ">
        <h3 className="text-white text-lg md:text-2xl">
          Ingenia is located in two major bussiness & government hubs in the
          Americas
        </h3>
        <h1 className="text-white text-4xl font-bold md:text-6xl py-6">
          Contact us
        </h1>
        <h2 className="text-white text-lg md:text-2xl">
          Send us an e-mail and we will get back to you:
        </h2>
      </div>
      <ContactForm />
    </div>
  );
};
