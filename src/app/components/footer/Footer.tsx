import Version from '../version';

export default function Footer() {
  return (
    <footer className="mt-16 flex flex-col gap-1 text-center text-sm text-neutral-11 md:mt-32">
      <div>
        © Copyright{' '}
        <a className="link" href="https://colinhemphill.com">
          Colin Hemphill
        </a>{' '}
        {new Date().getFullYear()}. All rights reserved.
      </div>
      <div>
        <Version />
      </div>
    </footer>
  );
}
