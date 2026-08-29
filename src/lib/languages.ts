/**
 * Language landing pages served at /<code>/.
 *
 * Summit's default transcription engine is Parakeet TDT v3, which covers 25
 * languages: the 24 official EU languages except Irish, plus Russian and
 * Ukrainian. English is the site's own language, so the remaining 24 each get a
 * page written in that language.
 *
 * `PARAKEET_LANGUAGES` is the full list the copy is allowed to claim; the pages
 * that actually exist are whatever `languagePages` holds, so the sitemap, the
 * hreflang set and the language grid all follow from one array.
 */

/** Every language the default engine transcribes, English included. */
export const PARAKEET_LANGUAGES = [
  "bg", "cs", "da", "de", "el", "en", "es", "et", "fi", "fr", "hr", "hu",
  "it", "lt", "lv", "mt", "nl", "pl", "pt", "ro", "ru", "sk", "sl", "sv", "uk",
] as const;

export interface Feature {
  title: string;
  body: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface UseCaseLink {
  title: string;
  body: string;
  /** Site-relative path. These targets are English pages. */
  href: string;
  linkLabel: string;
}

/**
 * One landing page's copy. Every field is required: a language whose file is
 * missing a FAQ answer or a CTA label fails the build rather than shipping a
 * half-translated page.
 */
export interface LanguagePage {
  /** ISO 639-1 code, and the URL segment: /ru/, /de/, … */
  code: string;
  /** BCP 47 tag for <html lang> and hreflang. */
  locale: string;
  /** The language's name in itself — what the language grid shows. */
  nativeName: string;
  /** English name, used where the surrounding text is English. */
  englishName: string;
  /** `l=` parameter for App Store links, so the listing opens localised. */
  storeLocale: string;

  meta: {
    title: string;
    description: string;
  };

  hero: {
    h1: string;
    subtitle: string;
    ctaLabel: string;
    ctaNote: string;
  };

  /** Why this language works, and how the engine handles it. */
  engine: {
    heading: string;
    paragraphs: string[];
    features: Feature[];
  };

  /** What happens when one call runs in more than one language. */
  mixed: {
    heading: string;
    paragraphs: string[];
    features: Feature[];
  };

  privacy: {
    heading: string;
    paragraphs: string[];
    linkLabel: string;
    linkHref: string;
  };

  useCases: {
    heading: string;
    intro: string;
    items: UseCaseLink[];
  };

  faq: {
    heading: string;
    items: FaqItem[];
  };

  /** Header for the grid of the other language pages. */
  otherLanguages: {
    heading: string;
    intro: string;
  };

  finalCta: {
    heading: string;
    body: string;
    ctaLabel: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
}

import { ru } from "../data/languages/ru";

/**
 * The pages that ship. Adding a language here adds its route, its sitemap
 * entry, its hreflang alternate and its tile in every other page's grid.
 */
export const languagePages: LanguagePage[] = [ru];

export function languagePath(code: string): string {
  return `/${code}/`;
}

/**
 * hreflang set for a language page: every shipped language, plus the English
 * site as `en` and as `x-default` for everyone else.
 */
export function alternateLinks(): { hreflang: string; href: string }[] {
  return [
    ...languagePages.map((page) => ({
      hreflang: page.locale,
      href: languagePath(page.code),
    })),
    { hreflang: "en", href: "/" },
    { hreflang: "x-default", href: "/" },
  ];
}

export function appStoreUrl(storeLocale: string): string {
  return `https://apps.apple.com/app/summit-ai-notes/id6754717420?l=${storeLocale}&mt=12`;
}
