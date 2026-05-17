// Dynamic route example.
// The [slug] folder captures any URL segment, e.g. /docs/intro.

export default function DocPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <div className="prose prose-sm prose-gray max-w-none bg-gray-100 p-6 rounded-lg">
        <h1 className="text-2xl font-bold">Dynamic Route</h1>

        <p className="mt-4">
          This page demonstrates a <strong>dynamic route</strong> in Next.js, where
          the URL itself determines which content is displayed. Any segment placed
          in the URL (such as <code>/docs/intro</code> or <code>/docs/getting-started</code>)
          is captured by the <code>[slug]</code> folder and passed into the page as
          a parameter. Dynamic routing is ideal for documentation pages, blog
          posts, user profiles, product pages, or any content that depends on a
          variable path.
        </p>

        <h2 className="mt-6 text-xl font-semibold">Expected Behaviour</h2>
        <p className="mt-2">
          When you navigate to a URL like <code>/docs/anything</code>, the value
          after <code>/docs/</code> becomes the <code>slug</code> parameter. This
          page simply displays the slug so you can see how the routing system
          works. In a real application, the slug would be used to load the correct
          content from a database, CMS, or filesystem.
        </p>

        <h3 className="mt-4 font-semibold">How This Page Works</h3>
        <ul className="list-disc pl-6 mt-2">
          <li>The folder name <code>[slug]</code> tells Next.js to treat it as a dynamic route.</li>
          <li>Any value in that part of the URL is captured as <code>params.slug</code>.</li>
          <li>The page receives <code>params</code> automatically from Next.js.</li>
          <li>The slug is displayed directly on the page for demonstration.</li>
        </ul>
      </div>
      <div className="prose prose-black prose-li:text-black prose-li:text-base max-w-none mt-8">
        {/* params.slug contains the dynamic part of the URL */}
        <p className="mt-6 text-lg">
          <strong>You opened:</strong> {params.slug}
        </p>
      </div>
    </div>
  );
}
