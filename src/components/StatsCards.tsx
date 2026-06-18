const StatsCards = () => {
  const stats = [
    {
      number: "до 25%",
      label: "комиссия с платежей",
    },
    {
      number: "24 мес",
      label: "доход с клиента",
    },
    {
      number: "5000₽",
      label: "минимальная выплата",
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-6 bg-fog">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center bg-snow rounded-[28px] p-10 sm:p-12 min-h-[200px] transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="text-5xl sm:text-6xl font-bold text-azure tracking-tighter mb-4">
                {stat.number}
              </div>
              <p className="text-base sm:text-lg text-graphite tracking-tight whitespace-nowrap">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCards;