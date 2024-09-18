
import Hero from "@/Components/Hero/Hero";
import OurMission from "@/Components/OurMission/Ourmission";

import { AnimatedTooltipPreview } from "@/Components/Welcome/Welcome";
import WhyChoose from "@/Components/Whychoese/Whychoese";


export default function Home() {
  return (
  <>
  <Hero></Hero>
  <AnimatedTooltipPreview></AnimatedTooltipPreview>
  <WhyChoose></WhyChoose> 
  <OurMission></OurMission>
</>
 
);
}
