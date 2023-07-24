import {
  Locale,
  RouteName,
  locales,
  localizedRoutes,
  routeNames
} from '@/i18n-routes';

import { validateLocale } from './locales';

export const normalizeRoute = (
  route: string,
  params?: Record<string, string>
) => {
  const [_, currentLocale, ...currentSegments] = route.split('/');
  const validLocale = validateLocale(currentLocale);

  if (!validLocale) {
    return route;
  }

  for (const locale of locales) {
    for (const routeName of routeNames) {
      const segments = localizedRoutes[locale][routeName].split('/');

      if (
        segments.length === currentSegments.length &&
        segments.every((segment, index) => {
          return segment === currentSegments[index] || segment.startsWith(':');
        })
      ) {
        const localizedSegments = localizedRoutes[validLocale][routeName]
          .split('/')
          .map((segment, index) => {
            return segment.startsWith(':')
              ? params?.[segment.slice(1)] ?? currentSegments[index]
              : segment;
          });

        return `/${validLocale}/${localizedSegments.join('/')}`;
      }
    }
  }

  return route;
};

export const resolveRoute = (
  routeName: RouteName,
  locale: Locale,
  params?: Record<string, string | number>
) =>
  normalizeRoute(
    Object.entries(params ?? {}).reduce(
      (result, [key, value]) => result.replace(`:${key}`, `${value}`),
      `/${locale}/${localizedRoutes[locale][routeName]}`
    )
  );
