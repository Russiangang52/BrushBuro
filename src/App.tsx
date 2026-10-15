import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Masters from "./pages/Masters";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import { useRoute } from "./lib/router";
import { BookButton } from "./components/ui";
import { salon } from "./data/salon";

const routes: Record<string, () => React.ReactElement> = {
  "/": Home,
  "/services": Services,
  "/masters": Masters,
  "/gallery": Gallery,
  "/reviews": Reviews,
  "/about": About,
  "/contacts": Contacts,
};

const meta: Record<string, { title: string; desc: string }> = {
  "/": {
    title: "Brush Buro — салон красоты в Люберцах | Онлайн-запись",
    desc: "Салон красоты Brush Buro в Люберцах, Весенняя ул., 2. Рейтинг 5,0, награда «Хорошее место — 2026». Волосы, ногти, брови, мужской зал. Онлайн-запись 24/7.",
  },
  "/services": {
    title: "Услуги и цены — Brush Buro, салон красоты в Люберцах",
    desc: "Прайс салона Brush Buro: маникюр, педикюр, окрашивание волос, стрижки, брови. 92 услуги в онлайн-записи. Люберцы, Весенняя ул., 2.",
  },
  "/masters": {
    title: "Мастера салона Brush Buro — Люберцы",
    desc: "Колористы, стилисты, nail-мастера и бровисты Brush Buro. Запись к мастеру онлайн.",
  },
  "/gallery": {
    title: "Фотографии салона — Brush Buro, Люберцы",
    desc: "127 фотографий салона красоты Brush Buro в Люберцах: залы, рабочие места мастеров, детали интерьера.",
  },
  "/reviews": {
    title: "Отзывы о салоне Brush Buro — 5,0 в Яндекс Картах",
    desc: "286 отзывов и 370 оценок гостей салона красоты Brush Buro в Люберцах. Рейтинг 5,0 в Яндекс Картах.",
  },
  "/about": {
    title: "О салоне Brush Buro — «Хорошее место — 2026»",
    desc: "Brush Buro — салон красоты в Люберцах. Награда «Хорошее место — 2026», рейтинг 5,0. Волосы, ногти, брови, мужской зал.",
  },
  "/contacts": {
    title: "Контакты — Brush Buro, Люберцы, Весенняя ул., 2",
    desc: "Адрес салона Brush Buro: Люберцы, Весенняя ул., 2, этаж 1. Ежедневно 09:00–21:00. Телефон +7 (977) 942-55-18. М. Некрасовка.",
  },
};

export default function App() {
  const route = useRoute();
  const Page = routes[route] ?? NotFound;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const m = meta[route] ?? meta["/"];
    document.title = m.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", m.desc);
  }, [route]);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip">
      {/* Reading progress */}
      <div
        className="fixed inset-x-0 top-0 z-[55] h-[2px] origin-left bg-gradient-to-r from-rose-3 via-rose to-gold"
        style={{ transform: `scaleX(${progress / 100})` }}
      />

      <Header />
      <main key={route} className="animate-fade-up">
        <Page />
      </main>
      <Footer />

      {/* Sticky mobile booking bar */}
      <MobileBookBar />
    </div>
  );
}

function MobileBookBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 620);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-3 bottom-3 z-40 flex items-center gap-2 rounded-full border border-line bg-porcelain/95 p-2 shadow-lift backdrop-blur-xl transition-all duration-500 sm:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-24 opacity-0"
      }`}
    >
      <a
        href={`tel:${salon.phone.raw}`}
        className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-sand text-ink"
        aria-label="Позвонить"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path
            d="M5 4h3.5l1.5 4-2 1.5a12 12 0 006.5 6.5L16 14l4 1.5V19a1.5 1.5 0 01-1.7 1.5C10.6 19.9 4.1 13.4 3.5 5.7A1.5 1.5 0 015 4z"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      <BookButton size="md" className="flex-1" label="Записаться онлайн" />
    </div>
  );
}

function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-ink px-6 pt-32 pb-24 text-center text-white">
      <span className="font-display text-[6rem] leading-none text-rose-3/50">404</span>
      <h1 className="mt-4 text-[2rem]">Страница не найдена</h1>
      <p className="mt-4 max-w-md text-white/60">
        Возможно, ссылка устарела. Вернитесь на главную — там всё про услуги,
        мастеров и онлайн-запись.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <BookButton size="lg" label="Записаться онлайн" />
        <a
          href="#/"
          className="inline-flex h-14 items-center rounded-full px-8 text-[0.9375rem] font-medium text-white ring-1 ring-inset ring-white/25 transition-colors hover:bg-white/10"
        >
          На главную
        </a>
      </div>
    </div>
  );
}
