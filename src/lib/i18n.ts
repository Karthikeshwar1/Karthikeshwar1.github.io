/**
 * The site's chrome in English and Kannada, in one place so the Kannada can be read through at once.
 * Posts, post titles, book titles and proper names are not here: they stay in the language they were written in.
 *
 * Both languages are in the page; `html lang` (set before paint) shows one. Render text with
 * `<T t={ui.nav.blog} />`, and an attribute with `{...attr('placeholder', ui.search.placeholder)}`.
 */
export type Text = { en: string; kn: string };

export const NAME: Text = { en: 'Karthikeshwar', kn: 'ಕಾರ್ತಿಕೇಶ್ವರ' };

export const LINKS = {
  github: 'https://github.com/Karthikeshwar1',
  linkedin: 'https://www.linkedin.com/in/karthikeshwar/',
} as const;

/** Page title as the browser tab shows it. */
export const pageTitle = (t: Text): Text => ({ en: `${t.en} — ${NAME.en}`, kn: `${t.kn} — ${NAME.kn}` });

/** Props for an attribute that follows the language; Footer.astro swaps it on the toggle. */
export const attr = (name: string, t: Text) => ({
  [name]: t.en,
  'data-l10n': name,
  'data-l10n-en': t.en,
  'data-l10n-kn': t.kn,
});

export const ui = {
  nav: {
    blog: { en: 'Blog', kn: 'ಬ್ಲಾಗ್' },
    projects: { en: 'Projects', kn: 'ಯೋಜನೆಗಳು' },
    musings: { en: 'Musings', kn: 'ಚಿಂತನೆಗಳು' },
  },
  footer: {
    copyright: { en: `© 2026 ${NAME.en}`, kn: `© 2026 ${NAME.kn}` },
    /** The globe names the language you switch to. */
    switchLanguage: { en: 'ಕನ್ನಡ', kn: 'English' },
    dark: { en: 'Dark mode', kn: 'ಕತ್ತಲೆ' },
    light: { en: 'Light mode', kn: 'ಬೆಳಕು' },
  },
  common: {
    favourite: { en: 'Favourite', kn: 'ಮೆಚ್ಚಿನದು' },
    allWriting: { en: 'All writing', kn: 'ಎಲ್ಲಾ ಬರಹಗಳು' },
    skip: { en: 'Skip to content', kn: 'ವಿಷಯಕ್ಕೆ ಹೋಗಿ' },
    contents: { en: 'Contents', kn: 'ಪರಿವಿಡಿ' },
    search: { en: 'Search', kn: 'ಹುಡುಕಿ' },
    searchArchive: { en: 'Search the archive', kn: 'ಸಂಗ್ರಹದಲ್ಲಿ ಹುಡುಕಿ' },
    timeless: { en: 'Timeless', kn: 'ಕಾಲಾತೀತ' },
    booksRead: { en: 'Books read', kn: 'ಓದಿದ ಪುಸ್ತಕಗಳು' },
    painting: { en: 'Alegalu (Waves)', kn: 'ಅಲೆಗಳು' },
    paintingAlt: {
      en: 'Alegalu (Waves), an acrylic painting by Karthikeshwar',
      kn: 'ಅಲೆಗಳು, ಕಾರ್ತಿಕೇಶ್ವರ ಅವರ ಅಕ್ರಿಲಿಕ್ ಚಿತ್ರ',
    },
    medium: { en: 'Acrylic on canvas', kn: 'ಕ್ಯಾನ್ವಾಸ್ ಮೇಲೆ ಅಕ್ರಿಲಿಕ್' },
  },
  home: {
    about: { en: 'About', kn: 'ಪರಿಚಯ' },
    bio: [
      { en: "Hi, I'm Karthikeshwar.", kn: 'ನಮಸ್ಕಾರ, ನಾನು ಕಾರ್ತಿಕೇಶ್ವರ.' },
      {
        en: 'I <a href="/projects">build things which can think</a>. Systems that coordinate. (Once, <a href="https://kathaaverse.com/">a book-to-game thing</a> hit #1 on Hacker News.)',
        kn: '<a href="/projects">ಯೋಚಿಸಬಲ್ಲ ಯಂತ್ರಗಳನ್ನು ಕಟ್ಟುತ್ತೇನೆ</a>. ಒಂದಾಗಿ ದುಡಿಯುವ ವ್ಯವಸ್ಥೆಗಳನ್ನು. (ಒಮ್ಮೆ, <a href="https://kathaaverse.com/">ಪುಸ್ತಕವನ್ನು ಆಟವಾಗಿಸುವ ಒಂದು ಪ್ರಯೋಗ</a> Hacker News‌ನಲ್ಲಿ #1 ಆಗಿತ್ತು.)',
      },
      {
        en: 'I <a href="/blog/timeless/books_read">read</a> to write, <a href="/blog">write</a> to think. I <a href="/musings/Alegalhu">paint</a> &amp; <a href="/musings/#piano">play piano</a> to stop thinking. And I <a href="/musings/#teaching">discuss</a> what I read.',
        kn: 'ಬರೆಯಲು <a href="/blog/timeless/books_read">ಓದುತ್ತೇನೆ</a>, ಯೋಚಿಸಲು <a href="/blog">ಬರೆಯುತ್ತೇನೆ</a>. ಯೋಚನೆ ನಿಲ್ಲಿಸಲು <a href="/musings/Alegalhu">ಚಿತ್ರ ಬಿಡಿಸುತ್ತೇನೆ</a>, <a href="/musings/#piano">ಪಿಯಾನೋ ನುಡಿಸುತ್ತೇನೆ</a>. ಓದಿದ್ದನ್ನು <a href="/musings/#teaching">ಚರ್ಚಿಸುತ್ತೇನೆ</a>.',
      },
      {
        en: 'I want to solve <a href="/blog/2026/Intelligence-should-be-invisible">Intelligence</a>. Intelligence solves all else.',
        kn: '<a href="/blog/2026/Intelligence-should-be-invisible">ಬುದ್ಧಿಮತ್ತೆಯನ್ನು</a> ಬಿಡಿಸಬೇಕು. ಉಳಿದುದೆಲ್ಲವನ್ನೂ ಬುದ್ಧಿಮತ್ತೆಯೇ ಬಿಡಿಸುತ್ತದೆ.',
      },
      {
        en: 'An <a href="/blog/2026/ai-manifesto">AI optimist</a>. We\'ll never run out of problems to solve.',
        kn: 'ನಾನೊಬ್ಬ <a href="/blog/2026/ai-manifesto">AI ಆಶಾವಾದಿ</a>. ಬಗೆಹರಿಸಲು ಸಮಸ್ಯೆಗಳು ಎಂದಿಗೂ ಮುಗಿಯುವುದಿಲ್ಲ.',
      },
    ] as Text[],
  },
  blog: {
    lede: {
      en: 'No AI is used in writing my blogs. So there is soul behind every (imperfect) word, and meaning behind every (suboptimal) sentence.',
      kn: 'ನನ್ನ ಬ್ಲಾಗ್ ಬರಹಗಳಲ್ಲಿ AI ಬಳಸಿಲ್ಲ. ಹಾಗಾಗಿ ಪ್ರತಿ (ಅಪರಿಪೂರ್ಣ) ಪದದ ಹಿಂದೆ ಆತ್ಮವಿದೆ, ಪ್ರತಿ (ಅಷ್ಟೇನೂ ಉತ್ತಮವಲ್ಲದ) ವಾಕ್ಯದ ಹಿಂದೆ ಅರ್ಥವಿದೆ.',
    },
    byYear: { en: 'Archive by year', kn: 'ವರ್ಷವಾರು ಬರಹಗಳು' },
    topClicks: { en: 'Top clicks', kn: 'ಹೆಚ್ಚು ಓದಿದವು' },
    books: { en: 'Books', kn: 'ಪುಸ್ತಕಗಳು' },
    nonBlog: { en: 'Non-blog stuff', kn: 'ಬ್ಲಾಗ್ ಹೊರತಾಗಿ' },
    resources: { en: 'Resources', kn: 'ಸಂಪನ್ಮೂಲಗಳು' },
    more: { en: 'More', kn: 'ಇನ್ನಷ್ಟು' },
    magazine: { en: 'Fancy version of some of my writings', kn: 'ನನ್ನ ಕೆಲವು ಬರಹಗಳ ಅಲಂಕೃತ ಆವೃತ್ತಿ' },
    magazineMeta: { en: 'Magazine', kn: 'ಪತ್ರಿಕೆ' },
    papers: { en: 'Research papers written by me', kn: 'ನಾನು ಬರೆದ ಸಂಶೋಧನಾ ಪ್ರಬಂಧಗಳು' },
    shelf: { en: 'Shelf', kn: 'ಕಪಾಟು' },
  },
  post: {
    minutes: (n: number): Text => ({ en: `${n} min`, kn: `${n} ನಿಮಿಷ` }),
    minRead: (n: number): Text => ({ en: `${n} min read`, kn: `${n} ನಿಮಿಷದ ಓದು` }),
    moreFrom: (year: string): Text => ({ en: `More from ${year}`, kn: `${year}ರ ಇನ್ನಷ್ಟು ಬರಹಗಳು` }),
    previous: { en: 'Previous', kn: 'ಹಿಂದಿನ ಬರಹ' },
    next: { en: 'Next', kn: 'ಮುಂದಿನ ಬರಹ' },
    neighbours: { en: 'Previous and next post', kn: 'ಹಿಂದಿನ ಮತ್ತು ಮುಂದಿನ ಬರಹ' },
  },
  books: {
    lede: (n: number): Text => ({ en: `${n} books, shelved by scale.`, kn: `${n} ಪುಸ್ತಕಗಳು, ವ್ಯಾಪ್ತಿಯ ಪ್ರಕಾರ ಜೋಡಿಸಲಾಗಿದೆ.` }),
    shelves: { en: 'Shelves', kn: 'ಕಪಾಟುಗಳು' },
    Cosmos: { en: 'Cosmos', kn: 'ಬ್ರಹ್ಮಾಂಡ' },
    Society: { en: 'Society', kn: 'ಸಮಾಜ' },
    Human: { en: 'Human', kn: 'ಮಾನವ' },
    Micro: { en: 'Micro', kn: 'ಸೂಕ್ಷ್ಮ' },
    level: (t: Text): Text => ({ en: `${t.en}-level`, kn: `${t.kn} ಮಟ್ಟ` }),
    myNotes: { en: 'My notes', kn: 'ನನ್ನ ಟಿಪ್ಪಣಿಗಳು' },
  },
  projects: {
    count: (main: number, mini: number): Text => ({
      en: `${main} projects · ${mini} mini-projects`,
      kn: `${main} ಯೋಜನೆಗಳು · ${mini} ಕಿರು ಯೋಜನೆಗಳು`,
    }),
    main: { en: 'Main projects', kn: 'ಮುಖ್ಯ ಯೋಜನೆಗಳು' },
    mini: { en: 'Mini-projects', kn: 'ಕಿರು ಯೋಜನೆಗಳು' },
  },
  musings: {
    lede: { en: 'Painting, piano, and teaching.', kn: 'ಚಿತ್ರಕಲೆ, ಪಿಯಾನೋ ಮತ್ತು ಬೋಧನೆ.' },
    painting: { en: 'Painting', kn: 'ಚಿತ್ರಕಲೆ' },
    piano: { en: 'Piano', kn: 'ಪಿಯಾನೋ' },
    teaching: { en: 'Teaching', kn: 'ಬೋಧನೆ' },
    recordings: { en: 'Piano recordings', kn: 'ಪಿಯಾನೋ ಧ್ವನಿಮುದ್ರಣಗಳು' },
    youtubePlaylist: { en: 'YouTube playlist', kn: 'YouTube ಪ್ಲೇಲಿಸ್ಟ್' },
    playlist: { en: 'Playlist', kn: 'ಪ್ಲೇಲಿಸ್ಟ್' },
    blackAndWhite: { en: 'In black and white', kn: 'ಕಪ್ಪು-ಬಿಳುಪಿನಲ್ಲಿ' },
    blackAndWhiteAlt: { en: 'Alegalu (Waves) in black and white', kn: 'ಕಪ್ಪು-ಬಿಳುಪಿನಲ್ಲಿ ಅಲೆಗಳು' },
    all: { en: 'All musings', kn: 'ಎಲ್ಲಾ ಚಿಂತನೆಗಳು' },
  },
  missing: {
    title: { en: 'Not found', kn: 'ಸಿಗಲಿಲ್ಲ' },
    heading: { en: 'This page isn’t in the archive.', kn: 'ಈ ಪುಟ ಸಂಗ್ರಹದಲ್ಲಿ ಇಲ್ಲ.' },
    text: {
      en: 'It may have moved when the site was rebuilt. Search for it, or start from the blog.',
      kn: 'ತಾಣವನ್ನು ಮರುನಿರ್ಮಿಸಿದಾಗ ಇದು ಬೇರೆಡೆ ಸರಿದಿರಬಹುದು. ಹುಡುಕಿ, ಅಥವಾ ಬ್ಲಾಗ್‌ನಿಂದ ಆರಂಭಿಸಿ.',
    },
    home: { en: 'Home', kn: 'ಮುಖಪುಟ' },
    error: { en: 'Error 404', kn: 'ದೋಷ 404' },
  },
};

/** The search status line on /blog, built in the browser. `q` arrives already quoted and escaped. */
export const searchStatus = {
  en: (n: number, q: string, capped: boolean) =>
    n === 0
      ? `Nothing in the archive mentions ${q}. Try fewer or shorter words.`
      : `${capped ? 'Top 30' : n} ${n === 1 ? 'piece mentions' : 'pieces mention'} ${q}`,
  kn: (n: number, q: string, capped: boolean) =>
    n === 0
      ? `ಸಂಗ್ರಹದಲ್ಲಿ ${q} ಎಲ್ಲೂ ಇಲ್ಲ. ಕಡಿಮೆ ಅಥವಾ ಚಿಕ್ಕ ಪದಗಳನ್ನು ಪ್ರಯತ್ನಿಸಿ.`
      : `${q} ಇರುವ ${capped ? 'ಮೊದಲ 30' : n} ${n === 1 ? 'ಬರಹ' : 'ಬರಹಗಳು'}`,
};
