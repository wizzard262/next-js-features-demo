import FormClient from "./FormClient";

export default function ServerActionsPage() {
  return (
    <div>
      <div className="prose prose-sm prose-gray max-w-none bg-gray-100 p-6 rounded-lg">
        <h1 className="text-2xl font-bold">Server Actions</h1>

        <p className="mt-4">
          This page demonstrates a <strong>Next.js Server Action</strong>, which
          allows forms and UI interactions to call server-side code directly
          without needing an API route. When the form below is submitted, the
          browser sends the data straight to the server action, which runs
          securely on the server.
        </p>

        <h2 className="mt-6 text-xl font-semibold">Expected Behaviour</h2>
        <p className="mt-2">
          When you submit the form (which has the `action` attribute set to `addItem`),
          the value you enter is sent to the server and calls the `addItem` function.
          This function runs on the server. The submitted value is logged to the server console.
          No client-side JavaScript bundle is created for
          this action, and no API route is required.
        </p>
      </div>
      <div className="prose prose-black prose-li:text-black prose-li:text-base max-w-none mt-8">
        <h3 className="mt-4 font-semibold">Try It</h3>
        <FormClient />
      </div>
    </div>
  );
}
