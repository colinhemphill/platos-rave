import Link from 'next/link';
import Footer from './components/footer/Footer';
import Heading from './components/heading';
import { Button } from './components/ui/button';
import { APP_DESCRIPTION } from './lib/metadata';

export default function IntroPage() {
  return (
    <>
      <main className="flex flex-col gap-8">
        <div className="rounded-lg border-2 border-neutral-7 p-8">
          <header className="flex flex-col gap-3 text-center">
            <Heading className="text-6xl uppercase" color="primary" level={1}>
              Plato’s Rave
            </Heading>
            <Heading level={2}>Bigger Than Time</Heading>
            <p className="mt-8 text-center">{APP_DESCRIPTION}</p>
          </header>
        </div>
        <Button
          asChild
          className="self-center uppercase"
          variant="primary"
          size="xxl"
        >
          <Link href="/game">Play</Link>
        </Button>
      </main>

      <Footer />
    </>
  );
}
