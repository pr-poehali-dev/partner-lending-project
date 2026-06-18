import { HandWrittenTitle } from "@/components/ui/hand-writing-text";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-fog px-6">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-ink tracking-tight mb-2">
          Партнёрская программа
        </p>

        <HandWrittenTitle
          title="Зарабатывайте больше"
          subtitle={
            <>
              вместе с{" "}
              <a
                href="https://poehali.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0066cc] hover:underline"
              >
                poehali.dev
              </a>
            </>
          }
        />

        <a
          href="#value"
          className="inline-flex items-center gap-2 bg-azure text-white text-base sm:text-lg font-medium rounded-full px-7 py-3 hover:opacity-90 transition-opacity duration-200"
        >
          Стать партнёром
        </a>
      </div>
    </section>
  );
};

export default HeroSection;