import {
  defaultLocale,
  locales,
  localizedRoutes,
  routeNames
} from './src/i18n-routes.js';

const localeRewrites = locales
  .filter(locale => locale !== defaultLocale)
  .map(locale =>
    routeNames.map(routeName => ({
      destination: `/${locale}/${localizedRoutes[defaultLocale][routeName]}`,
      locale: false,
      source: `/${locale}/${localizedRoutes[locale][routeName]}`
    }))
  )
  .flat();

/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => localeRewrites
};

export default nextConfig;
