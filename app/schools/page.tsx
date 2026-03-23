import Footer from "../components/footer";
import Header from "../components/header";
import CoreFeatures from "./components/coreFeatures";
import HowItWorks from "./components/howItWorks";
import ProblemStatement from "./components/problemStatement";
import ProductShowcase from "./components/productShowcase";
import SchoolHero from "./components/schoolHero";
import WhoItsForOrbit from "./components/whoItsFor";

export default function Schools (){
    return(
        <>
        
        <Header/>
        <SchoolHero/>
        <ProblemStatement/>
        <HowItWorks/>
        <CoreFeatures/>
        <WhoItsForOrbit/>
        <ProductShowcase/>
        <Footer/>
        
        </>
    )
}