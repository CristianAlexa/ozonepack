export const capitalise = (string) =>
  string
    .split("")
    .map((letter) => letter.toUpperCase())
    .join("");
