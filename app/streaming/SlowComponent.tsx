// A deliberately slow server component to demonstrate streaming.
// It waits 3 seconds before rendering.

import { headers } from "next/headers";

export default async function SlowComponent() {
  const h = headers();
  const host = h.get("host");
  const protocol = h.get("x-forwarded-proto") || "https";

  const url = `${protocol}://${host}/api/sleep`;

  await fetch(url, { cache: "no-store" });

  return <p>Loaded after 3 seconds</p>;
}
