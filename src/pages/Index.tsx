import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";
import { Github, Mail, Loader2, Send, Moon, Sun } from "lucide-react";

export default function HomePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { toast } = useToast();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({
      title: "Заявка отправлена!",
      description: "Наш менеджер свяжется с вами в течение 24 часов.",
    });
    setIsSubmitting(false);
    (event.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Package" size={16} className="text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">Node Executable Builder</span>
          </div>
          <div className="flex items-center gap-3">
            <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#features" className="hover:text-foreground transition-colors">Возможности</a>
              <a href="#how" className="hover:text-foreground transition-colors">Как работает</a>
              <a href="#platforms" className="hover:text-foreground transition-colors">Платформы</a>
              <a href="#contact" className="hover:text-foreground transition-colors">Контакты</a>
            </nav>
            <Button variant="outline" size="icon" onClick={toggleTheme}>
              {isDark ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-5xl text-center">
          <Badge variant="secondary" className="mb-6">
            Защита исходного кода · Простое распространение · Кроссплатформенность
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
            Node.js Executable Builder
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Профессиональный инструмент для компиляции Node.js-приложений в автономные
            исполняемые файлы под Windows, Linux и macOS — без необходимости установки
            Node.js на стороне пользователя.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="#contact">Получить лицензию</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <a href="#how">Как это работает</a>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" size={16} className="text-primary" />
              <span>С 2020 года на рынке</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" size={16} className="text-primary" />
              <span>Зарегистрировано в реестре ПО</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" size={16} className="text-primary" />
              <span>Коммерческое применение</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 border-y bg-muted/20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">2020</div>
              <div className="text-sm text-muted-foreground">Год создания</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">3</div>
              <div className="text-sm text-muted-foreground">ОС поддерживается</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">24 МБ</div>
              <div className="text-sm text-muted-foreground">Размер программы</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">x86/x64</div>
              <div className="text-sm text-muted-foreground">Архитектура</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ключевые возможности</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Всё необходимое для профессионального распространения коммерческих Node.js-приложений
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Защита исходного кода</h3>
                <p className="text-muted-foreground mb-4">
                  Компилируйте JavaScript в бинарный файл — исходный код становится
                  недоступен для посторонних. Защита интеллектуальной собственности
                  вашего коммерческого продукта.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Обфускация</Badge>
                  <Badge variant="secondary">Бинарный формат</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Package" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Автономный .exe / бинарник</h3>
                <p className="text-muted-foreground mb-4">
                  Формирует единый исполняемый файл со всеми зависимостями внутри.
                  Пользователю не нужно устанавливать Node.js или управлять
                  пакетами npm — просто запустить файл.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Single binary</Badge>
                  <Badge variant="secondary">Нет зависимостей</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Container" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Docker-образы</h3>
                <p className="text-muted-foreground mb-4">
                  Помимо нативных бинарников, программа формирует готовый
                  Docker-образ для деплоя в контейнерные среды — Kubernetes,
                  Docker Swarm и облачные платформы.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">Kubernetes</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Terminal" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Консольный режим</h3>
                <p className="text-muted-foreground mb-4">
                  Работает в командном режиме и легко интегрируется в любой
                  CI/CD-пайплайн: Jenkins, GitHub Actions, GitLab CI — без GUI
                  и лишних зависимостей.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">CLI</Badge>
                  <Badge variant="secondary">CI/CD</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Простая установка</h3>
                <p className="text-muted-foreground mb-4">
                  Существенно упрощает процесс распространения и установки
                  ваших приложений конечными пользователями. Никакой настройки
                  окружения — один файл, один запуск.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">One-click</Badge>
                  <Badge variant="secondary">Zero config</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Code" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">JavaScript-совместимость</h3>
                <p className="text-muted-foreground mb-4">
                  Реализован на JavaScript, поддерживает весь экосистему Node.js.
                  Совместим с популярными фреймворками и библиотеками без
                  дополнительных адаптаций.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">npm</Badge>
                  <Badge variant="secondary">ESM/CJS</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Как это работает</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              От исходного кода до готового к распространению файла — три простых шага
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Передайте исходник</h3>
              <p className="text-muted-foreground text-sm">
                Укажите путь к вашему Node.js-проекту и целевую платформу в параметрах CLI-команды.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Компиляция</h3>
              <p className="text-muted-foreground text-sm">
                Программа упаковывает код, зависимости и среду выполнения в единый бинарный файл.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Готовый артефакт</h3>
              <p className="text-muted-foreground text-sm">
                Получите .exe для Windows, бинарник для Linux/macOS или Docker-образ — готов к деплою.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Поддерживаемые платформы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Собирайте под любую целевую систему прямо из вашей рабочей машины
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Monitor" size={28} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Windows</h3>
                <p className="text-sm text-muted-foreground">.exe файл, x86/x64</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Terminal" size={28} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Linux</h3>
                <p className="text-sm text-muted-foreground">ELF binary, x86/x64</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Laptop" size={28} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-1">macOS</h3>
                <p className="text-sm text-muted-foreground">Mach-O binary, x64</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Container" size={28} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Docker</h3>
                <p className="text-sm text-muted-foreground">Стандартный образ</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Связаться с нами</h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку на лицензию или задайте технический вопрос — ответим в течение 24 часов.
            </p>
          </div>

          <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Оставить заявку</CardTitle>
              <CardDescription>
                Опишите вашу задачу и мы подберём оптимальное решение.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" name="name" placeholder="Ваше имя" required disabled={isSubmitting} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@company.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Компания</Label>
                  <Input id="company" name="company" placeholder="Название организации" disabled={isSubmitting} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Опишите задачу: какое приложение, целевая платформа, объём использования..."
                    className="min-h-[120px]"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Отправляю...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Отправить заявку
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Package" size={14} className="text-primary-foreground" />
              </div>
              <span className="font-semibold">Node Executable Builder</span>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; 2020–2026 Node Executable Builder. Все права защищены. Свидетельство о регистрации ПО.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <a href="https://github.com" className="hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:info@example.com" className="hover:text-foreground transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
