import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import { HowItWorks, Showcase, Manage, Features, Launch, Who } from "@/components/Sections";
import Plans, { Clients } from "@/components/Plans";
import { Lead, Faq } from "@/components/Lead";
import Footer from "@/components/Footer";
import { CLIENT_LOGOS } from "@/lib/content";

// Секции идут в том же порядке, что и в макете: 01…10 и подвал.
export default function Page() {
  return (
    <div className="wrap">
      <Nav />
      <Hero />
      <HowItWorks />
      <Showcase />
      <Manage />
      <Features />
      <Launch />
      <Who />
      <Plans />
      <Clients logos={CLIENT_LOGOS} />
      <Lead />
      <Faq />
      <Footer />
    </div>
  );
}
