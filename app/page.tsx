// Home page — simple landing page introducing the feature showcase.
export default function Home() {
  return (
    <div className="prose prose-sm prose-gray max-w-none bg-gray-100 p-6 rounded-lg">
      <h1 className="text-4xl font-extrabold text-gray-900">
        Next.js Feature Showcase
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Explore Next.js feature from navigation above.
      </p>
      <ul>
        <li>Built with Next.js 14 + Tailwind CSS (stand-alone)</li>
        <li>Git repository at: <a href="https://github.com/wizzard262/next-js-features-demo" target="_blank" rel="noopener noreferrer">https://github.com/wizzard262/next-js-features-demo</a></li>
        <li>Build & Deploy from Vercels zero-config CI/CD workflow (no YAML files)</li>
        <li>Hosted on Vercel <a href="https://next-js-features-demo.vercel.app/" target="_blank" rel="noopener noreferrer">https://next-js-features-demo.vercel.app/</a><br/>
            <i>(Github Pages will only host static content, and Azure is forcing a "Next.js breaking" Node 22 or 24 runtime)</i>
        </li>
      </ul>
      <p className="mt-6 text-sm">
        Some more Next.js features TODO?
      </p>
      <ul>
        <li>Layouts & nested layouts</li>
        <li>Loading UI (loading.tsx)</li>
        <li>Error boundaries (error.tsx)</li>
        <li>Route groups</li>
        <li>Edge runtime</li>
        <li>Metadata API</li>
        <li>Route handlers (route.ts)</li>
        <li>Fonts (next/font)</li>
        <li>Parallel & intercepting routes</li>
      </ul>
    </div>
  );
}