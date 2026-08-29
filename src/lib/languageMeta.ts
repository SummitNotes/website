/**
 * Lightweight per-language metadata, kept separate from the full page copy in
 * src/data/languages/*.ts.
 *
 * Footer.tsx is hydrated (`client:load`) on every page site-wide, so anything
 * it imports ships to every visitor, not just readers of a language page. It
 * only needs a language's code, tag and native name to render its link row —
 * importing the full LanguagePage objects for that would pull every
 * language's translated copy (title, FAQ, use cases, ...) into the client
 * bundle of every single page on the site. This file is the small, static
 * alternative.
 *
 * Keep the `code`/`locale`/`nativeName` values here in sync with the matching
 * fields in each src/data/languages/<code>.ts file.
 */

export interface LanguageMeta {
  code: string;
  locale: string;
  nativeName: string;
}

export const languageMetas: LanguageMeta[] = [
  { code: "bg", locale: "bg", nativeName: "Български" },
  { code: "cs", locale: "cs", nativeName: "Čeština" },
  { code: "da", locale: "da", nativeName: "Dansk" },
  { code: "de", locale: "de", nativeName: "Deutsch" },
  { code: "el", locale: "el", nativeName: "Ελληνικά" },
  { code: "es", locale: "es", nativeName: "Español" },
  { code: "et", locale: "et", nativeName: "Eesti" },
  { code: "fi", locale: "fi", nativeName: "Suomi" },
  { code: "fr", locale: "fr", nativeName: "Français" },
  { code: "hr", locale: "hr", nativeName: "Hrvatski" },
  { code: "hu", locale: "hu", nativeName: "Magyar" },
  { code: "it", locale: "it", nativeName: "Italiano" },
  { code: "lt", locale: "lt", nativeName: "Lietuvių" },
  { code: "lv", locale: "lv", nativeName: "Latviešu" },
  { code: "mt", locale: "mt", nativeName: "Malti" },
  { code: "nl", locale: "nl", nativeName: "Nederlands" },
  { code: "pl", locale: "pl", nativeName: "Polski" },
  { code: "pt", locale: "pt", nativeName: "Português" },
  { code: "ro", locale: "ro", nativeName: "Română" },
  { code: "ru", locale: "ru", nativeName: "Русский" },
  { code: "sk", locale: "sk", nativeName: "Slovenčina" },
  { code: "sl", locale: "sl", nativeName: "Slovenščina" },
  { code: "sv", locale: "sv", nativeName: "Svenska" },
  { code: "uk", locale: "uk", nativeName: "Українська" },
];

export function languagePath(code: string): string {
  return `/${code}/`;
}
