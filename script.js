/* =========================================================
   Landing — Filippov Serhii
   i18n (EN / UA), mobile menu, button ripple, reveal,
   counters, reviews slider
   ========================================================= */

const translations = {
  en: {
    "nav.about": "About",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.process": "Process",
    "nav.reviews": "Reviews",

    "btn.getInTouch": "Get in touch",
    "btn.getInTouch2": "Get in Touch",
    "btn.letsTalk": "Let's Talk",
    "btn.viewPortfolio": "View Portfolio",
    "btn.viewAll": "View All Projects",
    "btn.explore": "Explore Services",

    "hero.tag": "Web Development",
    "hero.title1": "Turn Your Ideas",
    "hero.title2": "Into Powerful",
    "hero.title3": "Web Experiences",
    "hero.text": "Modern websites, fast performance,<br>and stunning design that works for your business.",
    "hero.scroll": "Scroll to explore",

    "why.tag": "Why Choose Me",
    "why.title": "Modern Solutions<br>for Your Business",
    "why.text": "I create fast, scalable, and user-friendly websites that help you grow and stand out.",
    "why.f1": "Blazing Fast<br>Performance",
    "why.f2": "Perfect on<br>Any Device",
    "why.f3": "SEO-Optimized<br>Structure",
    "why.f4": "Clean &amp; Modern<br>Design",

    "work.tag": "My Work",
    "work.title": "Projects<br>That Speak<br>for Themselves",
    "work.text": "A selection of recent projects that showcase my approach to design and development.",
    "work.screen": "Innovative Solutions for a Better Tomorrow",

    "process.tag": "How It Works",
    "process.title": "A Simple Process<br>for Big Results",
    "process.s1": "Discuss Your Goals",
    "process.s1t": "Share your ideas and requirements.",
    "process.s2": "Plan the Solution",
    "process.s2t": "Get a clear strategy and timeline.",
    "process.s3": "Bring It to Life",
    "process.s3t": "See your project in development.",
    "process.s4": "Grow Your Business",
    "process.s4t": "Launch and achieve new results.",

    "results.tag": "Numbers",
    "results.title": "Proven Results",
    "results.text": "Numbers that reflect our commitment to quality and client success.",
    "results.s1": "Projects<br>Completed",
    "results.s2": "Client<br>Satisfaction",
    "results.s3": "Average<br>Growth",
    "results.s4": "Support",

    "services.tag": "Services",
    "services.title": "Full-Cycle<br>Web Development",
    "services.text": "From concept to launch — I handle every step to deliver a premium result.",
    "services.s1": "Landing Pages<br>&amp; Websites",
    "services.s2": "Web Applications<br>&amp; Platforms",
    "services.s3": "E-commerce<br>Solutions",
    "services.s4": "UI/UX Design<br>&amp; Development",
    "services.s5": "Performance<br>Optimization",
    "services.s6": "Ongoing Support<br>&amp; Maintenance",

    "reviews.tag": "Reviews",
    "reviews.title": "What Clients Say",
    "reviews.text": "Real feedback from people who trusted me with their projects.",
    "reviews.r1": "“Outstanding work! The website exceeded all our expectations. Design, speed, and communication were top-notch.”",
    "reviews.r1n": "Anna K.",
    "reviews.r1p": "Founder, Nova Studio",
    "reviews.r2": "“Fast, attentive and very professional. Our conversion rate grew noticeably right after launch.”",
    "reviews.r2n": "Mark D.",
    "reviews.r2p": "CEO, Brightline",
    "reviews.r3": "“A pleasure to work with. Every detail was thought through — and the site works perfectly on mobile.”",
    "reviews.r3n": "Olena L.",
    "reviews.r3p": "Marketing Lead, Orbit",

    "cta.title": "Ready to Start<br>Your Project?",
    "cta.text": "Let's create something amazing together.",

    "footer.rights": "All rights reserved.",
    "footer.dev": "Developed by",

    "meta.title": "Web Development — Filippov Serhii",
  },

  uk: {
    "nav.about": "Про мене",
    "nav.services": "Послуги",
    "nav.portfolio": "Портфоліо",
    "nav.process": "Процес",
    "nav.reviews": "Відгуки",

    "btn.getInTouch": "Зв'язатися",
    "btn.getInTouch2": "Зв'язатися",
    "btn.letsTalk": "Обговорити",
    "btn.viewPortfolio": "Портфоліо",
    "btn.viewAll": "Усі проєкти",
    "btn.explore": "Усі послуги",

    "hero.tag": "Веб-розробка",
    "hero.title1": "Перетворюю ідеї",
    "hero.title2": "на потужні",
    "hero.title3": "веб-рішення",
    "hero.text": "Сучасні сайти, висока швидкість<br>та стильний дизайн, що працює на ваш бізнес.",
    "hero.scroll": "Гортайте далі",

    "why.tag": "Чому я",
    "why.title": "Сучасні рішення<br>для вашого бізнесу",
    "why.text": "Створюю швидкі, масштабовані та зручні сайти, які допомагають вам рости й вирізнятися.",
    "why.f1": "Блискавична<br>швидкість",
    "why.f2": "Ідеально на<br>будь-якому пристрої",
    "why.f3": "SEO-оптимізована<br>структура",
    "why.f4": "Чистий і сучасний<br>дизайн",

    "work.tag": "Мої роботи",
    "work.title": "Проєкти,<br>що говорять<br>самі за себе",
    "work.text": "Добірка нещодавніх проєктів, що показують мій підхід до дизайну та розробки.",
    "work.screen": "Інноваційні рішення для кращого завтра",

    "process.tag": "Як це працює",
    "process.title": "Простий процес —<br>великі результати",
    "process.s1": "Обговорюємо цілі",
    "process.s1t": "Поділіться ідеями та вимогами.",
    "process.s2": "Плануємо рішення",
    "process.s2t": "Чітка стратегія та терміни.",
    "process.s3": "Втілюємо в життя",
    "process.s3t": "Слідкуйте за розробкою проєкту.",
    "process.s4": "Розвиваємо бізнес",
    "process.s4t": "Запуск і нові результати.",

    "results.tag": "Цифри",
    "results.title": "Доведені результати",
    "results.text": "Цифри, що відображають нашу відданість якості та успіху клієнтів.",
    "results.s1": "Завершених<br>проєктів",
    "results.s2": "Задоволених<br>клієнтів",
    "results.s3": "Середнє<br>зростання",
    "results.s4": "Підтримка",

    "services.tag": "Послуги",
    "services.title": "Веб-розробка<br>повного циклу",
    "services.text": "Від ідеї до запуску — беру на себе кожен етап, щоб отримати преміальний результат.",
    "services.s1": "Лендінги<br>та сайти",
    "services.s2": "Веб-застосунки<br>та платформи",
    "services.s3": "Інтернет-<br>магазини",
    "services.s4": "UI/UX дизайн<br>та розробка",
    "services.s5": "Оптимізація<br>швидкодії",
    "services.s6": "Підтримка<br>та супровід",

    "reviews.tag": "Відгуки",
    "reviews.title": "Що кажуть клієнти",
    "reviews.text": "Справжні відгуки людей, які довірили мені свої проєкти.",
    "reviews.r1": "«Чудова робота! Сайт перевершив усі наші очікування. Дизайн, швидкість і комунікація — на найвищому рівні.»",
    "reviews.r1n": "Анна К.",
    "reviews.r1p": "Засновниця, Nova Studio",
    "reviews.r2": "«Швидко, уважно та дуже професійно. Конверсія помітно зросла одразу після запуску.»",
    "reviews.r2n": "Марк Д.",
    "reviews.r2p": "CEO, Brightline",
    "reviews.r3": "«Приємно працювати разом. Кожна деталь продумана — і сайт ідеально працює на мобільних.»",
    "reviews.r3n": "Олена Л.",
    "reviews.r3p": "Маркетинг-лід, Orbit",

    "cta.title": "Готові почати<br>свій проєкт?",
    "cta.text": "Створімо щось неймовірне разом.",

    "footer.rights": "Усі права захищені.",
    "footer.dev": "Розробник —",

    "meta.title": "Веб-розробка — Filippov Serhii",
  },
};

/* ---------------- Language ---------------- */
const langSwitch = document.querySelector(".lang");
const langButtons = document.querySelectorAll(".lang__btn");

function getSavedLang() {
  try { return localStorage.getItem("lang"); } catch (e) { return null; }
}
function saveLang(lang) {
  try { localStorage.setItem("lang", lang); } catch (e) { /* ignore */ }
}

function applyLang(lang) {
  const dict = translations[lang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.documentElement.lang = lang === "uk" ? "uk" : "en";
  document.title = dict["meta.title"];
  langSwitch.dataset.active = lang;
  langButtons.forEach((b) => b.classList.toggle("is-active", b.dataset.lang === lang));
}

function setLang(lang, animate = true) {
  if (!animate) { applyLang(lang); return; }
  document.body.classList.add("lang-switching");
  setTimeout(() => {
    applyLang(lang);
    requestAnimationFrame(() => document.body.classList.remove("lang-switching"));
  }, 220);
  saveLang(lang);
}

langButtons.forEach((btn) =>
  btn.addEventListener("click", () => {
    if (langSwitch.dataset.active !== btn.dataset.lang) setLang(btn.dataset.lang);
  })
);

const initialLang =
  getSavedLang() || ((navigator.language || "").toLowerCase().startsWith("uk") ? "uk" : "en");
setLang(initialLang, false);

/* ---------------- Header & mobile menu ---------------- */
const header = document.getElementById("header");
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 20);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

function toggleMenu(force) {
  const open = force !== undefined ? force : !nav.classList.contains("is-open");
  nav.classList.toggle("is-open", open);
  burger.classList.toggle("is-open", open);
  header.classList.toggle("menu-open", open);
  burger.setAttribute("aria-expanded", open);
}
burger.addEventListener("click", () => toggleMenu());
nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => toggleMenu(false)));
window.addEventListener("resize", () => { if (window.innerWidth > 900) toggleMenu(false); });

/* ---------------- Button ripple ---------------- */
document.querySelectorAll(".btn, .icon-btn").forEach((btn) => {
  btn.addEventListener("pointerdown", (e) => {
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2.2;
    const r = document.createElement("span");
    r.className = "ripple";
    r.style.width = r.style.height = size + "px";
    r.style.left = e.clientX - rect.left - size / 2 + "px";
    r.style.top = e.clientY - rect.top - size / 2 + "px";
    btn.appendChild(r);
    r.addEventListener("animationend", () => r.remove());
  });
});

/* Magnetic effect on primary buttons (desktop only) */
if (window.matchMedia("(hover: hover)").matches) {
  document.querySelectorAll(".btn--primary").forEach((btn) => {
    btn.addEventListener("pointermove", (e) => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.18;
      const y = (e.clientY - r.top - r.height / 2) * 0.3;
      btn.style.transform = `translate(${x}px, ${y - 3}px)`;
    });
    btn.addEventListener("pointerleave", () => (btn.style.transform = ""));
    btn.addEventListener("pointerdown", () => (btn.style.transform = "scale(.95)"));
    btn.addEventListener("pointerup", () => (btn.style.transform = ""));
  });
}

/* ---------------- Reveal on scroll + counters ---------------- */
function animateCount(el) {
  const to = +el.dataset.to;
  const dur = 1600;
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / dur, 1);
    el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        entry.target.querySelectorAll(".count").forEach(animateCount);
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
  document.querySelectorAll(".count").forEach((el) => (el.textContent = el.dataset.to));
}

/* ---------------- Reviews slider ---------------- */
const items = document.querySelectorAll(".review__item");
const cur = document.getElementById("cur");
let index = 0;
let autoplay;

function goTo(i) {
  const prev = items[index];
  index = (i + items.length) % items.length;
  if (prev === items[index]) return;
  prev.classList.remove("is-active");
  prev.classList.add("is-leaving");
  setTimeout(() => prev.classList.remove("is-leaving"), 600);
  items[index].classList.add("is-active");
  cur.textContent = String(index + 1).padStart(2, "0");
}
function restartAutoplay() {
  clearInterval(autoplay);
  autoplay = setInterval(() => goTo(index + 1), 6000);
}
document.getElementById("prev").addEventListener("click", () => { goTo(index - 1); restartAutoplay(); });
document.getElementById("next").addEventListener("click", () => { goTo(index + 1); restartAutoplay(); });
restartAutoplay();

/* Swipe on touch devices */
let touchX = null;
const reviewBox = document.querySelector(".review");
reviewBox.addEventListener("touchstart", (e) => (touchX = e.touches[0].clientX), { passive: true });
reviewBox.addEventListener("touchend", (e) => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 40) { goTo(index + (dx < 0 ? 1 : -1)); restartAutoplay(); }
  touchX = null;
});

/* ---------------- Year ---------------- */
document.getElementById("year").textContent = new Date().getFullYear();
