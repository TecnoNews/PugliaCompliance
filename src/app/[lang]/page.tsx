import type { Metadata } from 'next';
import { getDictionary } from '@/lib/get-dictionary';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { Solution } from '@/components/sections/Solution';
import { Packages } from '@/components/sections/Packages';
import { Process } from '@/components/sections/Process';
import { Footer } from '@/components/sections/Footer';

const localeMap: Record<string, string> = {
  en: 'en_GB',
  it: 'it_IT',
  fr: 'fr_FR',
  de: 'de_DE',
  nl: 'nl_NL',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'en' | 'it' | 'fr' | 'nl' | 'de');
  const url = `https://pugliacompliance.com/${lang}`;

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: url,
      languages: {
        'en': 'https://pugliacompliance.com/en',
        'it': 'https://pugliacompliance.com/it',
        'fr': 'https://pugliacompliance.com/fr',
        'de': 'https://pugliacompliance.com/de',
        'nl': 'https://pugliacompliance.com/nl',
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url,
      siteName: 'Puglia Compliance',
      locale: localeMap[lang] ?? 'en_GB',
      type: 'website',
      images: [
        {
          url: 'https://pugliacompliance.com/og-image.jpg',
          width: 1200,
          height: 630,
          alt: dict.meta.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'it' },
    { lang: 'fr' },
    { lang: 'nl' },
    { lang: 'de' },
  ];
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  console.log('Rendering page for lang:', lang);
  const dict = await getDictionary(lang as 'en' | 'it' | 'fr' | 'nl' | 'de');

  return (
    <main className="relative">
      <Navbar lang={lang} dict={dict} />
      <Hero dict={dict} />
      <Problem dict={dict} />
      <Solution dict={dict} />
      <Packages dict={dict} />
      <Process dict={dict} />
      <Footer dict={dict} />
    </main>
  );
}
