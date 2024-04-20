import { MainContactSection } from "./molecules/MainContactSection/MainContactSection";
import { ContactUs } from "./molecules/ContactUs/ContactUs";
import { ComingToVisit } from "./molecules/ComingToVisit/ComingToVisit";

export default function Home() {
  return (
    <main>
      <MainContactSection />
      <ContactUs />
      <ComingToVisit />
    </main>
  );
}
