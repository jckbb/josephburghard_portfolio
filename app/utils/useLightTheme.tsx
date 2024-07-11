import { useEffect, useState } from "react";
import { Theme, useTheme } from "./themeProvider";

export const useLightTheme = () => {
  const [isLight, setLight] = useState(true);
  const [theme] = useTheme();

  useEffect(() => {
    setLight(theme === Theme.LIGHT);
  }, [theme]);

  return isLight;
};
