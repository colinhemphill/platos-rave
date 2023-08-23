export default function Footer() {
  return (
    <footer className="mt-16 text-center text-sm text-neutral-11 md:mt-32">
      © Copyright{' '}
      <a className="link" href="https://colinhemphill.com">
        Colin Hemphill
      </a>{' '}
      {new Date().getFullYear()}. All rights reserved.
    </footer>
  );
}
