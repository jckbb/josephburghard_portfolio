import { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import clsx from "clsx";
import stylesheet from "~/tailwind.css?url";
import {
  NonFlashOfWrongThemeEls,
  ThemeProvider,
  useTheme,
} from "./utils/themeProvider";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

const App = () => {
  const [theme] = useTheme();
  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <NonFlashOfWrongThemeEls />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

const AppWithProviders = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default AppWithProviders;
