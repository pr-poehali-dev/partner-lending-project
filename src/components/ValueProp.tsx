import Icon from "@/components/ui/icon";

const ValueProp = () => {
  const items = [
    {
      icon: "Users",
      title: "Ваши рефералы создают",
      description: "Приглашённые вами люди делают сайты и приложения на платформе",
    },
    {
      icon: "Rocket",
      title: "Они запускают проекты",
      description: "Пополняют энергию и развивают свои идеи каждый день",
    },
    {
      icon: "Wallet",
      title: "Вы зарабатываете деньги",
      description: "Получаете процент с каждого их пополнения — автоматически",
    },
  ];

  return (
    <section id="value" className="py-20 sm:py-28 px-6 bg-snow">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-ink tracking-tighter mb-4">
          Они создают — вы зарабатываете
        </h2>
        <p className="text-lg sm:text-xl text-graphite mb-12 sm:mb-16 max-w-2xl mx-auto tracking-tight">
          Приводите людей на платформу: они делают сайты и приложения, а вы
          получаете доход с их активности
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-fog rounded-[28px] p-8 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-azure rounded-[20px] flex items-center justify-center mx-auto mb-6">
                <Icon name={item.icon} size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-ink tracking-tight mb-3">
                {item.title}
              </h3>
              <p className="text-base sm:text-lg text-graphite leading-relaxed tracking-tight">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;