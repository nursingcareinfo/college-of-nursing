import { Hero } from "@/components/home/hero";
import { Accreditation } from "@/components/home/accreditation";
import { TrustStats } from "@/components/home/trust-stats";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { FeaturedProgram } from "@/components/home/featured-program";
import { CampusLife } from "@/components/home/campus-life";
import { AdmissionCTA } from "@/components/home/admission-cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Accreditation />
      <TrustStats />
      <WhyChooseUs />
      <FeaturedProgram />
      <CampusLife />
      <AdmissionCTA />
    </main>
  );
}
