'use client';
import { usePathname } from 'next/navigation';

export const CurrentRoute = () => {
  const pathname = usePathname();

  return (
    <pre>
      <code>{pathname}</code>
    </pre>
  );
};
