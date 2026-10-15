import { accessibility, amenities, offers, payments } from "../data/salon";
import {
  BookButton,
  Button,
  Chip,
  Eyebrow,
  GoodPlaceBadge,
  Heading,
  PageHero,
  Reveal,
  Section,
  Shell,
} from "../components/ui";
import { AmenitiesBlock, CTABlock, GalleryStrip, MapBlock } from "../components/blocks";
import { photoById } from "../data/salon";

const stats = [
  { value: "5,0", label: "рейтинг Яндекс Карт" },
  { value: "286", label: "отзывов гостей" },
  { value: "92", label: "услуги в онлайн-записи" },
  { value: "127", label: "фотографий салона" },
];

const values = [
  {
    n: "01",
    title: "Диагностика прежде всего",
    text: "Перед окрашиванием и уходом мастер оценивает состояние волос и кожи головы — и предлагает протокол, который действительно нужен, а не самый дорогой.",
  },
  {
    n: "02",
    title: "Честная работа со сложными случаями",
    text: "К нам приходят исправлять неудачные окрашивания и стрижки. Мы не обещаем невозможного, но всегда объясняем, сколько шагов потребуется до желаемого результата.",
  },
  {
    n: "03",
    title: "Стерильность и гигиена",
    text: "Аппаратные и медицинские техники маникюра и педикюра, индивидуальные наборы, обработка инструментов по санитарным нормам.",
  },
  {
    n: "04",
    title: "Комфорт для каждого гостя",
    text: "Wi-Fi, детская комната, парковка и доступная среда. Можно прийти с ребёнком, с собакой до 35 см и с коляской — вход полностью доступен.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="О салоне"
        title={
          <>
            Салон, который получил <em className="text-rose-3">«Хорошее место»</em>
          </>
        }
        lead="Brush Buro — салон красоты в Люберцах на Весенней улице, 2. Волосы, ногти, брови и мужской зал. Награда «Хорошее место — 2026» по оценкам пользователей Яндекс Карт."
        image={photoById("11937221/2a0000018f73fe6e6af98322faa0cdf69253")}
      >
        <GoodPlaceBadge />
        <BookButton variant="gold" size="lg" label="Записаться онлайн" />
      </PageHero>

      {/* Stats */}
      <Section className="py-16 sm:py-20">
        <Shell>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="rounded-4xl border border-line bg-white p-8 text-center shadow-soft">
                  <div className="font-display text-[3.25rem] leading-none">{s.value}</div>
                  <div className="mt-3 text-sm leading-snug text-mute">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Shell>
      </Section>

      {/* Story */}
      <Section tone="sand" className="py-20 sm:py-28">
        <Shell>
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal>
              <Eyebrow>Философия</Eyebrow>
              <Heading className="mt-6">
                Красота без <em className="text-rose">спешки</em>
              </Heading>
              <div className="mt-6 space-y-5 text-[1.0625rem] leading-relaxed text-mute">
                <p>
                  Мы открылись, чтобы в Люберцах появился салон, куда не нужно ехать
                  в центр Москвы: с сильной командой колористов, чистыми техниками
                  маникюра и педикюра и спокойной атмосферой, в которой можно выдохнуть.
                </p>
                <p>
                  Brush Buro — это парикмахерский зал, ногтевая студия, beauty-бар
                  и мужской зал под одной крышей. 92 услуги в онлайн-записи,
                  предварительная запись и удобные окна даже в выходные — салон
                  работает ежедневно с 09:00 до 21:00.
                </p>
                <p>
                  Рейтинг 5,0 и 286 отзывов в Яндекс Картах — не маркетинговая цифра,
                  а сумма историй гостей, которые возвращаются к своим мастерам
                  снова и снова.
                </p>
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <BookButton size="lg" label="Записаться онлайн" />
                <Button to="/masters" variant="outline" size="lg" arrow>
                  Познакомиться с командой
                </Button>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={photoById("18005133/2a000001999c444df0a2c6180b21adcc450c")}
                  alt="Парикмахерский зал Brush Buro"
                  loading="lazy"
                  className="col-span-2 h-64 w-full rounded-5xl object-cover sm:h-80"
                />
                <img
                  src={photoById("13477341/2a0000018f73fe6f27e6bf3f43948e5a5763")}
                  alt="Маникюрный зал Brush Buro"
                  loading="lazy"
                  className="h-56 w-full rounded-4xl object-cover"
                />
                <img
                  src={photoById("6410060/2a0000018f73fe6f4f0afa93b24b131e4be2")}
                  alt="Приёмная зона Brush Buro"
                  loading="lazy"
                  className="h-56 w-full rounded-4xl object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Shell>
      </Section>

      {/* Values */}
      <Section className="py-20 sm:py-28">
        <Shell>
          <Reveal>
            <Eyebrow>Принципы</Eyebrow>
            <Heading className="mt-6 max-w-2xl">
              На чём держится <em className="text-rose">результат</em>
            </Heading>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.n} delay={i * 90}>
                <article className="h-full rounded-5xl border border-line bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift sm:p-10">
                  <span className="font-display text-[2.75rem] leading-none text-rose-2/45">
                    {v.n}
                  </span>
                  <h3 className="mt-5 text-[1.625rem] leading-tight">{v.title}</h3>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink/70">{v.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Shell>
      </Section>

      <GalleryStrip />
      <AmenitiesBlock />

      {/* Offers */}
      <Section className="py-20">
        <Shell>
          <Reveal>
            <div className="grid gap-10 rounded-5xl border border-line bg-white p-10 shadow-soft lg:grid-cols-[0.85fr_1.15fr] sm:p-14">
              <div>
                <Eyebrow>Бонусы</Eyebrow>
                <Heading className="mt-6 text-[1.75rem] sm:text-[2.25rem]">
                  Акции и подарочные <em className="text-rose">сертификаты</em>
                </Heading>
                <p className="mt-5 text-[0.9375rem] leading-relaxed text-mute">
                  В салоне действует дисконтная система скидок, регулярно проходят
                  спецпредложения, а подарочный сертификат можно оформить на любую
                  сумму и услугу.
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {offers.map((o) => (
                    <Chip key={o}>{o}</Chip>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {amenities.slice(0, 4).map((a) => (
                  <div key={a.title} className="rounded-4xl bg-sand p-6">
                    <span className="text-lg text-rose">{a.icon}</span>
                    <div className="mt-3 font-medium leading-snug">{a.title}</div>
                    <div className="mt-1 text-sm text-mute">{a.note}</div>
                  </div>
                ))}
                <div className="rounded-4xl bg-sand p-6 sm:col-span-2">
                  <div className="eyebrow text-rose">Способы оплаты</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {payments.slice(0, 7).map((p) => (
                      <span
                        key={p}
                        className="rounded-full bg-white px-3 py-1.5 text-[0.8125rem] text-ink/70"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Shell>
      </Section>

      {/* Accessibility */}
      <Section tone="sand" className="py-20">
        <Shell>
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <Eyebrow>Доступная среда</Eyebrow>
                <Heading className="mt-6 text-[1.75rem] sm:text-[2.25rem]">
                  Салон открыт <em className="text-rose">для всех</em>
                </Heading>
                <p className="mt-5 text-[0.9375rem] leading-relaxed text-mute">
                  Вход с улицы, пандус и кнопка вызова персонала — гости на коляске
                  попадают в салон без посторонней помощи.
                </p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {accessibility.map((a) => (
                  <li
                    key={a}
                    className="flex items-start gap-3 rounded-3xl bg-white px-5 py-4 text-[0.9375rem] text-ink/75"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-2" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Shell>
      </Section>

      <MapBlock />
      <CTABlock />
    </>
  );
}
