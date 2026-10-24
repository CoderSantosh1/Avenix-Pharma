import Hero from "@/app/components/home/Hero";
import AboutUs from "@/app/components/home/About";
import Services from "@/app/components/home/Services";
import Choose from "@/app/components/home/Choose";
import Products from "@/app/components/home/Products";

import Testimonials from "@/app/components/home/Testimonials";
import Insights from "@/app/components/home/Insights";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Choose />
      <Products />
      
      <Testimonials />
      <Insights />
    </>
  );
}
