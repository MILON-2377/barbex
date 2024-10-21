import AboutUs from "@/components/about-us/AboutUs";
import Banner from "@/components/banner/Banner";
import Services from "@/components/services/Services";
import Team from "@/components/team/Team";
import Testimonial from "@/components/testimonial/Testimonial";
import WorkingTime from "@/components/working-time/WorkingTime";


export default function Home() {
  return <div className=" relative ">
    <Banner />
    <AboutUs />
    <Services />
    <WorkingTime />
    <Team />
    <Testimonial />
  </div>;
}
