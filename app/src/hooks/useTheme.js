import { useState } from "react";
import { DefaultTheme } from "../themes/DefaultTheme";

export const useTheme = () => {
    const [theme, setTheme] = useState(DefaultTheme);

    return { theme, setTheme };
}