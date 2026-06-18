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
      title: "Вы зарабатываете",
      description: "Получаете процент с каждого их пополнения — автоматически",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          Они создают — вы зарабатываете
        </h2>
        <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
          Приводите людей на платформу: они делают сайты и приложения, а вы
          получаете доход с их активности
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-200"
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name={item.icon} size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
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
