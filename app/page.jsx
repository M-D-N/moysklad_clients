import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Screens from "@/components/Screens";
import Spots from "@/components/Spots";
import { Lead, Footer } from "@/components/Lead";
import {
  Facts,
  HowItWorks,
  Features,
  Ledger,
  Cases,
  Reliability,
  Plans,
  Faq,
} from "@/components/Blocks";

export default function Page() {
  return (
    <div className="wrap">
      <Nav />
      <Hero />
      <Facts />
      <HowItWorks />
      <Screens />
      <Spots />
      <Features />
      <Ledger />
      <Cases />
      <Reliability />
      <Plans />
      <Faq />
      <Lead />
      <Footer />
    </div>
  );
}
