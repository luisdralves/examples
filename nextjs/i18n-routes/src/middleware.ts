import { NextMiddleware, NextResponse } from 'next/server';
import { defaultLocale, locales } from './i18n-routes';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

function getLocale(headers: Headers) {
  const languages = new Negotiator({
    headers: Object.entries(headers).reduce(
      (result, [key, value]) => ({
        ...result,
        [key]: value
      }),
      {}
    )
  }).languages();

  try {
    return match(languages, [...locales], defaultLocale);
  } catch {
    return defaultLocale;
  }
}

export const middleware: NextMiddleware = request => {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request.headers);

    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
};

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
