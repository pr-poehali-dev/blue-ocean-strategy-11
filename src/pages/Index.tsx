import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Badge variant="secondary">
              Защита исходного кода · Простое распространение · Кроссплатформенность
            </Badge>
            <Badge className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/10">
              🇷🇺 Отечественное ПО · Включён в реестр Роспатента
            </Badge>
          </div>
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
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground mb-14">
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" size={16} className="text-primary" />
              <span>С 2020 года на рынке</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" size={16} className="text-primary" />
              <span>Зарегистрировано в Роспатенте №&nbsp;2026614130</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" size={16} className="text-primary" />
              <span>Коммерческое применение</span>
            </div>
          </div>

          <div className="relative mx-auto max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-border/40">
            <img
              src="https://cdn.poehali.dev/projects/ea85c60d-6835-46a4-b054-dfe83a578f02/bucket/4c0c12c4-c1ed-4b45-947c-e53397d0b3f0.PNG"
              alt="Node.js Executable Builder — редактор кода"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Import Substitution Banner */}
      <section className="py-12 px-4 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="text-4xl">🇷🇺</div>
              <div>
                <div className="font-bold text-lg mb-1">Отечественный продукт</div>
                <p className="text-muted-foreground text-sm max-w-xl">
                  Node.js Executable Builder — российская разработка, полноценная замена
                  зарубежным аналогам pkg и nexe. Подходит для реализации требований
                  по импортозамещению в государственных и корпоративных проектах.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-sm shrink-0">
              <div className="flex items-center gap-2">
                <Icon name="BadgeCheck" size={16} className="text-primary" />
                <span>Реестр Роспатента №&nbsp;2026614130</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="BadgeCheck" size={16} className="text-primary" />
                <span>Разработка и поддержка в России</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="BadgeCheck" size={16} className="text-primary" />
                <span>Документация и лицензии на русском языке</span>
              </div>
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
              <div className="text-3xl font-bold text-primary mb-1">CLI</div>
              <div className="text-sm text-muted-foreground">Режим работы</div>
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

      {/* Use Cases Section */}
      <section id="cases" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Примеры использования</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Кто и для каких задач использует Node Executable Builder
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Building2" size={24} className="text-primary" />
                </div>
                <Badge variant="secondary" className="mb-3">SaaS-компании</Badge>
                <h3 className="text-lg font-semibold mb-2">Защита коммерческого продукта</h3>
                <p className="text-muted-foreground text-sm">
                  Компании, продающие Node.js-решения корпоративным клиентам, используют
                  Builder для поставки продукта в виде бинарника — без риска утечки
                  исходного кода конкурентам или клиентам.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Wrench" size={24} className="text-primary" />
                </div>
                <Badge variant="secondary" className="mb-3">DevOps / Инфраструктура</Badge>
                <h3 className="text-lg font-semibold mb-2">CLI-утилиты для команд</h3>
                <p className="text-muted-foreground text-sm">
                  Разработчики создают внутренние инструменты автоматизации и
                  распространяют их как готовые бинарники — коллегам не нужно
                  ставить Node.js или разбираться с зависимостями.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Boxes" size={24} className="text-primary" />
                </div>
                <Badge variant="secondary" className="mb-3">Системные интеграторы</Badge>
                <h3 className="text-lg font-semibold mb-2">Встроенные решения</h3>
                <p className="text-muted-foreground text-sm">
                  Интеграторы упаковывают Node.js-агенты и коннекторы в автономные
                  исполняемые файлы для установки на серверах клиентов без
                  настройки окружения и сопровождения зависимостей.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Что говорят разработчики, использующие наш инструмент
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  «Наконец-то можно поставлять клиентам готовый .exe без страха, что они
                  откроют наш код. Builder сэкономил нам недели работы по настройке
                  кастомных упаковщиков.»
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Алексей М.</div>
                    <div className="text-xs text-muted-foreground">CTO, продуктовая компания</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  «Использую для CLI-инструментов внутри команды. Коллеги просто скачивают
                  бинарник и запускают — никаких вопросов про Node.js и npm install.
                  Отличное решение.»
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Дмитрий К.</div>
                    <div className="text-xs text-muted-foreground">Senior DevOps Engineer</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  «Интегрировали в GitHub Actions за полчаса. Теперь каждый релиз
                  автоматически собирает бинарники под три платформы. Docker-образ
                  тоже работает без нареканий.»
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Ирина В.</div>
                    <div className="text-xs text-muted-foreground">Lead Developer, интегратор</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Сравнение с аналогами</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Почему разработчики выбирают Node Executable Builder вместо открытых альтернатив
            </p>
          </div>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left px-6 py-4 font-semibold">Возможность</th>
                  <th className="px-6 py-4 font-semibold text-center">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center">
                        <Icon name="Package" size={14} className="text-primary-foreground" />
                      </div>
                      <span className="text-primary">NEB</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 font-semibold text-center text-muted-foreground">pkg</th>
                  <th className="px-6 py-4 font-semibold text-center text-muted-foreground">nexe</th>
                  <th className="px-6 py-4 font-semibold text-center text-muted-foreground">sea (Node 22)</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  ["Windows / Linux / macOS", true, true, true, true],
                  ["Docker-образ из коробки", true, false, false, false],
                  ["Защита исходного кода", true, false, false, false],
                  ["Коммерческая поддержка", true, false, false, false],
                  ["Активное развитие", true, false, false, true],
                  ["CI/CD-интеграция (CLI)", true, true, true, true],
                  ["Не требует Node.js у пользователя", true, true, true, true],
                  ["Нативные addons", true, true, false, true],
                ].map(([feature, neb, pkg, nexe, sea], idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="px-6 py-3 font-medium">{feature as string}</td>
                    {[neb, pkg, nexe, sea].map((val, i) => (
                      <td key={i} className="px-6 py-3 text-center">
                        {val ? (
                          <Icon name="Check" size={18} className={i === 0 ? "text-primary mx-auto" : "text-green-500 mx-auto"} />
                        ) : (
                          <Icon name="X" size={18} className="text-muted-foreground/40 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">
            pkg — архивирован с 2022 г., nexe — минимальная поддержка. Данные актуальны на апрель 2026 г.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ответы на популярные вопросы о работе с программой
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="q1" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left font-medium">
                Нужно ли устанавливать Node.js на машине конечного пользователя?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Нет. В этом и есть главное преимущество. Builder упаковывает среду
                выполнения Node.js прямо внутрь бинарного файла — пользователю достаточно
                просто запустить скомпилированный файл.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left font-medium">
                Можно ли восстановить исходный код из бинарника?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Исходный код компилируется и упаковывается в бинарный формат, что
                существенно затрудняет его восстановление. Это надёжная защита
                интеллектуальной собственности для коммерческих приложений.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left font-medium">
                Поддерживаются ли нативные npm-модули (native addons)?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, нативные аддоны поддерживаются. Они включаются в сборку как
                отдельные файлы рядом с бинарником и корректно загружаются во время
                выполнения.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left font-medium">
                Как интегрировать Builder в CI/CD-пайплайн?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Программа работает в консольном режиме и принимает параметры через
                аргументы командной строки. Это позволяет легко добавить шаг сборки
                в GitHub Actions, GitLab CI, Jenkins или любой другой CI/CD-инструмент.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q5" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left font-medium">
                Какие операционные системы поддерживаются?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Builder работает на Windows, Linux и macOS (архитектура x86/x64).
                Кросс-компиляция позволяет собирать бинарники для любой из трёх
                платформ, независимо от вашей рабочей ОС.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q6" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left font-medium">
                Как приобрести лицензию?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Оставьте заявку через форму ниже или напишите нам на почту. Мы свяжемся
                с вами в течение 24 часов, уточним детали и оформим коммерческую лицензию.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
            <div className="text-sm text-muted-foreground text-center space-y-1">
              <p>&copy; 2020–2026 Node Executable Builder. Все права защищены.</p>
              <p>Программа для ЭВМ зарегистрирована в Роспатенте. Свидетельство №&nbsp;2026614130.</p>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <a href="https://github.com" className="hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:victor.mac.nikitin@gmail.com" className="hover:text-foreground transition-colors flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span className="text-sm">victor.mac.nikitin@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}