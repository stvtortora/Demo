import { DefaultTheme } from "./DefaultTheme";

const addField = (fieldKeyArray, value, theme) => {
  const currentKey = fieldKeyArray[0];

  if (fieldKeyArray.length === 1) {
    return { [currentKey]: value };
  }

  if (!theme[currentKey]) {
    theme[currentKey] = {};
  }

  theme[currentKey] = {
    ...theme[currentKey],
    ...addField(fieldKeyArray.slice(1), value, theme[currentKey]),
  };

  return theme;
};

export default (themeFields) => {
  const generatedFields = Object.keys(themeFields).reduce(
    (result, fieldKey) =>
      addField(fieldKey.split("_"), themeFields[fieldKey], result),
    {}
  );

  generatedFields.text = {
    sizes: DefaultTheme.text.sizes,
    styles: DefaultTheme.text.styles,
    ...generatedFields.text,
  };

  generatedFields.surface.boxShadows.primary =
    "0px 2px 6px " + generatedFields.surface.boxShadows.primary;

  return generatedFields;
};
