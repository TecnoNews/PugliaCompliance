import { getDictionary } from '@/lib/get-dictionary';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { Solution } from '@/components/sections/Solution';
import { Packages } from '@/components/sections/Packages';
import { Process } from '@/components/sections/Process';
import { Footer } from '@/components/sections/Footer';

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
