import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 leading-tight">
          15-30% с каждого
          <br />
          <span className="text-primary">платежа клиента</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Рекомендуйте Poehali.dev и получайте пассивный доход 2 года
        </p>
        <Button
          size="lg"
          className="text-lg px-12 py-6 h-auto bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200"
        >
          Получить партнерскую ссылку →
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
