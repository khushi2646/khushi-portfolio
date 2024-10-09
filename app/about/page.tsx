import AboutContent from "../components/about/aboutContent";
import Carousel from "../components/about/carousel";
import Hero from "../components/about/hero";
import ReachOut from "../components/about/reachOut";
import WorkExperience from "../components/about/workExperience";


export default function About() {

  return (
    <div
      className=" h-full "
    >
<Hero/>
<AboutContent/>
<WorkExperience/>
<ReachOut/>
<Carousel/>
    </div>
  );
}
