import CTA from "../components/cta";
import Footer from "../components/footer";
import Header from "../components/header";
import EstateHero from "./components/estateHero";
import HowEstateWorks from "./components/howEstateWorks";
import EstateOffering from "./components/estateOffering";
import WhoEstateFor from "./components/whoEstateFor";

export default function EstatesPage() {
  return (
    <>
        <Header />
        <EstateHero />
        <EstateOffering />
        <HowEstateWorks />
        <WhoEstateFor />
        <CTA />
        <Footer />

      <h1>Estates Page</h1>
    </>
  )
}