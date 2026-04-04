import CTA from "../components/cta";
import Footer from "../components/footer";
import Header from "../components/header"
import HowOfficeWorks from "./components/howOfficeWorks";
import Offering from "./components/offering";
import OfficeHero from "./components/officeHero"
import WhoItsForOffice from "./components/whoOfficeFor";

export default function OfficesPage() {
  return (
    <>
    <Header/>
    <OfficeHero/>
    <Offering/>
    <HowOfficeWorks/>
    <WhoItsForOffice/>
    <CTA/>
    <Footer/>
    </>
  );
}