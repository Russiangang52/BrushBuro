import { reviews, salon } from "../data/salon";
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
import { photoById, ratingBreakdown } from "../data/salon";

export default function Reviews() {
  return (
    <>
      <PageHero
        eyebrow="Отзывы"
        title={
          <>
            5,0 — рейтинг <em className="text-rose-3">Яндекс Карт</em>
          </>
        }
        lead="286 отзывов и 370 оценок от гостей салона. Мы публикуем их без правок — вместе с ответами администратора Brush Buro."
        image={photoById("4916794/2a0000018f73fe6f5442cd3b79c544e2a54c")}
      >
        <GoodPlaceBadge />
        <BookButton variant="gold" size="lg" label="Записаться онлайн" />
      </PageHero>

      <Section className="py-16 sm:py-24">
        <Shell>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.4fr] lg:items-start">
            <Reveal>
              <div className="rounded-5xl border border-line bg-white p-8 shadow-soft lg:sticky lg:top-28">
                <div className="flex items-end gap-4">
                  <span className="font-display text-[4.5rem] leading-none">5,0</span>
                  <div className="pb-2">
                    <Stars className="text-[#ffc22e]" />
                    <div className="mt-1.5 text-sm text-mute">
                      {salon.rating.reviews} отзывов · {salon.rating.ratings} оценок
                    </div>
                  </div>
                </div>

                <div className="mt-7 space-y-2.5">
                  {ratingBreakdown.map((r) => (
                    <div key={r.stars} className="flex items-center gap-3">
                      <span className="w-8 text-xs text-mute tabular-nums">{r.stars}★</span>
                      <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-sand-2">
                        <span
                          className="block h-full rounded-full bg-[#ffc22e]"
                          style={{ width: `${r.share}%` }}
                        />
                      </span>
                      <span className="w-9 text-right text-xs text-mute tabular-nums">
                        {r.share}%
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-3">
                  <Button href={salon.yandexReviews} variant="primary" size="md" className="w-full" arrow>
                    Все отзывы в Яндекс Картах
                  </Button>
                  <Button href={salon.reviewsWrite} variant="outline" size="md" className="w-full">
                    Оставить отзыв
                  </Button>
                </div>

                <p className="mt-6 text-xs leading-relaxed text-mute">
                  Оценки и тексты отзывов получены из карточки организации
                  «Brush Buro» на Яндекс Картах.
                </p>
              </div>
            </Reveal>

            <div className="space-y-6">
              <Reveal>
                <Eyebrow>Последние отзывы</Eyebrow>
                <Heading className="mt-6">
                  Что пишут <em className="text-rose">гости</em>
                </Heading>
              </Reveal>

              {reviews.map((r, i) => (
                <Reveal key={r.author} delay={i * 90}>
                  <article className="rounded-5xl border border-line bg-white p-8 shadow-soft">
                    <header className="flex flex-wrap items-center gap-4">
                      <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[#f3d9e2] to-[#dfc0cd] font-display text-xl text-ink/70">
                        {r.author.slice(0, 1).toUpperCase()}
                      </span>
                      <div className="min-w-0">
                        <div className="font-medium">{r.author}</div>
                        <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-mute">
                          <Stars className="scale-90 origin-left" />
                          <span>{r.date}</span>
                          {r.level && (
                            <span className="rounded-full bg-sand px-2.5 py-0.5">
                              {r.level}
                            </span>
                          )}
                        </div>
                      </div>
                    </header>

                    <p className="mt-6 text-[1rem] leading-relaxed text-ink/80">{r.text}</p>

                    {r.photo && (
                      <img
                        src={r.photo}
                        alt="Фото из отзыва о салоне Brush Buro"
                        loading="lazy"
                        className="mt-6 max-h-96 w-full rounded-4xl object-cover"
                      />
                    )}

                    {r.answer && (
                      <div className="mt-6 rounded-4xl bg-sand p-6">
                        <div className="eyebrow text-rose">Ответ Brush Buro</div>
                        <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink/70">
                          {r.answer}
                        </p>
                      </div>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Shell>
      </Section>

      <Section tone="sand" className="py-20">
        <Shell>
          <Reveal>
            <div className="rounded-5xl bg-ink p-10 text-center text-white sm:p-14">
              <h2 className="mx-auto max-w-2xl text-balance text-[1.85rem] leading-[1.12] sm:text-[2.5rem]">
                Уже были у нас? <em className="text-rose-3">Расскажите впечатления</em>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-white/60">
                Отзыв в Яндекс Картах помогает нам расти — а новым гостям выбрать
                мастера и не ошибиться.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Button href={salon.reviewsWrite} variant="gold" size="lg">
                  Оставить отзыв
                </Button>
                <Button href={salon.booking} variant="light" size="lg" arrow>
                  Записаться снова
                </Button>
              </div>
            </div>
          </Reveal>
        </Shell>
      </Section>
    </>
  );
}
