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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.94 4.74a1.3 1.3 0 0 0-1.32-.2L3.3 11.28c-.86.34-.8 1.58.08 1.85l4.3 1.34 1.62 5.04c.1.32.36.55.69.6.33.05.66-.08.86-.34l2.38-3.08 4.36 3.2c.43.32 1.05.1 1.18-.42l3.2-13.6a1.3 1.3 0 0 0-.45-1.13ZM9.5 14.3l-.65 3.34-.97-3.02 7.7-5.3-6.08 4.98Z"/>
            </svg>
            Стать партнёром в Телеграм
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;