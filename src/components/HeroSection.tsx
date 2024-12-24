import HeroSectionBottom from "./hero-section/HeroSectionBottom";
import HeroSectionTop from "./hero-section/HeroSectionTop";

const HeroSection: React.FC = () => {
  return (
    <section>
      <HeroSectionTop />
      <HeroSectionBottom />
    </section>
  );
};

export default HeroSection;
