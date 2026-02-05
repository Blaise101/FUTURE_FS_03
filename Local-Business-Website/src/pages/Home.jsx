import FeaturedCollection from "../components/home/FeaturedCollection";
import Hero from "../components/home/Hero";
import StoryTeaser from "../components/home/StoryTeaser";
import Testimonials from "../components/home/Testimonials";
import WhyUs from "../components/home/WhyUs";

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      <Hero />
      <WhyUs />
      <FeaturedCollection />
      <StoryTeaser />
      <Testimonials />
    </div>
  );
}
