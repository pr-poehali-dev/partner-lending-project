import { useState } from "react";
import { Slider } from "@/components/ui/slider";

const IncomeCalculator = () => {
  const [clients, setClients] = useState([1000]);
  const [averageCheck, setAverageCheck] = useState([3000]);

  const tiers = [
    { upTo: 1000, rate: 0.15 },
    { upTo: 5000, rate: 0.2 },
    { upTo: Infinity, rate: 0.25 },
  ];

  const totalClients = clients[0];
  const check = averageCheck[0];

  let monthlyIncome = 0;
  let remaining = totalClients;
  let prevCap = 0;
  for (const tier of tiers) {
    const clientsInTier = Math.max(
      0,
      Math.min(totalClients, tier.upTo) - prevCap,
    );
    if (clientsInTier <= 0) break;
    monthlyIncome += clientsInTier * check * tier.rate;
    remaining -= clientsInTier;
    prevCap = tier.upTo;
    if (remaining <= 0) break;
  }
  monthlyIncome = Math.round(monthlyIncome);

  const yearlyIncome = monthlyIncome * 12;
  const twoYearIncome = Math.round(yearlyIncome * 1.5);

  const currentRate =
    totalClients > 5000 ? 25 : totalClients > 1000 ? 20 : 15;

  return (
    <section className="py-20 sm:py-28 px-6 bg-snow">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold text-center text-ink tracking-tighter mb-12 sm:mb-16">
          Ваш потенциальный доход
        </h2>

        <div className="bg-fog rounded-[28px] p-6 sm:p-10">
          <div className="space-y-10 sm:space-y-12">
            <div>
              <div className="flex justify-between items-center mb-4 gap-3">
                <label className="text-base sm:text-lg font-medium text-ink tracking-tight">
                  Привлечённые клиенты
                </label>
                <span className="text-xl sm:text-2xl font-bold text-azure">
                  {clients[0]}
                </span>
              </div>
              <Slider
                value={clients}
                onValueChange={setClients}
                max={10000}
                min={1}
                step={1}
                className="py-4"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-4 gap-3">
                <label className="text-base sm:text-lg font-medium text-ink tracking-tight">
                  Средний чек клиента
                </label>
                <span className="text-xl sm:text-2xl font-bold text-azure whitespace-nowrap">
                  {averageCheck[0].toLocaleString()}₽/мес
                </span>
              </div>
              <Slider
                value={averageCheck}
                onValueChange={setAverageCheck}
                max={10000}
                min={1000}
                step={500}
                className="py-4"
              />
            </div>

            <div className="bg-azure/10 rounded-[20px] p-5 sm:p-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-base sm:text-lg font-medium text-ink tracking-tight">
                  Ваша комиссия — до
                </span>
                <span className="text-xl sm:text-2xl font-bold text-azure">
                  25%
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { label: "до 1 000", rate: 15, active: currentRate === 15 },
                  {
                    label: "1 000–5 000",
                    rate: 20,
                    active: currentRate === 20,
                  },
                  { label: "от 5 000", rate: 25, active: currentRate === 25 },
                ].map((tier) => (
                  <div
                    key={tier.rate}
                    className={`rounded-[14px] px-2 py-3 text-center transition-colors duration-200 ${
                      tier.active
                        ? "bg-azure text-white"
                        : "bg-snow text-ink"
                    }`}
                  >
                    <div className="text-lg sm:text-xl font-bold">
                      {tier.rate}%
                    </div>
                    <div
                      className={`text-xs sm:text-sm tracking-tight ${
                        tier.active ? "text-white/80" : "text-graphite"
                      }`}
                    >
                      {tier.label}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-graphite text-center mt-4 tracking-tight">
                Ставка растёт по мере увеличения числа клиентов
              </p>
            </div>

            <div className="bg-snow p-6 sm:p-8 rounded-[20px]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-azure tracking-tight mb-2">
                    {monthlyIncome.toLocaleString()}₽
                  </div>
                  <div className="text-graphite tracking-tight">В месяц</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-azure tracking-tight mb-2">
                    {yearlyIncome.toLocaleString()}₽
                  </div>
                  <div className="text-graphite tracking-tight">В год</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-azure tracking-tight mb-2">
                    {twoYearIncome.toLocaleString()}₽
                  </div>
                  <div className="text-graphite tracking-tight">За 2 года</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncomeCalculator;