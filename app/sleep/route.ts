
/**
 * This route exists purely to simulate a real 3‑second delay for streaming demos.
 *
 * Why we need this:
 * -----------------
 * In development, a Server Component can use `setTimeout` to simulate slow work,
 * but in production (especially on Vercel) artificial delays inside components
 * are optimised away. Suspense boundaries only wait for *real async I/O* such as
 * network requests or database queries.
 *
 * By creating a dedicated API route that performs an actual async operation,
 * the Server Component can `await fetch("/api/sleep")` and Suspense will correctly
 * pause the stream until the response arrives.
 *
 * Why we force the Node.js runtime:
 * ---------------------------------
 * The Edge runtime does not reliably honour `setTimeout` or other artificial
 * delays. For a predictable 3‑second wait, we explicitly opt into the Node.js
 * runtime so the delay behaves consistently both locally and on Vercel.
 *
 * Result:
 * -------
 * - The page shell streams immediately.
 * - The slow component resolves after 3 seconds.
 * - Suspense boundaries behave exactly as intended in production.
 */

export const runtime = "nodejs";

export async function GET() {
  await new Promise(res => setTimeout(res, 3000));
  return Response.json({ ok: true });
}
