import { changelog } from '@content';

export default function ChangelogPage() {
  return (
    <main
      className="prose prose-neutral dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: changelog.body.html }}
    />
  );
}
