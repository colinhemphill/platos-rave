import Link from 'next/link';
import Heading from './components/Heading';
import { Button } from './components/ui/button';

export default function IntroPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="rounded-lg border-2 border-neutral-6 p-8">
        <header className="flex flex-col gap-3 text-center">
          <Heading className="text-6xl uppercase" color="primary" level={1}>
            Plato’s Rave
          </Heading>
          <Heading level={2}>Bigger Than Time</Heading>
          <p className="mt-8 text-center">
            A text adventure inspired by My Brother, My Brother & Me.
          </p>
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
    </div>
  );
}
