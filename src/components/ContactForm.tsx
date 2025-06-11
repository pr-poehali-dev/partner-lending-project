import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Здесь будет логика отправки формы
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-4">
          Готовы начать зарабатывать?
        </h2>

        <Card className="border-0 shadow-2xl mt-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-800">
              Становитесь партнером прямо сейчас
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label
                  htmlFor="name"
                  className="text-base font-medium text-gray-700"
                >
                  Ваше имя *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 h-12 text-base"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="text-base font-medium text-gray-700"
                >
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 h-12 text-base"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <Label
                  htmlFor="phone"
                  className="text-base font-medium text-gray-700"
                >
                  Телефон (опционально)
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 h-12 text-base"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-lg py-6 h-auto bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200"
              >
                Стать партнером
              </Button>
            </form>

            <p className="text-sm text-gray-500 text-center mt-6">
              Нажимая кнопку, вы соглашаетесь с условиями партнерской программы
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;
