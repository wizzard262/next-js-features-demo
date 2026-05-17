// app/image-optimization/page.tsx

import Image from "next/image";

export const metadata = { title: "Image Optimization" };

/**
 * This page demonstrates Next.js Image Optimization.
 *
 * The <Image> component automatically:
 * - Generates multiple responsive sizes
 * - Serves modern formats like WebP when supported
 * - Lazy-loads images outside the viewport
 * - Optimizes and caches images on demand
 *
 * This makes images load faster and reduces bandwidth usage
 * without requiring any manual processing.
 */
export default function ImageOptimizationPage() {
    return (
        <div className="prose prose-gray max-w-none">
            <h1 className="text-2xl font-bold">Image Optimization</h1>
            <p className="mt-4">
                This page demonstrates the built‑in <strong>Image Optimization </strong> provided by Next.js. <br/>
                The image below is automatically resized, compressed, lazy‑loaded,<br/>
                and served in the most efficient format for the user’s device.
            </p>
            <div className="mt-6">
                <Image
                    src="https://images.unsplash.com/photo-1503264116251-35a269479413"
                    alt="Example optimized image"
                    width={800}
                    height={500}
                    className="rounded shadow"
                />
            </div>
            <p className="mt-4">
                Try inspecting the network tab — you’ll see that the image is served
                in an optimized format and size depending on your screen.
            </p>
        </div>
    );
}
