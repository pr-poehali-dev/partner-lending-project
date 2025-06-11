import { Button } from "@/components/ui/button";
import { HandWrittenTitle } from "@/components/ui/hand-writing-text";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-4xl mx-auto">
        <HandWrittenTitle
          title="Зарабатывайте больше"
          subtitle="вместе с poehali.dev"
        />
        <Button
          size="lg"
          className="text-lg px-12 py-6 h-auto bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 mt-8"
        >
          Получить партнерскую ссылку →
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
