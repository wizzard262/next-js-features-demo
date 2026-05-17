// Incremental Static Regeneration (ISR) example.
// This page is statically generated but revalidated every 10 seconds.

export const revalidate = 10; // Rebuild page every 10 seconds

export default function ISRPage() {
  const timestamp = new Date().toISOString();

  return (
    <div>
      <div className="prose prose-sm prose-gray max-w-none bg-gray-100 p-6 rounded-lg">
        <h1 className="text-2xl font-bold">Incremental Static Regeneration (ISR) (revalidate = 10s)</h1>

        <p className="mt-4">
          This page demonstrates <strong>Incremental Static Regeneration (ISR)</strong>,
          a hybrid rendering strategy where the page is generated once at build
          time but can be transparently updated in the background at a fixed
          interval. ISR gives you the performance benefits of static pages while
          still allowing content to stay reasonably fresh without requiring a full
          rebuild or redeploy.
        </p>

        <h2 className="mt-6 text-xl font-semibold">Expected Behaviour</h2>
        <p className="mt-2">
          When you load this page, you’ll see the timestamp showing when the page
          was last generated. If you refresh within 10 seconds, the timestamp will
          stay the same because the cached static version is still valid. After
          10 seconds have passed, the next request triggers a background rebuild,
          and a new timestamp appears once the regeneration completes.
        </p>

        <h3 className="mt-4 font-semibold">How This Page Works</h3>
        <ul className="list-disc pl-6 mt-2">
          <li>The page is generated once at build time.</li>
          <li>Next.js caches the static HTML and serves it instantly.</li>
          <li>After 10 seconds, the cached version becomes stale.</li>
          <li>The next request triggers a background regeneration.</li>
          <li>Once regenerated, all users see the updated page.</li>
        </ul>
      </div>
      <div className="prose prose-black prose-li:text-black prose-li:text-base max-w-none mt-8">
        <p className="mt-6 text-lg">
          <strong>Page generated at:</strong> {timestamp}
        </p>
      </div>
    </div>
  );
}
