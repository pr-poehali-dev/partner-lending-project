import Icon from "@/components/ui/icon";

const ProcessSteps = () => {
  const steps = [
    {
      icon: "Clock",
      title: "Регистрация за 1 минуту",
      description: "Получаете уникальную ссылку",
    },
    {
      icon: "Share2",
      title: "Делитесь с аудиторией",
      description: "Клиенты переходят и регистрируются",
    },
    {
      icon: "Coins",
      title: "Получаете % автоматически",
      description: "С каждого пополнения энергии",
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-6 bg-fog">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold text-center text-ink tracking-tighter mb-12 sm:mb-16">
          Как это работает
        </h2>

        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="w-20 h-20 bg-azure rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-200 hover:scale-110">
                <Icon name={step.icon} size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-ink tracking-tight mb-3">
                {step.title}
              </h3>
              <p className="text-base sm:text-lg text-graphite leading-relaxed tracking-tight">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 -right-8 lg:-right-10">
                  <Icon name="ArrowRight" size={24} className="text-graphite" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
