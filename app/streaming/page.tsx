// Streaming example using React Suspense.
// The page loads immediately, but SlowComponent streams in later.

import { Suspense } from "react";
import SlowComponent from "./SlowComponent";

export default function StreamingPage() {
  return (
    <div>
      <div className="prose prose-sm prose-gray max-w-none bg-gray-100 p-6 rounded-lg">
        <h1 className="text-2xl font-bold">Streaming with Suspense</h1>

        <p className="mt-4">
          This page demonstrates <strong>React Suspense streaming</strong>, a feature
          that allows parts of the UI to load immediately while slower components
          stream in later. Instead of blocking the entire page until everything is
          ready, Suspense shows a fallback instantly and then replaces it once the
          slow content has finished rendering. This creates a smoother, more
          responsive user experience, especially when loading data or running
          expensive server components.
        </p>

        <h2 className="mt-6 text-xl font-semibold">Expected Behaviour</h2>
        <p className="mt-2">
          When you visit this page, the heading and layout appear instantly. The
          <code>SlowComponent</code> intentionally delays for a few seconds, so the
          Suspense fallback text (“Loading slow content…”) is shown first. Once the
          slow component finishes rendering, it streams into the page and replaces
          the fallback automatically.
        </p>

        <h3 className="mt-4 font-semibold">How This Page Works</h3>
        <ul className="list-disc pl-6 mt-2">
          <li>The page renders immediately with visible static content.</li>
          <li>Suspense detects that <code>SlowComponent</code> is not ready yet.</li>
          <li>The fallback text is displayed instantly.</li>
          <li>Once the slow component resolves, it streams into the UI.</li>
          <li>No full-page reload or blocking occurs at any point.</li>
        </ul>
      </div>
      <div className="prose prose-black prose-li:text-black prose-li:text-base max-w-none mt-8">
        {/* Suspense fallback shows instantly while SlowComponent loads */}
        <Suspense fallback={<p>Loading slow content…</p>}>
          <SlowComponent />
        </Suspense>
      </div>
    </div>
  );
}
