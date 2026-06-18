import { useState } from "react";
import { Slider } from "@/components/ui/slider";

const IncomeCalculator = () => {
  const [clients, setClients] = useState([10]);
  const [averageCheck, setAverageCheck] = useState([3000]);

  const monthlyIncome = Math.round(clients[0] * averageCheck[0] * 0.15);
  const yearlyIncome = monthlyIncome * 12;
  const twoYearIncome = Math.round(yearlyIncome * 1.5);

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
                max={100}
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
