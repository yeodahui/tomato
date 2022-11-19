import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <GlobalStyles />
      <div className="App"></div>
    </ThemeProvider>
  );
}

export default App;
