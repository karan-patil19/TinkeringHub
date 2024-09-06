import { ExampleNavbarThree } from "../components/Navigation"
import { HeroOne } from "../components/Hero"
import {CarouselSize} from "../components/Caurasoal"
import ActivitiesPage from "../components/ActivitiesPage"
import SheetDemo from "../components/SheetDemo"
 import {CarouselSpacing} from "../components/carsule"
 import  NavAndContentSection from "../components/navContent"
 import HeroSection from "../components/description";
 import GallerySection from "../components/gallery";
 import Hackathon from "../components/hackathon";
 import Tracks from "../components/tracks";
 import OurTeams from "../components/teams";
 import { Faq } from "../components/faq";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 justify-between bg-primary_color1"> {/* Dark yellow background */}
      <div className="w-full max-w-screen-lg bg-primary_color2  rounded-lg shadow-lg"> {/* Light yellow inner box */}
        <ExampleNavbarThree></ExampleNavbarThree>
        <HeroOne></HeroOne>
        <CarouselSize></CarouselSize>
        <ActivitiesPage></ActivitiesPage>
        <CarouselSpacing></CarouselSpacing>
        <HeroSection></HeroSection>
       <NavAndContentSection></NavAndContentSection>
       <GallerySection></GallerySection>
       <Hackathon></Hackathon>
       <Tracks></Tracks>
       <OurTeams></OurTeams>
       <Faq></Faq>
       

        
        
      </div>
    </main>
  )
}