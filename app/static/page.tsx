// Static Site Generation (SSG) example.
// This page is rendered at build time and served as a static HTML file.

import features from "@/lib/features";

export const metadata = { title: "Static Rendering" };

export default function StaticPage() {
  return (
    <div>
      {/* Description section — smaller + grey */}
      <div className="prose prose-sm prose-gray max-w-none bg-gray-100 p-6 rounded-lg">
        <h1 className="text-2xl font-bold text-black">Static Site Generation (SSG)</h1>

        <p className="mt-4">
          This page demonstrates <strong>Static Site Generation (SSG)</strong>, where
          the HTML is generated once at build time and then served as a fully
          static file. Because the output never changes unless you rebuild the
          project, SSG is ideal for content that doesn’t rely on live data or
          per‑request logic. It loads instantly, can be cached aggressively, and
          requires no server processing on each request.
        </p>

        <h2 className="mt-6 text-xl font-semibold text-black">Expected Behaviour</h2>
        <p className="mt-2">
          The list of features below is baked directly into the generated HTML.
          When you refresh the page, navigate away, or deploy the site, the
          content remains identical until the next build. No API calls or dynamic
          rendering occur at runtime.
        </p>

        <h3 className="mt-4 font-semibold text-black">How This Page Works</h3>
        <ul className="list-disc pl-6 mt-2">
          <li>Next.js scans the file during the build process.</li>
          <li>It generates a static HTML file containing the feature list.</li>
          <li>The page is served instantly from disk or CDN.</li>
          <li>No server‑side code runs when the user visits the page.</li>
        </ul>
      </div>

      {/* Output section — normal size + black */}
      <div className="prose prose-black prose-li:text-black prose-li:text-base max-w-none mt-8">
        <ul className="mt-6 list-disc pl-6">
          {features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
