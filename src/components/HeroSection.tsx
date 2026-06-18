import { HandWrittenTitle } from "@/components/ui/hand-writing-text";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-4xl mx-auto">
        <HandWrittenTitle
          title="Зарабатывайте больше"
          subtitle={
            <>
              вместе с{" "}
              <a
                href="https://poehali.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 hover:underline"
              >
                poehali.dev
              </a>
            </>
          }
        />
        <a
          href="#"
          className="inline-flex items-center justify-center mt-8 text-primary animate-bounce"
          aria-label="Прокрутить вниз"
        >
          <Icon name="ChevronDown" size={48} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;