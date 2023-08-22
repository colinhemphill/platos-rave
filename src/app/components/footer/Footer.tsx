export default function Footer() {
  return (
    <footer className="mt-8 text-sm text-neutral-400">
      © Copyright{' '}
      <a className="link" href="https://colinhemphill.com">
        Colin Hemphill
      </a>{' '}
      {new Date().getFullYear()}. All rights reserved.
    </footer>
  );
}
