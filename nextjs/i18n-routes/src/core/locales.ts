import { Locale, locales } from '@/i18n-routes';

export const validateLocale = (locale?: string) => {
  if (!locale || !locales.includes(locale as Locale)) {
    return null;
  }

  return locale as Locale;
};
