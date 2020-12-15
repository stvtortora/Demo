import { getCSS } from "./generalCSSUtils";

export const font = ({
  family,
  size,
  color,
  backgroundColor,
  weight,
  lowerCase,
}) => {
  return `
    ${getCSS("font-family", family)}
    ${getCSS("font-size", size)}
    ${getCSS("color", color)}
    ${getCSS("background-color", backgroundColor)}
    ${getCSS("font-weight", weight)}
    ${getCSS("text-transform", lowerCase ? "lowercase" : null)}
    `;
};
