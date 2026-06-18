import Icon from "@/components/ui/icon";

const ContactForm = () => {
  return (
    <section className="py-20 sm:py-28 px-6 bg-fog">
      <div className="max-w-5xl mx-auto">
        <div className="bg-black rounded-[28px] px-6 py-16 sm:px-12 sm:py-24 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tighter mb-4">
            Готовы начать зарабатывать?
          </h2>
          <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-xl mx-auto tracking-tight">
            Присоединяйтесь к партнёрской программе в Телеграме прямо сейчас
          </p>

          <a
            href="https://t.me/poehaliCareers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-azure text-white text-base sm:text-lg font-medium rounded-full px-8 py-4 hover:opacity-90 transition-opacity duration-200"
          >
            <Icon name="Send" size={22} />
            Стать партнёром в Телеграм
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
