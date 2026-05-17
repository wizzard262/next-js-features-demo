// MiddelwarePage example.
// This page demonstrates how to use Next.js middleware to block access to a specific route ("/blocked") 
// and redirect users back to the homepage ("/") when they attempt to access it.

export const dynamic = "force-dynamic"; // Ensures SSR instead of static rendering

export default async function MiddelwarePage() {

  return (
    <div>
      <div className="prose prose-sm prose-gray max-w-none bg-gray-100 p-6 rounded-lg">
        <h1 className="text-2xl font-bold">Middleware - Route Blocking Example</h1>
        <p className="mt-4">
          This middleware runs before every request and checks the incoming URL. <br />
          If the user tries to access the &quot;/blocked&quot; route, the middleware
          intercepts the request and immediately redirects them back to the homepage (&quot;/&quot;).
        </p>
        <p className="mt-4">
          <b>How it works:</b>< br />
          Next.js inspects the request pathname <br />
          If pathname === &quot;/blocked&quot;, the middleware returns a redirect response <br />
          The user never reaches the original page
        </p>
        <p className="mt-4">
          This pattern is useful for:
          <ul>
            <li>Protecting restricted routes</li>
            <li>Redirecting users based on auth or roles</li>
            <li>Blocking deprecated or disabled pages</li>
            <li>Handling simple access rules at the edge</li>
          </ul>
        </p>
        <a href="/blocked" className="text-blue-600 underline mt-4 block">Click this link which attempts to access the blocked route: &quot;/blocked&quot;. It will be redirected to Homepage.</a>
      </div>
    </div>
  );
}
