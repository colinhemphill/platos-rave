export default function Footer() {
  return (
    <footer className="mt-8 flex flex-col gap-2">
      <div className="flex-grow">
        © Copyright{' '}
        <a className="link" href="https://colinhemphill.com">
          Colin Hemphill
        </a>{' '}
        {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
}
