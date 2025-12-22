import CTA from "../components/sections/cta/default";
import FAQ from "../components/sections/faq/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import Items from "../components/sections/items/default";
import Logos from "../components/sections/logos/default";
import Navbar from "../components/sections/navbar/default";
import Pricing from "../components/sections/pricing/default";
// ✅ removed: Stats section (not relevant to Monwhooper build)
import { LayoutLines } from "../components/ui/layout-lines";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <LayoutLines />
      <Navbar />
      <Hero />
      <Logos />
      <Items />
      {/* ✅ removed: <Stats /> */}
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
