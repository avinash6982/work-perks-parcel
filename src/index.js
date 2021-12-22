import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material";

const THEME = createTheme({
  typography: {
    fontFamily: `'Ubuntu', sans-serif`,
  },
});

const Root = () => (
  <BrowserRouter>
    <ThemeProvider theme={THEME}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById("root"));
