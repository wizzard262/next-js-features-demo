// Server Action example.
// This runs on the server when a form posts to it.
// it is used by page app/server-actions/page.tsx

"use server";

export async function addItem(formData: FormData) {
  const item = formData.get("item");
  console.log("Server Action received:", item);
  return "This message comes from the server." +
          "The value received on: " + new Date().toLocaleString() + " was: '" + item + "'";

  /*
    Description:
    This function demonstrates a simple Next.js Server Action — a feature that
    allows forms and UI interactions to call server-side code directly without
    needing an API route. When the form is submitted, the browser sends the
    form data straight to this function, which runs securely on the server.
    Server Actions are ideal for database writes, form handling, mutations,
    and any logic that should never run in the browser.

    Expected Behaviour:
    - When a user submits the form, the "item" field is sent to this action.
    - The action runs on the server (never in the client bundle).
    - The submitted value is logged to the server console.
    - In a real application, this is where you would insert, update, or delete
      data in a database.

    How This Works:
    1. The form uses `action={addItem}` to bind the server action.
    2. When the form is submitted, Next.js serialises the form data.
    3. The request is sent to the server, not the client.
    4. This function receives the FormData object.
    5. The server processes the data and performs secure logic.
  */
}


