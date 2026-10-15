import { accessibility, metro, payments, salon } from "../data/salon";
import {
  BookButton,
  Button,
  Eyebrow,
  GoodPlaceBadge,
  Heading,
  PageHero,
  Reveal,
  Section,
  Shell,
  Stars,
} from "../components/ui";
import { CTABlock } from "../components/blocks";
import { photoById } from "../data/salon";

const weekdays = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

export default function Contacts() {
  return (
    <>
      <PageHero
        eyebrow="Контакты"
        title={
          <>
            Мы на Весенней&nbsp;улице,&nbsp;<em className="text-rose-3">2</em>
          </>
        }
        lead="Салон красоты Brush Buro в Люберцах — первый этаж, отдельный вход с улицы. Работаем ежедневно с 09:00 до 21:00, без выходных."
        image={photoById("6410060/2a0000018f73fe6f4f0afa93b24b131e4be2")}
      >
        <BookButton variant="gold" size="lg" label="Записаться онлайн" />
        <Button href={`tel:${salon.phone.raw}`} variant="light" size="lg">
          {salon.phone.display}
        </Button>
      </PageHero>

      {/* Contact cards */}
      <Section className="py-16 sm:py-24">
        <Shell>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <Reveal>
              <div className="h-full rounded-5xl border border-line bg-white p-8 shadow-soft">
                <span className="eyebrow text-rose">Адрес</span>
                <p className="mt-5 font-display text-[1.5rem] leading-snug">
                  {salon.address.full}
                </p>
                <ul className="mt-4 space-y-1.5 text-[0.9375rem] text-mute">
                  <li>{salon.address.floor}</li>
                  <li>Индекс {salon.address.postal}</li>
                  <li>{salon.address.area}</li>
                </ul>
                <Button href={salon.yandexMaps} variant="ghost" size="sm" className="mt-5 px-0" arrow>
                  Открыть карточку в Яндекс Картах
                </Button>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="h-full rounded-5xl border border-line bg-white p-8 shadow-soft">
                <span className="eyebrow text-rose">Связь</span>
                <a
                  href={`tel:${salon.phone.raw}`}
                  className="mt-5 block font-display text-[1.75rem] leading-none transition-colors hover:text-rose"
                >
                  {salon.phone.display}
                </a>
                <p className="mt-2 text-sm text-mute">{salon.phone.note}</p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  <a
                    href={salon.telegram.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-line px-4 py-2 text-[0.8125rem] transition-colors hover:border-ink/35"
                  >
                    Telegram · {salon.telegram.label}
                  </a>
                  <a
                    href={salon.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-line px-4 py-2 text-[0.8125rem] transition-colors hover:border-ink/35"
                  >
                    WhatsApp
                  </a>
                </div>
                <div className="mt-7 rounded-3xl bg-sand p-5">
                  <div className="text-[0.8125rem] leading-relaxed text-ink/70">
                    Онлайн-запись работает круглосуточно — выбирайте услугу, мастера
                    и время без звонка.
                  </div>
                  <BookButton size="sm" className="mt-4 w-full" label="Записаться онлайн" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="h-full rounded-5xl border border-line bg-white p-8 shadow-soft md:col-span-2 xl:col-span-1">
                <span className="eyebrow text-rose">Часы работы</span>
                <div className="mt-5 flex items-baseline gap-3">
                  <span className="font-display text-[1.75rem] leading-none">09:00 – 21:00</span>
                  <span className="rounded-full bg-[#e8f6ec] px-3 py-1 text-[0.75rem] font-medium text-[#2e7d4f]">
                    ежедневно
                  </span>
                </div>
                <ul className="mt-5 divide-y divide-line">
                  {weekdays.map((d) => (
                    <li key={d} className="flex items-center justify-between py-2.5 text-[0.9375rem]">
                      <span className="text-mute">{d}</span>
                      <span className="tabular-nums">09:00 – 21:00</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Shell>
      </Section>

      {/* Map */}
      <Section tone="sand" className="py-20 sm:py-28">
        <Shell>
          <Reveal>
            <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Eyebrow>На карте</Eyebrow>
                <Heading className="mt-6 max-w-2xl">
                  Люберцы, Весенняя&nbsp;ул.,&nbsp;2
                </Heading>
                <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-mute">
                  От метро «Некрасовка» — 12 минут пешком. Рядом с входом бесплатная
                  парковка и велопарковка.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href={salon.route} variant="primary" size="md">
                  Построить маршрут
                </Button>
                <Button href={salon.yandexMaps} variant="outline" size="md" arrow>
                  В Яндекс Картах
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <div className="mt-12 overflow-hidden rounded-5xl border border-line bg-white p-2.5 shadow-lift">
              <iframe
                src={salon.mapEmbed}
                width="100%"
                height="520"
                title="Brush Buro на карте — Люберцы, Весенняя улица, 2"
                className="block h-[400px] w-full rounded-[1.25rem] border-0 sm:h-[520px]"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {metro.map((m, i) => (
              <Reveal key={m.name} delay={i * 90}>
                <a
                  href={`https://yandex.ru/maps/?rtext=~${m.name}%20метро&rtt=mt`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-4xl border border-line bg-white px-6 py-5 transition-all hover:-translate-y-0.5 hover:shadow-soft"
                >
                  <span
                    className="grid h-11 w-11 place-items-center rounded-2xl text-white"
                    style={{ background: m.color }}
                  >
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                      <path d="M12 3c3.6 0 5.6 2.4 5.6 5.8v6.6c0 1.5 1.1 2.4 2.4 2.6v1.5H4v-1.5c1.3-.2 2.4-1.1 2.4-2.6V8.8C6.4 5.4 8.4 3 12 3zm-1.6 3.4L7.9 15h2l.4-2.1h3.2l.4 2.1h2l-2.5-8.6h-2zm1 1.9l1.2 4h-2.4z" />
                    </svg>
                  </span>
                  <span>
                    <span className="block font-medium">м. {m.name}</span>
                    <span className="block text-sm text-mute">{m.distance} пешком</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </Shell>
      </Section>

      {/* Details */}
      <Section className="py-20">
        <Shell>
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-5xl border border-line bg-white p-9 shadow-soft">
                <h3 className="text-[1.625rem]">Оплата</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-mute">
                  Принимаем все удобные способы оплаты, включая СБП и онлайн-предоплату
                  при записи. Действует дисконтная система скидок.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {payments.map((p) => (
                    <span
                      key={p}
                      className="rounded-full bg-sand px-3.5 py-1.5 text-[0.8125rem] text-ink/70"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="h-full rounded-5xl border border-line bg-white p-9 shadow-soft">
                <h3 className="text-[1.625rem]">Доступная среда</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-mute">
                  Вход с улицы оборудован пандусом и кнопкой вызова персонала.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {accessibility.map((a) => (
                    <li key={a} className="flex items-start gap-3 text-[0.9375rem] text-ink/75">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-2" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-6 flex flex-col items-start gap-6 rounded-5xl bg-ink p-9 text-white sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-4">
                <GoodPlaceBadge />
                <span className="flex items-center gap-2.5 rounded-full border border-white/15 px-4 py-2 text-sm text-white/70">
                  <Stars className="text-[#ffc22e]" />
                  5,0 · {salon.rating.reviews} отзывов
                </span>
              </div>
              <BookButton variant="gold" size="lg" label="Записаться онлайн" />
            </div>
          </Reveal>
        </Shell>
      </Section>

      <CTABlock />
    </>
  );
}
