# Финальный план репозиционирования ivandonchenko.ru

Синтез: каркас Стратегии 2 (язык спроса, «боль → решение → результат», SEO-семантика) + статусная упаковка Стратегии 1 (полоса доверия, награды, гигиена бренда, формат кейсов) + анти-хайповые AI-атомы Стратегии 3 («нейросети там, где дают эффект», «инженерная дисциплина», «я и есть переводчик»). Все замечания факт-чекера учтены: на сайте — только подтверждённые цифры, никаких обещаний из кворков под видом результатов.

---

## 1. Ядро позиционирования

**Иван Донченко — бизнес-архитектор и бизнес-аналитик с 15-летним инженерным бэкграундом, который переводит задачи бизнеса в работающие системы и сам доводит их до эксплуатации: автоматизация процессов (Camunda/Flowable), AI-агенты в процессах, интеграции и данные.** Не «аналитик с презентациями» и не «разработчик на подряд»: один эксперт закрывает цепочку «анализ → архитектура → внедрение», а качество гарантируют инженерные практики, а не энтузиазм.

**Целевой заказчик** (по убыванию приоритета):
1. **CTO/CPO продуктовых компаний, финтеха, логистики, сервисов** — процессы трещат (кредитный конвейер, обработка обращений, документооборот), нужен человек, который спроектирует и внедрит BPM/AI-автоматизацию под ключ. Их убеждают свежие кейсы 2025–2026.
2. **Собственники и топ-менеджеры среднего бизнеса без сильного CTO** — «заявки теряются, данные вводятся дважды, поддержка тонет в тикетах». Им нужен переводчик между их болью и технологией.
3. **Enterprise/интеграторы** — внешний архитектор-эксперт для аудита, трансформации legacy, due diligence. Их убеждают референсы (Генпрокуратура, Минэнерго, Лукойл, РФС) и премии.

**Анти-таргетинг:** заказчики «просто Java-сеньора в аутстафф» — сознательно не привлекаем (торгуются по ставке мидла, не ценят связку).

---

## 2. Ключевые принципы подачи

**Тон:** спокойный зрелый эксперт, «независимый консультант» (слова «фриланс/фрилансер» на сайте нет вообще). Язык боли заказчика на витрине, технологии — в глубине карточек мелким шрифтом. В бизнес-текстах первого экрана — минимум жаргона: «работающая система» вместо «продакшен», без «воркеров» и «Zeebe» в заголовках.

**Что подчёркиваем:**
- Полный цикл в одних руках: анализ → процесс → архитектура → работающая система.
- Подтверждённые результаты с атрибуцией: −30% (Безопасный город), −40% и 15 000+ объектов (Минэнерго), −60% (Комитет по энергетике СПб), 4000+/85 регионов (РФС), премии ТЭК-2016 и Global CIO 2021.
- Боевой AI-кейс: LLM-агенты в BPMN-процессах первой линии поддержки международного сервиса бронирования (Camunda 8) — production, не демо.
- Карьерная спираль как преимущество: «я и есть переводчик между бизнесом и кодом».
- Прагматизм: «с нейросетями там, где они дают эффект, и без них там, где хватает простого скрипта».

**Чего избегаем (правила честности — обязательны):**
- ❌ «AI-native», «Lead» в русском H1, «один из немногих на рынке», «глубина эксперта — скорость команды» — буллшит-маркеры, режут доверие у платёжеспособной аудитории.
- ❌ Обещания из кворков как результаты: «−70% времени», «100→1000+ док/мин», «×5 throughput» — НЕ публикуем на сайте нигде (это офферы, на первом созвоне вопрос «на каком проекте?» вскроет подмену).
- ❌ «Первая линия без операторов» — преувеличение; агенты обрабатывают обращения, а не заменяют людей.
- ❌ «5 лет Camunda и Flowable» — 5 лет только у Camunda; Flowable — свежий проект 2025–2026, так и пишем.
- ❌ Переписывание прошлых ролей задним числом (System architect в Solvo и т.д. — остаются как есть).
- ❌ «Assessment команд нейросетями» как отдельная услуга — это методика с одного проекта; подаём как методику в CV и тему для статьи.
- ❌ Просачивание kwork-услуг (боты, VPN, сайты за 3 дня) на сайт.
- **Единая цифровая формула везде:** «15 лет в IT · 14 лет разработки (Java/Kotlin) · 7 лет архитектуры · 5 лет Camunda в production · английский C1». Никаких «14+», «15+ Java», «Twelve years».

**Как честно подать «middle-разработчик + нейросети»:** перестаём продавать Ивана как разработчика вообще. Код — не товар, а гарантия качества решений: «остаюсь hands-on — знаю, что доживает до эксплуатации». AI — инструмент с production-кейсом, а не идентичность и не титул: формула «нейросети ускоряют работу, качество гарантируют инженерные практики (документация, тесты, observability)». Никаких неверифицируемых множителей производительности в hero; в About — мягкая личная рамка (см. ниже). Это совпадает с самоощущением Ивана, значит, будет конгруэнтно звучать на созвонах.

---

## 3. План по страницам

### 3.1 Home — `/home/ivan/Projects/ivandonchenko/src/pages/Home.tsx`

**Hero H1** (Home.tsx:58-60):
- RU: **«Бизнес-архитектор»**
- EN: **«Business Architect»**

(По-русски и по-человечески, без «Lead» и без «AI-native» — консенсус всех трёх судей.)

**Hero-подзаголовок** (Home.tsx:64-66):
- RU: «15 лет перевожу задачи бизнеса в работающие системы: автоматизация процессов, AI-агенты, интеграции и данные. От анализа и архитектуры — до запуска.»
- EN: «15 years of turning business problems into working systems: process automation, AI agents, integrations, and data. From analysis and architecture to launch.»

**Полоса доверия** (новый блок сразу под hero):
- RU: «Проекты: Минэнерго России · Генпрокуратура РФ · РФС · Лукойл · МЧС · финтех и международные сервисы»
- EN: «Delivered for: Russian Ministry of Energy · Prosecutor General's Office · Russian Football Union · Lukoil · EMERCOM · fintech & international services»
- Строка наград: RU «„Лучший ИТ-проект в ТЭК" 2016 · „Проект года" Global CIO 2021» / EN «Best IT Project in Fuel & Energy 2016 · Global CIO Project of the Year 2021»

**CTA-кнопки** (Home.tsx:71, 77): основная RU «Обсудить задачу» / EN «Discuss your case»; вторичная RU «Смотреть кейсы» / EN «See case studies». Микротраст-строка под кнопками: RU «Отвечаю в течение 24 часов» / EN «I reply within 24 hours».

**Три карточки features** (Home.tsx:14-36), нарратив «кто → что → почему не развалится»:
1. RU **«Бизнес-архитектура и анализ»** — «От бизнес-задачи до работающей системы: требования, процессы, архитектура, приёмка. Говорю на одном языке с заказчиком и с разработкой.» / EN **«Business Architecture & Analysis»** — «From business problem to working system: requirements, process design, architecture, delivery. Fluent in both business and engineering.»
2. RU **«Автоматизация процессов: BPM + AI»** — «Camunda и Flowable в боевых проектах: кредитные конвейеры, обработка обращений, документооборот. LLM-агенты — там, где они дают эффект: например, в первой линии поддержки международного сервиса бронирования.» / EN **«Process Automation: BPM + AI»** — «Camunda and Flowable in production: loan origination, request handling, document workflows. LLM agents where they pay off — e.g., first-line support of an international booking service.»
3. RU **«Инженерная дисциплина»** — «15 лет инженерного бэкграунда, до сих пор hands-on: документация C4/ADR, тесты, observability. Нейросети ускоряют работу — качество гарантируют инженерные практики.» / EN **«Engineering Discipline»** — «15 years of engineering background, still hands-on: C4/ADR documentation, testing, observability. AI brings speed; engineering practices guarantee quality.»

**Блок цифр** (новый, между features и CTA) — ТОЛЬКО подтверждённые результаты с атрибуцией:
- RU: «−30% времени реагирования экстренных служб — АПК „Безопасный город", МЧС» · «−40% времени на анализ данных по 15 000+ энергообъектов — Минэнерго России» · «−60% времени подготовки аналитических отчётов — Комитет по энергетике СПб» · «4000+ пользователей в 85 регионах — ИС РФС»
- EN: «Emergency response time −30% — Safe City, EMERCOM» · «Data analysis time −40% across 15,000+ energy facilities — Ministry of Energy» · «Analytical reporting time −60% — St. Petersburg Energy Committee» · «4,000+ users in 85 regions — Russian Football Union»

**Нижний CTA-блок** (Home.tsx:108-117):
- RU: заголовок **«Есть бизнес-задача без готового ТЗ?»**, текст «Именно с этого я обычно и начинаю. Опишите цель своими словами — предложу, как превратить её в работающую систему.», кнопка «Обсудить задачу».
- EN: **«Have a business problem without a spec?»** — «That's exactly where I usually start. Describe the goal in your own words — I'll propose how to turn it into a working system.» Кнопка «Discuss your case».

**SEO** (Home.tsx:46-52):
- title: RU «Иван Донченко — Бизнес-архитектор · Автоматизация бизнес-процессов» / EN «Ivan Donchenko — Business Architect · Business Process Automation»
- description: RU «Автоматизация бизнес-процессов: Camunda, Flowable, AI/LLM-агенты, интеграции, ETL. Бизнес-анализ, аудит и проектирование архитектуры. 15 лет в IT — от Минэнерго до финтеха.» / EN «Business process automation: Camunda, Flowable, AI/LLM agents, integrations, ETL. Business analysis, architecture audit and design. 15 years in IT — from government to fintech.»

Исправить «Over 15 years designing scalable systems» в карточке (Home.tsx:17-18) — карточки заменяются целиком (см. выше), расхождение 15+/14+ исчезает.

### 3.2 About — `/home/ivan/Projects/ivandonchenko/src/content/about/index.ru.md`, `index.en.md`, `/home/ivan/Projects/ivandonchenko/src/pages/About.tsx`

Человечную часть (8 интересов, столярка, фон Триер, кулинария) **не трогать** — это премиальный актив. Три правки:

**1. Новая рамка карьерной истории** (заменить/дополнить вводный абзац):
- RU: «Мой путь — спираль: разработчик → тимлид → руководитель проектов → руководитель направления → CEO собственного стартапа → бизнес-архитектор. Каждый виток остался со мной: я анализирую как бизнес-аналитик, проектирую как архитектор, оцениваю риски как руководитель проектов и считаю экономику решения как бывший CEO. Поэтому мне не нужна цепочка переводчиков между бизнесом и кодом — я и есть этот переводчик.»
- EN: «My career is a spiral: developer → team lead → project manager → head of division → CEO of my own startup → business architect. Every loop stayed with me: I analyze like a business analyst, design like an architect, weigh risks like a project manager, and count the economics like the CEO I once was. That's why I don't need a chain of translators between business and code — I am that translator.»

**2. Абзац про AI** (после навыков, связывает МГУ и практику):
- RU: «Интерес к машинному обучению и извлечению смысла из сложных данных тянется ещё с факультета биоинженерии и биоинформатики МГУ. Сегодня это рабочая практика: LLM встроены и в мой собственный процесс, и в системы, которые я проектирую для клиентов — от AI-агентов в бизнес-процессах до методики оценки трудозатрат разработчиков. Нейросети вернули инженерной работе скорость и азарт, но качество по-прежнему держат не промпты, а инженерные практики: документация, тесты, observability.»
- EN: «My interest in machine learning and extracting meaning from messy data goes back to my bioinformatics studies at Moscow State University. Today it's daily practice: LLMs are built into my own workflow and into the systems I design for clients — from AI agents inside business processes to a methodology for assessing developer effort. AI has brought speed and excitement back into engineering, but quality is still guaranteed by engineering practices, not prompts: documentation, testing, observability.»

**3. Стаж:** EN «Twelve years in IT» → «Fifteen years in IT» (RU «За 15 лет в IT» уже верно).

**SEO** (About.tsx:21-22): «software architect from Saint Petersburg» / «архитектора ПО из Санкт-Петербурга» → EN «business architect and analyst from Saint Petersburg» / RU «бизнес-архитектора и аналитика из Санкт-Петербурга».

### 3.3 Services — `/home/ivan/Projects/ivandonchenko/src/pages/Services.tsx`

**Подзаголовок страницы** (Services.tsx:171-173) — главная анти-буллшит-фраза:
- RU: «Помогаю бизнесу автоматизировать процессы и наводить порядок в системах — с нейросетями там, где они дают эффект, и без них там, где хватает простого скрипта.»
- EN: «I help businesses automate processes and bring order to their systems — with AI where it pays off, and without it where a simple script will do.»

**4 пакета «боль → решение → кейс»** (вместо 4 технологических услуг; у каждого кнопка «Обсудить задачу» / «Discuss your case»). Вместо цифр-обещаний — ссылки на реальные кейсы:

1. **Автоматизация бизнес-процессов (BPM)** — флагман.
   - RU: «Заявки живут в почте и Excel, и никто не знает, где застрял процесс? Разберу процесс, смоделирую его в BPMN, внедрю Camunda или Flowable и доведу до работающей системы: интеграции, обработка ошибок, мониторинг. 5 лет Camunda в production, миграции 7→8. Свежий кейс: кредитный конвейер для финтеха на Flowable 8 — руководил разработкой.»
   - EN: «Requests live in email and spreadsheets, and nobody knows where the process is stuck? I map the process, model it in BPMN, deploy Camunda or Flowable, and take it to a working system: integrations, error handling, monitoring. 5 years of Camunda in production, 7→8 migrations. Recent case: a loan origination pipeline for a fintech on Flowable 8 — led the development.»

2. **AI в бизнес-процессах.**
   - RU: «Сотрудники вручную читают письма, заявки и договоры? Встрою LLM (ChatGPT, Claude, Gemini, локальные модели) прямо в процесс: классификация и маршрутизация обращений, разбор документов, подготовка ответов. Боевой кейс: AI-обработка обращений первой линии поддержки международного сервиса бронирования — BPMN-процессы с LLM-агентами на Camunda 8. Сначала считаем экономику, потом внедряем.»
   - EN: «Your team reads emails, requests, and contracts by hand? I embed LLMs (ChatGPT, Claude, Gemini, local models) directly into the process: request classification and routing, document analysis, response drafting. Production case: AI-powered ticket handling for the first-line support of an international booking service — BPMN processes with LLM agents on Camunda 8. Economics first, then implementation.»

3. **Бизнес-анализ и архитектура.**
   - RU: «Проект буксует, потому что бизнес и разработка говорят на разных языках? Сниму и структурирую требования, спроектирую решение, задокументирую так, что будет понятно и менеджменту, и разработчикам — и через год (C4, ADR). Аудит архитектуры и процессов, план трансформации без остановки бизнеса, due diligence перед инвестициями.»
   - EN: «A project stalls because business and engineering don't speak the same language? I elicit and structure requirements, design the solution, and document it so both management and developers understand it — even a year later (C4, ADR). Architecture and process audit, transformation roadmap without stopping the business, pre-investment due diligence.»

4. **Данные и интеграции.**
   - RU: «Данные вводятся дважды, отчёты собираются руками? Свяжу CRM, ERP, 1С и госсервисы, построю ETL и дашборды (Airflow, n8n, NiFi, Grafana, Metabase). Свежий кейс: корпоративный Data Lake — ETL из Bitrix24, ПланФакт, CallTouch и 1С. Если задача решается простым скриптом — не буду тащить тяжёлую платформу.»
   - EN: «Data entered twice, reports assembled by hand? I connect CRM, ERP, 1C, and government services, build ETL and dashboards (Airflow, n8n, NiFi, Grafana, Metabase). Recent case: a corporate data lake with ETL from four business systems. If a simple script solves it, I won't drag in a heavy platform.»

**Внизу страницы — анти-таргетинг** (фильтр «не тех» заявок):
- RU: «Чем я не занимаюсь: аутстафф „просто Java-сеньором", типовые сайты и боты. Моя ценность — связка: анализ + архитектура + внедрение.»
- EN: «What I don't do: "just a Java senior" staff augmentation, template websites, bots-for-hire. My value is the bundle: analysis + architecture + delivery.»

**SEO** (Services.tsx:162-163):
- RU: «Автоматизация бизнес-процессов на Camunda/Flowable, AI и LLM-агенты в процессах, бизнес-анализ, аудит архитектуры, интеграции и ETL.»
- EN: «Camunda/Flowable business process automation, AI/LLM agents in workflows, business analysis, architecture audit, integrations and ETL.»

### 3.4 Projects — `/home/ivan/Projects/ivandonchenko/src/pages/Projects.tsx`

Сейчас 8 карточек — все исторические/государственные (ГАС ПС, РФС, Soarse, РС ИЭК, АПК БГ, АС СиОИ, МДО, МИП). Переделка:

**Интро страницы** (заменить «Major projects I've been lucky to be part of»):
- RU: «Каждый кейс — это бизнес-результат, а не список технологий. Стек — в конце карточки, мелким шрифтом.»
- EN: «Each case is a business outcome, not a tech list. The stack sits at the bottom of the card, in small print.»

**Добавить 3 новые карточки наверх** (свежие коммерческие, 2025–2026):
1. RU **«AI-обработка обращений в поддержке»** — «Международный сервис бронирования жилья, 2025–2026. Многоуровневые BPMN-процессы с LLM-агентами на Camunda 8 обрабатывают входящие обращения первой линии. Роль: архитектор процессов и AI-интеграции.» Теги: Camunda 8, Zeebe, LLM, Java, Python. / EN **«AI-Powered Ticket Handling in Support»** — «International accommodation booking service, 2025–2026. Multi-level BPMN processes with LLM agents on Camunda 8 handle incoming first-line tickets. Role: process & AI-integration architect.» (Важно: НЕ «без операторов».)
2. RU **«Кредитный конвейер для финтеха»** — «2025–2026. Руководство разработкой BPM-платформы на Flowable 8/Kotlin: апгрейд с 6.7 без остановки бизнеса, архитектурная документация (C4, ADR, Structurizr), платформа автотестов на Testcontainers.» / EN **«Loan Origination Pipeline for a Fintech»** — «2025–2026. Led the development of a BPM platform on Flowable 8/Kotlin: upgrade from 6.7 without stopping the business, architecture docs (C4, ADR, Structurizr), Testcontainers-based test platform.»
3. RU **«Корпоративный Data Lake»** — «2025–2026. Все данные компании в одном месте: ETL из Bitrix24, ПланФакт, CallTouch и 1С; Airflow, n8n, PostgreSQL; дашборды Grafana и Metabase.» / EN **«Corporate Data Lake»** — «2025–2026. All company data in one place: ETL from Bitrix24, PlanFact, CallTouch, and 1C; Airflow, n8n, PostgreSQL; Grafana and Metabase dashboards.»

**Переписать существующие карточки в формат «результат в заголовке → масштаб → роль»** (цифры — только подтверждённые):
- АПК БГ → RU «−30% времени реагирования экстренных служб» — «АПК „Безопасный город", Сахалин: 1000+ камер, сдано за 8 месяцев, команда 15. Роль: руководитель проекта и архитектор.» / EN «Emergency response time cut by 30%» — «Safe City, Sakhalin: 1,000+ cameras, delivered in 8 months with a team of 15.»
- Портал МДО → RU «−40% времени на анализ данных по 15 000+ энергообъектов» — «Портал МДО для Минэнерго России, ML-прогноз аварийности. „Лучший ИТ-проект в ТЭК-2016".» / EN «Data analysis 40% faster across 15,000+ energy facilities» — «MDO Portal for the Ministry of Energy, ML-based failure prediction. Best IT Project in Fuel & Energy 2016.»
- ИС РФС → RU «4000+ пользователей в 85 регионах» — «Цифровая платформа Российского футбольного союза. „Проект года" Global CIO 2021.» / EN «4,000+ users across 85 regions» — «Digital platform of the Russian Football Union. Global CIO Project of the Year 2021.»
- РС ИЭК → RU «−60% времени подготовки аналитических отчётов» — «Комитет по энергетике СПб: архитектор, команда 30, 28 месяцев, кластер геосерверов.» / EN «Analytical reporting time cut by 60%» — «St. Petersburg Energy Committee: architect, team of 30, 28 months.»
- Soarse → RU «Собственный Low-Code продукт: от идеи до госконтрактов» — «CEO и главный архитектор (2020–2023): платформа из 5 конструкторов, команда 15+, на её базе — 2 госконтракта (ГАС ПС, ИС РФС).» / EN «My own low-code product: from idea to government contracts» — «CEO & Chief Architect (2020–2023): a platform of 5 builders, team of 15+, 2 government contracts delivered on top of it.»
- ГАС ПС → RU «Правовая статистика для Генпрокуратуры РФ» — «Плагинная архитектура, „сцепка" данных, JOIN по JSON через RDF (Apache Jena), 16 месяцев.» / EN «Legal statistics for the Prosecutor General's Office» — «Plugin architecture, record linkage, JSON JOINs via RDF (Apache Jena), 16 months.»
- АС СиОИ → RU «Трансформация команды 35 человек без потерь» — «АС СиОИ для Минэнерго: 97% команды сохранено при смене технологий. История „Старой Гвардии" — в блоге.» / EN «A 35-person team transformed, 97% retained» — «AS SIOI for the Ministry of Energy. The "Old Guard" story is in the blog.»
- Портал МИП → оставить как «первый enterprise» (origin story), последним.

**Порядок:** 3 свежих → АПК БГ → МДО → РФС → РС ИЭК → Soarse → ГАС ПС → АС СиОИ → МИП.

**SEO Projects** (Projects.tsx:108-118):
- RU: «Кейсы с измеримым результатом: AI в поддержке, кредитный конвейер для финтеха, Безопасный город, портал Минэнерго, ИС РФС.»
- EN: «Case studies with measurable outcomes: AI-powered support, loan origination for fintech, Safe City, Ministry of Energy portal, RFU platform.»

### 3.5 CV — `/home/ivan/Projects/ivandonchenko/src/pages/CV.tsx`, `/home/ivan/Projects/ivandonchenko/src/content/cv/index.md`, `index.en.md`

1. **Подзаголовок под H1** (CV.tsx:256-258): RU «Ведущий бизнес-архитектор · Бизнес-аналитик · 15 лет инженерного бэкграунда» / EN «Lead Business Architect · Business Analyst · 15 years of engineering background». («Ведущий» — по-русски; «Lead Business Architect» — для EN/LinkedIn.)

2. **Синхронизировать титулы frontmatter** (сейчас RU «Системный архитектор» vs EN «Software Architect»): RU «Ведущий бизнес-архитектор» / EN «Lead Business Architect».

3. **Переписать «Профессиональный профиль»:**
   - RU: «Более 15 лет в IT: перевожу задачи бизнеса в промышленные B2B/B2G-системы — от анализа и проектирования процессов до архитектуры и приёмки в эксплуатацию. Прошёл путь от разработчика до руководителя направления и CEO собственного продуктового стартапа; остаюсь hands-on — проектирую и пишу код лично, в том числе в связке с LLM. Специализация: бизнес- и системная архитектура, автоматизация процессов (Camunda/Flowable), интеграция AI в бизнес-процессы, данные и интеграции. 15 лет в IT · 14 лет разработки (Java/Kotlin) · 7 лет архитектуры · 5 лет Camunda в production · английский C1.»
   - EN: «15+ years in IT: I turn business needs into industrial B2B/B2G systems — from process analysis and design to architecture and production delivery. From developer to division head to CEO of my own product startup; still hands-on — I design and write code personally, including LLM-assisted. Focus: business & systems architecture, process automation (Camunda/Flowable), embedding AI into business processes, data and integrations. 15 years in IT · 14 years of development (Java/Kotlin) · 7 years of architecture · 5 years of Camunda in production · English C1.»

4. **Фриланс-блок 2025–2026** — оставить первым и самым детальным (он уже витринный), но переименовать: RU «Независимый консультант — бизнес-архитектор / Tech Lead» / EN «Independent Consultant — Business Architect / Tech Lead».

5. **Прошлые роли НЕ переписывать** (CV.tsx:97-137: System architect, Product architect, Enterprise architect и т.д. — честная история, работает на вес). Исключение: у Галор вынести «CEO и главный архитектор продукта» на первое место — это правда и это козырь.

6. **Добавить строку AI-практики в навыки** (методика — не услуга):
   - RU: «AI-практика: интеграция LLM (ChatGPT, Claude, Gemini, локальные модели) в бизнес-процессы; AI-агенты в Camunda 8.8+; методика оценки трудозатрат разработчиков с применением нейросетей — разработана и применена на проекте кредитного конвейера.»
   - EN: «AI practice: LLM integration (ChatGPT, Claude, Gemini, local models) into business processes; AI agents in Camunda 8.8+; a neural-network-based methodology for assessing developer effort — built and applied on the loan pipeline project.»

7. **Поднять раздел «Экспертиза в классах систем»** (MDM, GIS, ECM, BPM, WMS, YMS, low/no-code) выше стека — это язык заказчика и доказательство широты бизнес-архитектора.

8. **SEO** (CV.tsx:248-249): RU «15 лет в IT: бизнес-архитектура, бизнес-анализ, BPM (Camunda/Flowable), AI-автоматизация процессов, Java/Kotlin. От Минэнерго до финтеха.» / EN «15 years in IT: business architecture, business analysis, BPM (Camunda/Flowable), AI process automation, Java/Kotlin. From government to fintech.»

### 3.6 Contact — `/home/ivan/Projects/ivandonchenko/src/pages/Contact.tsx` (+ `src/content/contact/index.md`, `index.en.md` — без изменений)

1. **Блок «Let's Work Together»** (Contact.tsx:124-125):
   - RU: «Нужно автоматизировать процесс, навести порядок в требованиях и архитектуре или встроить AI в работу компании? Опишите задачу своими словами — готовое ТЗ не нужно. Отвечаю в течение 24 часов.»
   - EN: «Need to automate a process, untangle requirements and architecture, or bring AI into your operations? Describe the problem in your own words — no spec needed. I reply within 24 hours.»

2. **SEO** (Contact.tsx:72-73): «software architect» → «business architect and analyst» / «архитектором ПО» → «бизнес-архитектором и аналитиком».

### 3.7 Blog — `/home/ivan/Projects/ivandonchenko/src/contexts/LanguageContext.tsx` (:21-22, :41-42), контент в `src/content/blog/`

1. **blogSubtitle**:
   - RU: «О процессах, системах и людях, которые их создают, — и о том, как нейросети меняют автоматизацию. Реальные кейсы, без туториалов.»
   - EN: «On processes, systems, and the people who build them — and how AI is changing automation. Real cases, no tutorials.»

2. **Контент-план (3 статьи-магнита, только из реального опыта):**
   - «LLM-агенты в Camunda 8 в production: что реально работает, а что — маркетинг» (главный SEO/Хабр-магнит: живого production-опыта по этой теме в рунете почти нет).
   - «Миграция Flowable 6.7 → 8 на живом кредитном конвейере: чему нас это научило».
   - «Как оценить трудозатраты разработчиков нейросетями — методика с реального проекта».
   - ❌ НЕ писать «100→1000 документов в минуту» — это обещание из кворков, а не кейс.
   - В конце каждой статьи CTA: RU «Похожая задача? Напишите — отвечаю в течение 24 часов.» / EN «Facing something similar? Get in touch — I reply within 24 hours.»
   - Публикация: RU — Хабр, EN — Medium, с обратными ссылками на сайт (процесс уже описан в blog/CLAUDE.md).

3. Статью «No country for old men» **не трогать** — она продаёт зрелость и человечность лучше любого лендинга.

### 3.8 SEO и переводы — `/home/ivan/Projects/ivandonchenko/index.html`, `/home/ivan/Projects/ivandonchenko/src/components/SEO.tsx`, `/home/ivan/Projects/ivandonchenko/src/contexts/LanguageContext.tsx`

1. **index.html:10** — `<title>Ivan Donchenko — Business Architect · BPM & AI Process Automation</title>`
2. **index.html:11** — description: «Business architect and analyst with 15 years in IT. Business process automation (Camunda/Flowable), AI agents in workflows, integrations and data — from analysis to production.»
3. **SEO.tsx:12-13** — те же дефолты, что в index.html. Плюс небольшой рефакторинг: дефолтный description сейчас только EN даже для RU-страниц — добавить локализованные дефолты через LanguageContext (ключи `defaultSeoTitle`/`defaultSeoDescription`): RU «Бизнес-архитектор и аналитик с 15-летним инженерным бэкграундом. Автоматизация процессов на Camunda/Flowable, AI-агенты в бизнес-процессах, интеграции и данные.»
4. **Единый стаж везде:** устранить разнобой 15+/14+/«Twelve years» (index.html:11, SEO.tsx:13, Home.tsx:17 и :51-52, CV.tsx:248-249, about/index.en.md). Правило: в коротких текстах «15 лет в IT», в развёрнутых — полная формула «15 · 14 · 7 · 5 · C1».
5. **SEO-семантика** (реальный спрос, а не HR-категории): RU «автоматизация бизнес-процессов», «Camunda эксперт», «внедрение AI в бизнес-процессы», «бизнес-аналитик», «аудит архитектуры»; EN «business process automation», «Camunda expert», «LLM agents», «business architect consultant». «Lead Software Architect» из всех тегов убрать полностью.
6. **Глоссарий переводов** (зафиксировать): бизнес-архитектор = Business Architect; ведущий бизнес-архитектор = Lead Business Architect; автоматизация бизнес-процессов = business process automation; первая линия поддержки = first-line support; кредитный конвейер = loan origination pipeline; работающая система = working system (в маркетинге) / production system (в тех-контексте); независимый консультант = independent consultant; «без воды» = no fluff. Слово «фриланс» на сайте не используется.
7. **CTA-ключи в LanguageContext.tsx**: добавить/заменить «Обсудить задачу» / «Discuss your case», «Смотреть кейсы» / «See case studies», «Отвечаю в течение 24 часов» / «I reply within 24 hours».

---

## 4. Что НЕ менять (уже работает на новое позиционирование)

- **Человечная часть About** — интересы, столярка, фон Триер, «превратить кусок дерева в полезную вещь…». Живой человек, а не аватар из LinkedIn — премиальный дифференциатор.
- **Блог целиком** — литературный тон, «No country for old men», правила blog/CLAUDE.md. Это блог зрелого руководителя, он продаёт «голову».
- **Header/Footer** — только имя, менять нечего.
- **Реальные роли в прошлом опыте CV** (System architect Solvo, Enterprise architect Bazelevs и т.д.) — не переписывать задним числом; история «архитектор с 7-летним стажем» усиливает, а не противоречит бизнес-архитектору.
- **Раздел «Экспертиза в классах систем» в CV** — уникальный формат, только поднять выше.
- **Контактный минимализм** и «отвечаю в течение 24 часов».
- **Визуальная айдентика** (teal-градиент, Inter + Brygada 1918) — совпадает с обложками профилей, узнаваемость.
- **Фирменные прагматичные фразы**: «если задача решается простым скриптом — не буду тащить тяжёлую платформу», «документацию пишу так, чтобы было понятно через год», Strangler Fig «без остановки бизнеса».
- **Отдельные EN-URL** (уже сделано коммитом ed6b52f) — работает на EN-SEO.

---

## 5. Порядок внедрения

**Этап 1 — Гигиена (1–2 часа, чистые текстовые правки, можно одним PR):**
1. Единый стаж: index.html:11, SEO.tsx:13, Home.tsx:17-18 и :51-52, CV.tsx:248-249, about/index.en.md («Twelve» → «Fifteen»).
2. index.html title/description (новые).
3. Синхрон титулов CV frontmatter (RU/EN).
4. SEO descriptions About.tsx, Contact.tsx, Services.tsx, Projects.tsx.
5. blogSubtitle в LanguageContext.tsx.

**Этап 2 — Витрина (1–2 дня): Home + Services + Contact.**
1. Home: H1, подзаголовок, 3 карточки, полоса доверия + награды, блок подтверждённых цифр, CTA «Есть бизнес-задача без готового ТЗ?», микротраст «24 часа».
2. Services: подзаголовок-принцип + 4 пакета «боль → решение → кейс» + анти-таргетинг.
3. Contact: блок «Let's Work Together».
4. SEO.tsx: локализация дефолтов через LanguageContext.

**Этап 3 — Доказательства (2–4 дня): Projects + CV + About.**
1. Projects: 3 новых кейса 2025–2026 наверх (нужны карточки-картинки в стиле имеющихся), переформат 8 старых в «результат в заголовке», новый порядок, интро.
2. CV: профиль, заголовок фриланс-блока («Независимый консультант»), строка AI-практики, подъём «классов систем», подзаголовок страницы.
3. About: рамка «спирали»-переводчика + AI-абзац (RU и EN).

**Этап 4 — Канал (постоянно, по статье в 2–3 недели):**
1. Статья «LLM-агенты в Camunda 8 в production» → Хабр + Medium + сайт (главный лид-магнит).
2. «Миграция Flowable 6.7 → 8», затем «Оценка трудозатрат нейросетями».
3. Вне сайта, но для конгруэнтности: привести заголовки LinkedIn/hh к «Ведущий бизнес-архитектор / Lead Business Architect», kwork-вселенную (боты, VPN, сайты за 3 дня) держать полностью отдельно от сайта.

**Критерий приёмки всего плана:** любой текст сайта выдерживает вопрос на первом созвоне «а покажите, где вы это сделали?» — у каждой цифры есть проект, у каждого тезиса — кейс.