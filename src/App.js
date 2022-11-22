import "./App.css";
import { GlobalStyles } from "./styles/global";
import { ThemeProvider } from "styled-components";
// import Routes from "./pages/Routes";
import HomePage from "./pages/HomePage";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <GlobalStyles />
      <div className="App">
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
