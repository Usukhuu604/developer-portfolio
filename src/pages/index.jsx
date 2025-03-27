import { IntroductionSection } from "@/components/IntroductionSection";
import { SkillsSection } from "@/components/SkillsSection";
import { Projects } from "@/components/Projects";
import { Companies } from "@/components/Companies";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        display: "grid",
        gridTemplateColumns: "1730px",
        gridTemplateRows: "1635px 700px 815px 1500px",
        gap: "5px",
      }}
    >
      <IntroductionSection />
      <SkillsSection />
      <Projects />
      <Companies />
    </div>
  );
};

export default HomePage;
