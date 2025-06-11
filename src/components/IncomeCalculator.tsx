import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

const IncomeCalculator = () => {
  const [clients, setClients] = useState([10]);
  const [averageCheck, setAverageCheck] = useState([3000]);

  const monthlyIncome = Math.round(clients[0] * averageCheck[0] * 0.15);
  const yearlyIncome = monthlyIncome * 12;
  const twoYearIncome = Math.round(yearlyIncome * 1.5); // Учитываем убывание клиентов

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
          Ваш потенциальный доход
        </h2>

        <Card className="border-0 shadow-2xl">
          <CardHeader className="pb-8">
            <CardTitle className="text-2xl text-center text-gray-800">
              Калькулятор дохода
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-12">
              {/* Слайдер клиентов */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-lg font-medium text-gray-700">
                    Привлеченные клиенты
                  </label>
                  <span className="text-2xl font-bold text-primary">
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

              {/* Слайдер среднего чека */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-lg font-medium text-gray-700">
                    Средний чек клиента
                  </label>
                  <span className="text-2xl font-bold text-primary">
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

              {/* Результаты */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {monthlyIncome.toLocaleString()}₽
                    </div>
                    <div className="text-gray-600">В месяц</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {yearlyIncome.toLocaleString()}₽
                    </div>
                    <div className="text-gray-600">В год</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {twoYearIncome.toLocaleString()}₽
                    </div>
                    <div className="text-gray-600">За 2 года</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default IncomeCalculator;
