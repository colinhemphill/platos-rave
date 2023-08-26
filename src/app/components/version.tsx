import Link from 'next/link';

export default function Version() {
  return (
    <>
      Alpha version{' '}
      <Link className="link" href="/changelog">
        {process.env.APP_VERSION}
      </Link>
    </>
  );
}
