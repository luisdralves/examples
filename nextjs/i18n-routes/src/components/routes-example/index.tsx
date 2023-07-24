import { CurrentRoute } from './current-route';
import { Fragment } from 'react';
import { locales } from '@/i18n-routes';
import { resolveRoute } from '@/core/routes';
import Link from 'next/link';

export const RoutesExample = () => (
  <div>
    <CurrentRoute />

    <ul>
      {locales.map(locale => (
        <Fragment key={locale}>
          <li>
            <Link href={resolveRoute('home', locale)}>{`${locale}:Home`}</Link>
          </li>

          <li>
            <Link href={resolveRoute('about', locale)}>
              {`${locale}:About`}
            </Link>
          </li>

          <li>
            <Link href={resolveRoute('categoryList', locale)}>
              {`${locale}:Categories`}
            </Link>
          </li>

          <li>
            <Link
              href={resolveRoute('categoryDetails', locale, {
                categoryId: 1
              })}
            >
              {`${locale}:Category Details`}
            </Link>
          </li>

          <li>
            <Link href={resolveRoute('articleList', locale, { categoryId: 1 })}>
              {`${locale}:Articles`}
            </Link>
          </li>

          <li>
            <Link
              href={resolveRoute('articleDetails', locale, {
                articleId: 2,
                categoryId: 1
              })}
            >
              {`${locale}:Article Details`}
            </Link>
          </li>
        </Fragment>
      ))}
    </ul>
  </div>
);
