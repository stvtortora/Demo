export const getCSS = (property, value) => {
  return value ? `${property}: ${value};` : "";
};

export const sanitizeNumericVals = (vals, unit = "px") => {
  if (vals) {
    return Object.keys(vals).reduce((sanitized, key) => {
      const val = vals[key];
      let sanitizedVal = val;
      if (typeof val === "number") {
        sanitizedVal = `${val}${unit}`;
      }
      if (typeof sanitizedVal === "string") {
        sanitized[key] = sanitizedVal;
      }
      return sanitized;
    }, {});
  }

  return {};
};

export const centerMixin = `
      display: flex;
      justify-content: center;
      align-items: center;
  `;
