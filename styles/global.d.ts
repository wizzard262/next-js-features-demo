/* TypeScript doesn't understand CSS files by default.
   This declaration tells TS that importing *.css files is valid,
   preventing "Cannot find module" errors for side‑effect CSS imports. */
declare module "*.css";