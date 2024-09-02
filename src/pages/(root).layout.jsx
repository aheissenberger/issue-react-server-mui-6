import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

export default function Layout({ children }) {
  return (
    <html>
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <h1>Layout</h1>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
