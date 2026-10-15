import { salon } from "../data/salon";
import {
  BookButton,
  Button,
  Eyebrow,
  Heading,
  PageHero,
  Reveal,
  Section,
  Shell,
  Stars,
} from "../components/ui";
import { CTABlock, MastersGrid } from "../components/blocks";
import { photoById } from "../data/salon";

const quotes = [
  {
    text: "Мастер Нона за 5 часов сделала из меня конфетку. Было сложное окрашивание и стрижка. Нона — прекрасный мастер своего дела.",
    author: "Вероника А.",
  },
  {
    text: "Мастер Кристина учла все мои пожелания и предложила идеальный вариант окрашивания, результат превзошёл все мои ожидания.",
    author: "liza.pozdnyakova11",
  },
  {
    text: "Выражаю благодарность мастеру-бровисту Эле за её прекрасную работу с моими бровями.",
    author: "Ирина Берковская",
  },
];

export default function Masters() {
  return (
    <>
      <PageHero
        eyebrow="Команда"
        title={
          <>
            Мастера <em className="text-rose-3">Brush Buro</em>
          </>
        }
        lead="Колористы, стилисты, nail-мастера и бровисты, которые ведут гостей от первого визита к постоянному результату. Выбирайте своего — и записывайтесь в одно окно."
        image={photoById("11410105/2a0000018fafa75fc34875c4e543c8d61b3e")}
      >
        <BookButton variant="gold" size="lg" label="Записаться к мастеру" />
        <Button href={salon.telegram.href} variant="light" size="lg">
          Написать в Telegram
        </Button>
      </PageHero>

      <Section className="py-20 sm:py-28">
        <Shell>
          <Reveal>
            <Eyebrow>Команда</Eyebrow>
            <Heading className="mt-6 max-w-2xl">
              Люди, которым <em className="text-rose">доверяют</em>
            </Heading>
            <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-mute">
              Имена и специализации — из реальных отзывов гостей салона в Яндекс Картах.
            </p>
          </Reveal>
          <div className="mt-14">
            <MastersGrid />
          </div>
        </Shell>
      </Section>

      <Section tone="sand" className="py-20 sm:py-28">
        <Shell>
          <Reveal>
            <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Eyebrow>Слова гостей</Eyebrow>
                <Heading className="mt-6 max-w-xl">
                  О мастерах — <em className="text-rose">в отзывах</em>
                </Heading>
              </div>
              <Button href={salon.yandexReviews} variant="outline" arrow>
                Читать все отзывы
              </Button>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {quotes.map((q, i) => (
              <Reveal key={q.author} delay={i * 110}>
                <figure className="flex h-full flex-col rounded-4xl border border-line bg-white p-8 shadow-soft">
                  <span className="font-display text-5xl leading-none text-rose-2">“</span>
                  <blockquote className="mt-4 flex-1 text-[1.0625rem] leading-relaxed text-ink/80">
                    {q.text}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                    <Stars />
                    <span className="text-sm font-medium">{q.author}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Shell>
      </Section>

      <CTABlock />
    </>
  );
}
