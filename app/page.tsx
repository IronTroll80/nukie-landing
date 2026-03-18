import About from "./components/about";
import CTA from "./components/cta";
import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import ProductSection from "./components/productsSection";


export default function  Page(){
  return(
    <>
    <Header/>
    <Hero/>
    <Features/>
    <ProductSection/>
    <CTA/>
    {/* <About/> */}
    <Footer/>
    </>
  )
}