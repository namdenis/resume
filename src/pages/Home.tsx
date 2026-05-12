import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Calendar,
  Users,
  FileText,
  Mic,
  Briefcase,
  GraduationCap,
  Languages,
  Wrench,
  ChevronDown,
  Award,
  TrendingUp,
  Target,
  Zap,
  Clock,
  Handshake,
  Building2,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 text-slate-800">
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-100/40 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-200/50 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-100/60 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 text-sm text-slate-600 mb-6 shadow-sm">
              <MapPin size={14} />
              <span>Москва · Гибрид · Командировки</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-4">
              Денис Нам
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-6">
              Руководитель проектов / Старший продюсер спецпроектов
            </p>

            <p className="text-base text-slate-500 leading-relaxed mb-8 max-w-lg">
              12 лет опыта в полном цикле организации деловых и образовательных
              мероприятий: от концепции до отчёта. 50+ реализованных проектов,
              включая форумы, лектории, клубы и массовые события до 9 тысяч
              участников.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="tel:+79850878878"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
              >
                <Phone size={16} />
                Позвонить
              </a>
              <a
                href="mailto:nam.denis1992@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-slate-700 text-sm font-medium border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
              >
                <Mail size={16} />
                Написать
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <Phone size={14} />
                +7 (985) 087-88-78
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Mail size={14} />
                nam.denis1992@gmail.com
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Globe size={14} />
                Telegram: @denisnam92
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-200/30 to-slate-300/30 rounded-3xl blur-2xl scale-110" />
              <img
                src="/images/photo.jpg"
                alt="Денис Нам"
                className="relative w-72 h-96 md:w-80 md:h-[28rem] object-cover rounded-3xl shadow-2xl shadow-slate-400/30 border-4 border-white/50"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-slate-400" size={28} />
        </motion.div>
      </section>

      {/* ===== PROFESSIONAL PROFILE ===== */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-slate-900 text-white">
                  <Briefcase size={20} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Профессиональный профиль
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Проектный менеджер и ивент-продюсер с 12-летним опытом в
                  полном цикле организации деловых, образовательных и
                  масштабных публичных мероприятий (до 9 тысяч участников).
                  Подтверждённый трек-рекорд управления спикерскими
                  программами, разработки образовательных форматов (форумы,
                  лектории, клубы, тематические дни) и работы с
                  государственными структурами и корпоративными заказчиками.
                </p>
                <p>
                  Ключевая экспертиза включает: сквозное продюсирование
                  мероприятий от концепции до финального отчёта, курирование
                  спикеров (подбор, брифинг, согласование контента),
                  медиапланирование и таймлайн-менеджмент, ведение
                  документации и отчётности, а также операционное
                  координирование на площадке.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard icon={<Calendar size={20} />} value="50+" label="Проектов под ключ" />
                <StatCard icon={<Users size={20} />} value="15K" label="Участников макс." />
                <StatCard icon={<Clock size={20} />} value="12" label="Лет опыта" />
                <StatCard icon={<Handshake size={20} />} value="7+" label="Лет в event-менеджменте" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== KEY COMPETENCIES ===== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                Ключевые компетенции
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Навыки и экспертиза, напрямую соответствующие требованиям
                вакансии Департамента спецпроектов
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <CompetencyCard
              icon={<FileText size={22} />}
              title="Разработка концепций и программ"
              desc="Полный цикл создания образовательных мероприятий: форумы, лектории, клубы, премии, тематические дни, круглые столы и конференции."
            />
            <CompetencyCard
              icon={<Mic size={22} />}
              title="Работа со спикерами"
              desc="Подбор спикеров под профиль мероприятия, устная и письменная коммуникация, согласование тем, материалов, технических требований, репетиции."
            />
            <CompetencyCard
              icon={<Target size={22} />}
              title="Режиссура и сценарии"
              desc="Участие в режиссуре мероприятий, разработка сценариев программ, координация выступлений и переходов."
            />
            <CompetencyCard
              icon={<FileText size={22} />}
              title="Документооборот и отчётность"
              desc="Таблицы, реестры, шаблоны анонсов, служебные записки, презентации, тексты выступлений, резюме встреч, финальные отчёты."
            />
            <CompetencyCard
              icon={<TrendingUp size={22} />}
              title="Медиапланирование"
              desc="Составление и актуализация медиапланов, таймлайнов, дорожных карт и чек-листов по подготовке мероприятий."
            />
            <CompetencyCard
              icon={<Users size={22} />}
              title="Кросс-функциональное взаимодействие"
              desc="Работа со смежными отделами и внешними партнёрами, взаимодействие с заказчиком, оперативная корректировка задач."
            />
            <CompetencyCard
              icon={<Building2 size={22} />}
              title="Управление площадкой"
              desc="Проработка технических заданий для служб площадки, контроль безопасности, кейтеринга, клининга, регистрации, навигации."
            />
            <CompetencyCard
              icon={<Zap size={22} />}
              title="Антикризисное управление"
              desc="Оперативное решение срочных задач: замена спикера, адаптация программы, форс-мажоры на площадке."
            />
            <CompetencyCard
              icon={<Handshake size={22} />}
              title="GR и переговоры"
              desc="Опыт работы с госслужащими (Правительство Москвы, Московский Дом Национальностей), деловые переговоры, фандрайзинг."
            />
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE TIMELINE ===== */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                Опыт работы
              </h2>
              <p className="text-slate-500">
                Профессиональный путь в организации мероприятий и
                операционном управлении
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            <ExperienceCard
              company="ООО «Инсайт Люди» (Insight People)"
              role="Старший продюсер / Team Lead продюсерской группы"
              period="Июнь 2024 — настоящее время"
              bullets={[
                "Управление операционной деятельностью продюсерской группы, курирование активных проектов (резиденты, артисты, спортсмены)",
                "Контроль и оптимизация проектных бюджетов, прогнозирование пиковых периодов, распределение резервов мощностей продакшена",
                "Разработка внутренней базы знаний, единых стандартов брифов, смет и чек-листов съёмочных дней",
                "Руководство продюсерской командой (регулярные 1-to-1, разбор сложных кейсов, менторинг), выстроил превентивную систему конфликт-менеджмента",
                "Разработка стратегий развития резидентов продюсерского агентства, участие в разработке креативных и пиар стратегий, лоббирование участия в федеральных шоу («Титаны», «Погоня» на ТНТ)",
                "Линейное и исполнительное продюсирование музыкальных релизов и клипов",
              ]}
              highlight
            />

            <ExperienceCard
              company="АНО «Молодёжное Движение Корейцев Москвы» (МДКМ)"
              role="Заместитель директора / Head of Event Production"
              period="Август 2018 — настоящее время"
              bullets={[
                "Комплексное управление НКО: построение матричной структуры с нуля, полная цифровая трансформация организации",
                "Полный цикл организации крупных культурных и образовательных проектов:",
                "КЕЙ-ПОП ДРАЙВ | III Кубок Москвы в рамках форума «Москва 2030» (2 дня, площадка TAU, 3000+ зрителей и участников в день)",
                "MDKM K-Pop Confedance (2021–2024, Известия Холл, Music Media Dome (MTS Live Hall), VK Stadium, 7000+ зрителей и участников за все фестивали)",
                "Международный форум «The Power of Today» — разработка программы, курирование спикеров, GR-координация",
                "Долгосрочные B2B-партнёрства и государственные контракты с Правительством Москвы и ГБУ «Московский Дом Национальностей»",
                "Telegram-бот для рекрутинга (196 заявок после введения системы набора через ТГ-бот). Программа адаптации, сократившая Time-to-Productivity с 6–12 месяцев до 3 месяцев",
                "Собственная CRM/ERP-экосистема с нуля (JSON + Cursor IDE), ролевая модель, автоматический трекинг KPI, система чекинов на мероприятиях",
              ]}
            />

            <ExperienceCard
              company="ООО «Чейл Рус» (Cheil Russia, Samsung Group)"
              role="Руководитель проектов (Retail & BTL)"
              period="Сентябрь 2023 — Июнь 2024"
              bullets={[
                "Управление полным жизненным циклом BTL и Retail-проектов в рамках концепции Operational Excellence",
                "Комплексное управление ожиданиями ключевых стейкхолдеров, консультирование клиентов по оптимизации маркетинговых стратегий",
                "Оркестрация кросс-функциональных команд (креатив, дизайн, производство) для создания высокотехнологичных рекламных материалов",
                "Внедрение пост-кампейн анализа, выявление узких мест в производстве, повышение ROI рекламных интеграций",
              ]}
            />

            <ExperienceCard
              company="ООО «Технопарк» / ООО «ВСЁСМАРТ»"
              role="Менеджер проектов / Product Owner"
              period="Март 2021 — Сентябрь 2022"
              bullets={[
                "Лидерство в проекте консолидации мелких закупок для федерального ритейлера — прямое ежемесячное сокращение операционных расходов",
                "Аудит складских процессов, пересмотр пула транспортных компаний, интеграция WMS-сканирования",
                "Повышение Service Level для стратегического партнёра (Dyson) с 84% до 94%",
                "Роль Product Owner при разработке логистического IT-модуля в 1С:Управление Торговлей",
              ]}
            />

            <ExperienceCard
              company="Lapwing International"
              role="Руководитель операционного штаба / Диспетчерской службы"
              period="Июнь 2017 — Август 2018"
              bullets={[
                "Операционное управление транспортной логистикой на Кубке Конфедераций 2017 и ЧМ-2018",
                "Координация 7000+ трансферов в режиме реального времени",
                "Устранение инфраструктурных инцидентов во взаимодействии с Оргкомитетом ФИФА",
                "Разработка мануалов и массовые тренинги для 10 компаний-подрядчиков под стандарты протокола ФИФА",
              ]}
            />

            <ExperienceCard
              company="ООО «Сервис-Про»"
              role="Менеджер по логистике"
              period="Март 2013 — Март 2016"
              bullets={[
                "Организация логистических процессов в нефтегазовой сфере для TD Williamson Eurasia: формирование, размещение и сопровождение заказов, согласование сроков, контроль поставок",
                "3000+ грузов доставлено по России, включая 100+ рейсов в труднодоступные районы тундры и Крайнего Севера для объектов Газпрома и Роснефти",
                "Оформление и перевод отгрузочных документов для импорта и экспорта",
                "Участие в проектировании и запуске собственного производства запчастей: поиск подрядчиков, заключение договоров, проработка схемы производственной линии",
                "Результат: 2 рабочие сварочные линии для пробок и фланцев, запущены пескоструйная и покрасочная камеры",
              ]}
            />

            <ExperienceCard
              company="Jet Set Sports"
              role="Координатор автопарка (Coach Coordinator)"
              period="Январь 2014 — Февраль 2014"
              bullets={[
                "Координирование и контроль автопарка на Олимпийских играх в Сочи для клиентов компании",
                "Взаимодействие с программными менеджерами, хостами и ассистентами",
                "Составление ежедневных заявок на транспорт, мониторинг передвижения транспортных средств",
                "Результат: разработана с нуля и отлажена работа автобусного парка (100 единиц ТС), бесперебойная работа 24/7, ~3000 рейсов за время Олимпиады",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO PROJECTS ===== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                Ключевые проекты
              </h2>
              <p className="text-slate-500">
                Масштабные мероприятия из портфолио
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="КЕЙ-ПОП ДРАЙВ | III Кубок Москвы"
              venue="Площадка TAU, форум «Москва 2030»"
              audience="3000+ в день"
              tags={["Форум", "Полный цикл", "Гос. контракт", "2 дня"]}
              desc="Концепция, программная разработка, координация спикеров и артистов, управление площадкой, взаимодействие с Правительством Москвы."
            />
            <ProjectCard
              title="MDKM K-Pop Confedance"
              venue="Известия Холл, Music Media Dome, VK Stadium"
              audience="7000+ за все фестивали"
              tags={["Фестиваль", "2021–2024", "Масштабирование"]}
              desc="Серия фестивалей под ключ: от концепции и регистрации до финала и отчётности. Проведение на топовых концертных площадках Москвы."
            />
            <ProjectCard
              title="CRM/ERP-система для АНО МДКМ"
              venue="Собственная разработка"
              audience="60+ резидентов"
              tags={["IT", "Автоматизация", "Полный цикл"]}
              desc="Самостоятельная разработка и внедрение CRM/ERP-экосистемы с нуля: ролевая модель, автоматический трекинг KPI, система чекинов на мероприятиях, Telegram-бот для рекрутинга."
            />
            <ProjectCard
              title="Международный форум «The Power of Today»"
              venue="Площадки Москвы"
              audience="Международная аудитория"
              tags={["Международный форум", "GR", "Спикерская программа"]}
              desc="Разработка программы, приглашение международных спикеров, GR-компонента, полный цикл организации."
            />
          </div>
        </div>
      </section>

      {/* ===== SKILLS & TOOLS ===== */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                Навыки и инструменты
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <SkillCategory
              icon={<Wrench size={20} />}
              title="Технические навыки"
              skills={[
                "CRM/ERP: Salesforce, 1С:УТ, собственная разработка CRM",
                "AI & Автоматизация: Gemini Pro, ChatGPT, Telegram-боты",
                "Аналитика: MS Excel (сводные таблицы, дашборды), Power BI",
                "Офисные пакеты: MS Office, Google Workspace",
                "Разработка: Cursor IDE, Visual Studio Code (базовый)",
              ]}
            />
            <SkillCategory
              icon={<Award size={20} />}
              title="Soft Skills"
              skills={[
                "Управление проектами: Agile/Scrum/Kanban/Waterfall, Roadmapping",
                "Переговоры: B2B, GR, фандрайзинг, спонсорские интеграции",
                "Лидерство: распределённые и кросс-функциональные команды, менторинг",
                "Коммуникация: грамотная устная и письменная речь",
                "Тайм-менеджмент: приоритизация, делегирование, работа в дедлайнах",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ===== EDUCATION & LANGUAGES ===== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-slate-900 text-white">
                    <GraduationCap size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Образование
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-slate-800">
                      Мастерская новых медиа
                    </p>
                    <p className="text-sm text-slate-500">
                      Управление событиями, повышение квалификации — 2026
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">
                      МФПУ «Синергия»
                    </p>
                    <p className="text-sm text-slate-500">
                      Менеджмент, Event-менеджер, бакалавр — 2022
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-slate-900 text-white">
                    <Languages size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Языки
                  </h3>
                </div>
                <div className="space-y-3">
                  <LanguageItem lang="Русский" level="Родной" percent={100} />
                  <LanguageItem
                    lang="Английский"
                    level="B2 — Upper-Intermediate"
                    percent={80}
                  />
                  <LanguageItem lang="Корейский" level="Базовый" percent={35} />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== RECOMMENDATIONS ===== */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                Рекомендации
              </h2>
              <p className="text-slate-500">
                Отзывы от руководителей международных проектов
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            <RecommendationCard
              author="Marc Middlemas"
              role="International Head of Transportation, Lapwing International Ltd."
              event="FIFA World Cup 2018"
              text="Denis played a key part managing our Fleet & Dispatch Department. He is honest, dependable, highly dedicated and incredibly hard-working."
            />
            <RecommendationCard
              author="Magnus Leask"
              role="Director, Lapwing International"
              event="Confederations Cup 2017"
              text="He is responsible, trustworthy, stress-resistant, attentive and hard-working. He has the amazing ability to work effectively with huge flow of information."
            />
            <RecommendationCard
              author="Michael A. Aguilar"
              role="President, Five Tool Group, Inc."
              event="Sochi 2014 Olympic Games"
              text="Mr. Nam was an indispensable part of Jet Set Sport's success. He is analytical, detail-oriented, and tireless in his commitment to client satisfaction."
            />
            <RecommendationCard
              author="Tracie Carlsund"
              role="Director, Staffing, Jet Set Sports"
              event="Sochi 2014 Olympic Games"
              text="On behalf of our entire company, I would like to take this opportunity to thank you for being a member of our Sochi 2014 Team."
            />
          </div>
        </div>
      </section>

      {/* ===== CONTACT / FOOTER ===== */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Готов к новым проектам
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Открыт к долгосрочному сотрудничеству в сфере спецпроектов,
              образовательных и деловых мероприятий. Гибридный формат,
              готов к командировкам.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a
                href="tel:+79850878878"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-medium hover:bg-slate-100 transition-colors"
              >
                <Phone size={18} />
                +7 (985) 087-88-78
              </a>
              <a
                href="mailto:nam.denis1992@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 text-white font-medium hover:bg-slate-700 transition-colors border border-slate-700"
              >
                <Mail size={18} />
                nam.denis1992@gmail.com
              </a>
              <a
                href="https://t.me/denisnam92"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 text-white font-medium hover:bg-slate-700 transition-colors border border-slate-700"
              >
                <MessageSquare size={18} />
                @denisnam92
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== BOTTOM BAR ===== */}
      <div className="bg-slate-950 py-6 px-6 text-center">
        <p className="text-slate-600 text-sm">
          © 2024 Денис Нам. Резюме создано для отклика на вакансию Департамента
          спецпроектов.
        </p>
      </div>
    </div>
  );
}

/* ===== SUBCOMPONENTS ===== */

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="bg-slate-50 rounded-xl p-4 text-center border border-slate-100">
      <div className="flex justify-center mb-2 text-slate-700">{icon}</div>
      <div className="text-2xl font-bold text-slate-900">{value}</div>
      <div className="text-xs text-slate-500 mt-0.5">{label}</div>
    </div>
  );
}

function CompetencyCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <AnimatedSection>
      <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow h-full">
        <div className="p-2.5 rounded-lg bg-slate-100 text-slate-700 w-fit mb-4">
          {icon}
        </div>
        <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
      </div>
    </AnimatedSection>
  );
}

function ExperienceCard({
  company,
  role,
  period,
  bullets,
  highlight,
}: {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  highlight?: boolean;
}) {
  return (
    <AnimatedSection>
      <div
        className={`relative bg-white rounded-2xl p-6 md:p-8 border ${
          highlight
            ? "border-slate-900 shadow-lg shadow-slate-200/60"
            : "border-slate-100 shadow-sm"
        }`}
      >
        {highlight && (
          <div className="absolute -top-3 left-8 px-3 py-1 bg-slate-900 text-white text-xs font-medium rounded-full">
            Текущая позиция
          </div>
        )}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
          <div>
            <h3 className="font-bold text-slate-900 text-lg">{company}</h3>
            <p className="text-slate-600 font-medium">{role}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm text-slate-400 bg-slate-50 px-3 py-1 rounded-full">
            <Calendar size={14} />
            {period}
          </span>
        </div>
        <ul className="space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
              <CheckCircle2
                size={16}
                className="text-teal-600 mt-0.5 shrink-0"
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
}

function ProjectCard({
  title,
  venue,
  audience,
  tags,
  desc,
}: {
  title: string;
  venue: string;
  audience: string;
  tags: string[];
  desc: string;
}) {
  return (
    <AnimatedSection>
      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-slate-200 transition-colors h-full flex flex-col">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-white text-slate-600 border border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-bold text-slate-900 text-lg mb-2">{title}</h3>
        <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
          <span className="inline-flex items-center gap-1">
            <MapPin size={14} />
            {venue}
          </span>
          <span className="inline-flex items-center gap-1">
            <Users size={14} />
            {audience}
          </span>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed mt-auto">
          {desc}
        </p>
      </div>
    </AnimatedSection>
  );
}

function SkillCategory({
  icon,
  title,
  skills,
}: {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}) {
  return (
    <AnimatedSection>
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 rounded-lg bg-slate-900 text-white">{icon}</div>
          <h3 className="font-bold text-slate-900">{title}</h3>
        </div>
        <ul className="space-y-3">
          {skills.map((s, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
}

function LanguageItem({
  lang,
  level,
  percent,
}: {
  lang: string;
  level: string;
  percent: number;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-medium text-slate-800 text-sm">{lang}</span>
        <span className="text-xs text-slate-500">{level}</span>
      </div>
      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-full bg-slate-800 rounded-full"
        />
      </div>
    </div>
  );
}

function RecommendationCard({
  author,
  role,
  event,
  text,
}: {
  author: string;
  role: string;
  event: string;
  text: string;
}) {
  return (
    <AnimatedSection>
      <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm h-full flex flex-col">
        <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1 italic">
          &ldquo;{text}&rdquo;
        </p>
        <div className="pt-4 border-t border-slate-100">
          <p className="font-semibold text-slate-900 text-sm">{author}</p>
          <p className="text-xs text-slate-500">{role}</p>
          <p className="text-xs text-slate-400 mt-1">{event}</p>
        </div>
      </div>
    </AnimatedSection>
  );
}
