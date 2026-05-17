// Simple API route using Next.js Route Handlers.
// Accessible at /api/hello.

export async function GET() {
  return Response.json({
    message: "Hello from API Route",

    description:
      "This endpoint demonstrates a simple Next.js API Route using the App Router's Route Handlers. " +
      "When a GET request is made to /api/hello, the server returns a JSON response generated at request time. " +
      "API routes are ideal for lightweight server-side logic such as returning JSON data, handling form submissions, " +
      "proxying external APIs, or performing secure operations that should not run in the browser.",

    expectedBehaviour:
      "Visiting /api/hello in the browser or calling it via fetch() will return a JSON object. " +
      "The response is generated on the server for every request, and no page rendering is involved.",

    steps: [
      "A GET request is made to /api/hello.",
      "Next.js runs this route handler on the server.",
      "The handler returns a JSON response using Response.json().",
      "The client receives structured JSON data immediately."
    ]
  });
}
