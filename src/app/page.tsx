
// import Hero from "@/Components/Hero/Hero";
import { CombinedVortexComponent } from "@/Components/Hero/Hero";
import OurMission from "@/Components/OurMission/Ourmission";

import { AnimatedTooltipPreview } from "@/Components/Welcome/Welcome";
import  { InfiniteMovingCardsDemo } from "@/Components/Whychoese/Whychoese";


export default function Home() {
  return (
  <>
  <CombinedVortexComponent></CombinedVortexComponent>
  <AnimatedTooltipPreview></AnimatedTooltipPreview>
  <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
  <OurMission></OurMission>
</>
 
);
}
