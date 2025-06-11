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
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
          Как это работает
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 transform hover:scale-110 transition-transform duration-200">
                <Icon name={step.icon} size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 transform translate-x-12">
                  <Icon name="ArrowRight" size={24} className="text-gray-400" />
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
