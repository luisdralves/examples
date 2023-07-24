export const locales = ['en', 'pt-PT'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const routeNames = [
  'about',
  'articleDetails',
  'articleList',
  'categoryDetails',
  'categoryList',
  'home'
] as const;

export type RouteName = (typeof routeNames)[number];

export const localizedRoutes: Record<Locale, Record<RouteName, string>> = {
  en: {
    about: 'about',
    articleDetails: 'categories/:categoryId/articles/:articleId',
    articleList: 'categories/:categoryId/articles',
    categoryDetails: 'categories/:categoryId',
    categoryList: 'categories',
    home: ''
  },
  ['pt-PT']: {
    about: 'sobre',
    articleDetails: 'categorias/:categoryId/artigos/:articleId',
    articleList: 'categorias/:categoryId/artigos',
    categoryDetails: 'categorias/:categoryId',
    categoryList: 'categorias',
    home: ''
  }
};
