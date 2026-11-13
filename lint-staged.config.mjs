/** @type {import("lint-staged").Configuration} */
const config = {
  "*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}": ["eslint --fix", "prettier --write"],
  "*.{json,md,yml,yaml,css}": "prettier --write",
};

export default config;
