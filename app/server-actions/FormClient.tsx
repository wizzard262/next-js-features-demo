"use client";

import { useState } from "react";
import { addItem } from "./addItem";

export default function FormClient() {
  const [value, setValue] = useState<string | null>(null);

  /* This function will be called when the form is submitted.
     It receives the form data as a FormData object
     which we can pass to the server action. */
  async function handleSubmit(formData: FormData) {
    const result = await addItem(formData);
    setValue(result);
  }

  return (
    <div>
      <form action={handleSubmit} className="flex gap-2 mt-4">
        <input name="item" className="border p-2 rounded" />
        <button className="p-2 bg-blue-500 text-white rounded">Submit</button>
      </form>

      {value && (
        <p className="mt-4 text-green-600">
          Server returned: <br /><strong>{value}</strong>
        </p>
      )}
    </div>
  );
}
