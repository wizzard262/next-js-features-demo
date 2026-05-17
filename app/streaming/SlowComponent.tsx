// A deliberately slow server component to demonstrate streaming.
// It waits 3 seconds before rendering.

export default async function SlowComponent() {
  
  // Simulate a slow operation (e.g., data fetching, heavy computation)
  // but in production this is not honoured, we need to use a real async operation like a fetch or database query
  // await new Promise((r) => setTimeout(r, 3000)); // 3-second delay
  await fetch("/api/sleep");
  return <p>Loaded after 3 seconds</p>;
}
