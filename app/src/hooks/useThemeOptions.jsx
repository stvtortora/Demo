import {
  getThemes,
  updateTheme,
  createTheme,
  deleteTheme,
} from "../api/theme_api";
import { useEffect, useState } from "react";
import defaultThemeValues from "../themes/defaultThemeValues";

const defaultTheme = { ...defaultThemeValues, name: "Default" };

export const useThemeOptions = () => {
  const [themeOptions, setThemeOptions] = useState([defaultTheme]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const callGetThemes = async () => {
      const { error, response } = await getThemes();

      if (!error) {
        setThemeOptions([defaultTheme].concat(response));
      }
    };

    callGetThemes();
  }, []);

  const onUpdateTheme = async (theme) => {
    const { error, response: updatedTheme } = await updateTheme(theme);
    if (error) {
      setError(true);
    } else {
      const updatedThemeOptions = themeOptions.map((theme) =>
        theme.id !== updatedTheme.id ? theme : updatedTheme
      );
      setThemeOptions(updatedThemeOptions);
    }
  };

  const onCreateTheme = async (theme) => {
    const { error, response: newTheme } = await createTheme(theme);
    if (error) {
      setError(true);
    } else {
      const updatedThemeOptions = themeOptions.concat([newTheme]);
      setThemeOptions(updatedThemeOptions);
    }
  };

  const onDeleteTheme = async (themeId) => {
    const { error } = await deleteTheme(themeId);
    if (error) {
      setError(true);
    } else {
      const updatedThemeOptions = themeOptions.filter(
        (theme) => theme.id !== themeId
      );
      setThemeOptions(updatedThemeOptions);
    }
  };

  return { error, themeOptions, onUpdateTheme, onCreateTheme, onDeleteTheme };
};
