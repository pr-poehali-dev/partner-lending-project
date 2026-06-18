import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          Готовы начать зарабатывать?
        </h2>
        <p className="text-xl text-gray-600 mb-10">
          Присоединяйтесь к партнерской программе в Телеграме прямо сейчас
        </p>

        <Button
          asChild
          size="lg"
          className="text-lg px-12 py-6 h-auto bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200"
        >
          <a
            href="https://t.me/poehaliCareers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3"
          >
            <Icon name="Send" size={24} />
            Стать партнером в Телеграм
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ContactForm;
