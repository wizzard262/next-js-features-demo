// Server-Side Rendering (SSR) example.
// This page fetches live data on every request.

export const dynamic = "force-dynamic"; // Ensures SSR instead of static rendering

export default async function SSRPage() {
  // Fetch live GitHub repo data on each request
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const data = await res.json();

  return (
    <div>
      <div className="prose prose-sm prose-gray max-w-none bg-gray-100 p-6 rounded-lg">
        <h1 className="text-2xl font-bold">Server-Side Rendering (SSR)</h1>

        <p className="mt-4">
          This page demonstrates <strong>Server-Side Rendering (SSR)</strong>, where
          the HTML is generated fresh on every request. Unlike Static Site
          Generation, which produces a fixed HTML file at build time, SSR allows
          the page to always show the most up‑to‑date data. This makes it ideal
          for dashboards, analytics, live counters, or anything that changes
          frequently and must be accurate at the moment of the request.
        </p>

        <h2 className="mt-6 text-xl font-semibold">Expected Behaviour</h2>
        <p className="mt-2">
          Each time you refresh this page, Next.js performs a new server-side
          fetch to the GitHub API. The star count displayed below should update
          over time as the Next.js repository gains (or loses) stars. Because the
          page is rendered on the server for every request, the user always sees
          the latest data.
        </p>

        <h3 className="mt-4 font-semibold">How This Page Works</h3>
        <ul className="list-disc pl-6 mt-2">
          <li>The browser requests the page from the server.</li>
          <li>Next.js runs the component on the server before sending HTML.</li>
          <li>The GitHub API is queried during the request.</li>
          <li>The server injects the live data into the rendered HTML.</li>
          <li>The user receives a fully rendered page with fresh data.</li>
        </ul>
      </div>
      <div className="prose prose-black prose-li:text-black prose-li:text-base max-w-none mt-8">
        <p className="mt-6 text-lg">
          <strong>Next.js GitHub Stars:</strong> {data.stargazers_count}
        </p>
      </div>
    </div>
  );
}
