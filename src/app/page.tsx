import Hero from "@/components/Hero";
import FeaturedSaplings from "@/components/FeaturedSaplings";
import Benefits from "@/components/Benefits";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedSaplings />
      <Benefits />
    </div>
  );
}
