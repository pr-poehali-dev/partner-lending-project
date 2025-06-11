import HeroSection from "@/components/HeroSection";
import StatsCards from "@/components/StatsCards";
import IncomeCalculator from "@/components/IncomeCalculator";
import ProcessSteps from "@/components/ProcessSteps";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsCards />
      <IncomeCalculator />
      <ProcessSteps />
      <ContactForm />
    </div>
  );
};

export default Index;
