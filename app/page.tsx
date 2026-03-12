import About from "./components/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import ProductSection from "./components/productsSection";


export default function  Page(){
  return(
    <>
    <Hero/>
    <ProductSection/>
    <About/>
    <Footer/>
    </>
  )
}