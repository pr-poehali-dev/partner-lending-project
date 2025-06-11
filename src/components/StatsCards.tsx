import { Card, CardContent } from "@/components/ui/card";

const StatsCards = () => {
  const stats = [
    {
      number: "15-30%",
      label: "комиссия с платежей",
    },
    {
      number: "24",
      label: "месяца получаете доход с клиента",
    },
    {
      number: "5000₽",
      label: "минимальная выплата каждый месяц",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center border-0 shadow-lg bg-white hover:shadow-xl transition-shadow duration-200"
            >
              <CardContent className="p-12">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
                  {stat.number}
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCards;
