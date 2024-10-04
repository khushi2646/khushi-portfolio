import Branding from "./components/home/branding";
import DigitalProducts from "./components/home/digitalProducts";
import Hero from "./components/home/hero";
import HeroBottom from "./components/home/heroBottom";

export default function Home() {

  return (
    <div
      className=" h-full bg-FAFAFA"
    >
      <Hero/>
      <HeroBottom/>
      <DigitalProducts/>
      <Branding/>
    </div>
  );
}
