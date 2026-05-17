// A deliberately slow server component to demonstrate streaming.
// It waits 3 seconds before rendering.

export default async function SlowComponent() {
  await new Promise((r) => setTimeout(r, 3000)); // 3-second delay
  return <p>Loaded after 3 seconds</p>;
}
