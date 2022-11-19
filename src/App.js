import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import theme from "./styles/theme";
import Routes from "./pages/Routes";

function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <GlobalStyles />
      <div className="App">
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
