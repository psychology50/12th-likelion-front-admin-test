import { CssBaseline } from "@mui/material";
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './store';
import Header from "./Comp/Header";
import Main from "./Main";
import theme from "./theme";


function App() {
  return (
    <Provider store={store}>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <Header></Header>
          <Main></Main>
        </ThemeProvider>
      </CssBaseline>
    </Provider>
  );
}

export default App;
