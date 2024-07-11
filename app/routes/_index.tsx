import type { MetaFunction } from "@remix-run/node";
import { Theme, useTheme } from "~/utils/themeProvider";
import { useLightTheme } from "~/utils/useLightTheme";

export const meta: MetaFunction = () => {
  return [
    { title: "Joseph Burghard Portfolio" },
    { name: "description", content: "Welcome to My Portfolio!" },
  ];
};

export default function Index() {
  const [, setTheme] = useTheme();
  const isLight = useLightTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  };

  return (
    <main className="bg-white transition-colors duration-300 ease-in-out dark:bg-black h-screen w-screen grid grid-cols-1 grid-flow-row md:grid-cols-7 md:grid-rows-3">
      <h1 className="dark:text-white text-[1rem]">TEST DARK MODE</h1>
      <button className="dark:text-white" onClick={toggleTheme}>
        <span>{isLight ? "light" : "dark"}</span>
      </button>
    </main>
  );
}
