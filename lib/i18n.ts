export const locales = ["it", "ru", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "it";

export const localeLabels: Record<Locale, string> = {
  it: "IT",
  ru: "RU",
  en: "EN",
};

export const localeNames: Record<Locale, string> = {
  it: "Italiano",
  ru: "Русский",
  en: "English",
};

export const rtlLocales: Locale[] = [];

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export type Dictionary = {
  nav: { home: string; about: string; services: string; cases: string; blog: string; contact: string; booking: string; cta: string };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    stats: { label: string; value: string }[];
  };
  sections: {
    testimonialsTitle: string;
    trustTitle: string;
    leadMagnetTitle: string;
    leadMagnetDesc: string;
    faqTitle: string;
    bookingTitle: string;
  };
  footer: {
    rights: string;
    vat: string;
  };
  services: {
    title: string;
    subtitle: string;
    cards: { id: string; title: string; description: string; price: string; cta: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: { name: string; email: string; company: string; message: string; submit: string };
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  it: {
    nav: {
      home: "Home",
      about: "Chi sono",
      services: "Servizi",
      cases: "Case study",
      blog: "Blog",
      contact: "Contatti",
      booking: "Prenota",
      cta: "Parliamo",
    },
    seo: {
      title: "Alisa Chebotarenko | Consulenza AI & Project Management",
      description:
        "Consulenza strategica per investitori, startup e imprenditori: analisi business, roadmap AI e execution guidata.",
      keywords: ["consulenza AI", "project manager", "startup", "investitori", "due diligence"],
    },
    hero: {
      eyebrow: "PROJECT MANAGER // AI STRATEGIST",
      title: "SCALA IL TUO BUSINESS CON L'AI",
      subtitle:
        "Aiuto investitori e startup a trasformare idee in operazioni profittevoli con framework concreti, KPI chiari e implementazione rapida.",
      primaryCta: "Prenota consulenza",
      secondaryCta: "Scopri i pacchetti",
      stats: [
        { label: "Progetti lanciati", value: "40+" },
        { label: "Partnership investimento", value: "15M€+" },
        { label: "Mercati supportati", value: "8" },
      ],
    },
    sections: {
      testimonialsTitle: "TESTIMONIALS // RISULTATI REALI",
      trustTitle: "TRUST BADGES // AFFIDABILITÀ",
      leadMagnetTitle: "GUIDA GRATUITA",
      leadMagnetDesc: "Checklist di 27 punti per valutare startup AI prima di investire.",
      faqTitle: "FAQ // APPROFONDIMENTI",
      bookingTitle: "PRENOTA UNA CALL",
    },
    footer: {
      rights: "Tutti i diritti riservati.",
      vat: "P.IVA su richiesta",
    },
    services: {
      title: "SERVIZI DI CONSULENZA",
      subtitle: "Dalla strategia all'esecuzione operativa.",
      cards: [
        {
          id: "1",
          title: "Sessione Strategica 1:1",
          description: "Audit rapido, priorità e piano di azione in 90 minuti.",
          price: "€290",
          cta: "Paga con Stripe",
        },
        {
          id: "2",
          title: "Pacchetto AI Readiness",
          description: "Analisi processi, stack consigliato, roadmap a 90 giorni.",
          price: "€1.200",
          cta: "Acquista pacchetto",
        },
        {
          id: "3",
          title: "Investor-Startup Bridge",
          description: "Mediazione strategica, report due diligence, governance kickoff.",
          price: "€2.400",
          cta: "Richiedi proposta",
        },
      ],
    },
    contact: {
      title: "CONTATTI",
      subtitle: "Raccontami obiettivi, stage e criticità. Ti rispondo entro 24 ore.",
      form: {
        name: "Nome",
        email: "Email",
        company: "Azienda",
        message: "Messaggio",
        submit: "Invia richiesta",
      },
    },
  },
  ru: {
    nav: {
      home: "Главная",
      about: "Обо мне",
      services: "Услуги",
      cases: "Кейсы",
      blog: "Блог",
      contact: "Контакты",
      booking: "Бронирование",
      cta: "Связаться",
    },
    seo: {
      title: "Алиса Чеблотаренко | Консалтинг по ИИ и Project Management",
      description:
        "Стратегический консалтинг для инвесторов, стартапов и предпринимателей: аудит бизнеса, AI-роудмап и внедрение.",
      keywords: ["консалтинг ИИ", "project manager", "стартап", "инвесторы", "due diligence"],
    },
    hero: {
      eyebrow: "PROJECT MANAGER // AI STRATEGIST",
      title: "МАСШТАБИРУЙТЕ БИЗНЕС С ИИ",
      subtitle:
        "Помогаю инвесторам и стартапам превращать идеи в прибыльные операционные системы: четкие KPI, прозрачные процессы и быстрый запуск.",
      primaryCta: "Записаться на консультацию",
      secondaryCta: "Посмотреть пакеты",
      stats: [
        { label: "Запущенных проектов", value: "40+" },
        { label: "Сделки инвестиций", value: "15M€+" },
        { label: "Рынков", value: "8" },
      ],
    },
    sections: {
      testimonialsTitle: "ОТЗЫВЫ // РЕАЛЬНЫЕ РЕЗУЛЬТАТЫ",
      trustTitle: "ДОВЕРИЕ // ПРОФЕССИОНАЛИЗМ",
      leadMagnetTitle: "БЕСПЛАТНЫЙ МАТЕРИАЛ",
      leadMagnetDesc: "Чеклист из 27 пунктов для оценки AI-стартапа перед инвестицией.",
      faqTitle: "FAQ // ДЕТАЛИ",
      bookingTitle: "ЗАБРОНИРОВАТЬ КОНСУЛЬТАЦИЮ",
    },
    footer: {
      rights: "Все права защищены.",
      vat: "P.IVA по запросу",
    },
    services: {
      title: "КОНСАЛТИНГОВЫЕ УСЛУГИ",
      subtitle: "От стратегии до операционного внедрения.",
      cards: [
        {
          id: "1",
          title: "Стратегическая сессия 1:1",
          description: "Экспресс-аудит, приоритеты и план действий за 90 минут.",
          price: "€290",
          cta: "Оплатить через Stripe",
        },
        {
          id: "2",
          title: "Пакет AI Readiness",
          description: "Анализ процессов, рекомендуемый стек, роудмап на 90 дней.",
          price: "€1.200",
          cta: "Купить пакет",
        },
        {
          id: "3",
          title: "Investor-Startup Bridge",
          description: "Медиаторство, due diligence отчеты, запуск governance.",
          price: "€2.400",
          cta: "Запросить предложение",
        },
      ],
    },
    contact: {
      title: "КОНТАКТЫ",
      subtitle: "Опишите цели, стадию проекта и задачи. Отвечаю в течение 24 часов.",
      form: {
        name: "Имя",
        email: "Email",
        company: "Компания",
        message: "Сообщение",
        submit: "Отправить заявку",
      },
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      cases: "Cases",
      blog: "Blog",
      contact: "Contact",
      booking: "Book",
      cta: "Let's talk",
    },
    seo: {
      title: "Alisa Chebotarenko | AI & Project Management Consulting",
      description:
        "Strategic consulting for investors, startups, and founders: business diagnostics, AI roadmap and execution support.",
      keywords: ["AI consulting", "project manager", "startup", "investor advisory", "due diligence"],
    },
    hero: {
      eyebrow: "PROJECT MANAGER // AI STRATEGIST",
      title: "SCALE YOUR BUSINESS WITH AI",
      subtitle:
        "I help investors and startups convert opportunity into measurable growth through operational design, sharp KPIs, and hands-on implementation.",
      primaryCta: "Book a consultation",
      secondaryCta: "Explore packages",
      stats: [
        { label: "Projects delivered", value: "40+" },
        { label: "Investment partnerships", value: "€15M+" },
        { label: "Markets covered", value: "8" },
      ],
    },
    sections: {
      testimonialsTitle: "TESTIMONIALS // REAL IMPACT",
      trustTitle: "TRUST BADGES // CREDIBILITY",
      leadMagnetTitle: "FREE PLAYBOOK",
      leadMagnetDesc: "27-point checklist to evaluate AI startups before investing.",
      faqTitle: "FAQ // DEEP DIVE",
      bookingTitle: "BOOK A CONSULTATION",
    },
    footer: {
      rights: "All rights reserved.",
      vat: "VAT number on request",
    },
    services: {
      title: "CONSULTING SERVICES",
      subtitle: "From strategic thinking to operational execution.",
      cards: [
        {
          id: "1",
          title: "1:1 Strategic Session",
          description: "Fast audit, priorities, and 90-minute action blueprint.",
          price: "€290",
          cta: "Pay with Stripe",
        },
        {
          id: "2",
          title: "AI Readiness Package",
          description: "Process assessment, tech stack, and 90-day roadmap.",
          price: "€1,200",
          cta: "Purchase package",
        },
        {
          id: "3",
          title: "Investor-Startup Bridge",
          description: "Strategic mediation, due diligence report, governance kickoff.",
          price: "€2,400",
          cta: "Request proposal",
        },
      ],
    },
    contact: {
      title: "CONTACT",
      subtitle: "Share your goals, stage and blockers. I reply within 24 hours.",
      form: {
        name: "Name",
        email: "Email",
        company: "Company",
        message: "Message",
        submit: "Send request",
      },
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
