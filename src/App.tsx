import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchAddressContextProvider from "./contexts/SearchAddressContext";
import { GlobalStyle } from "./global/GlobalStyles";
import Home from "./pages/Home";
import SearchAddress from "./pages/SearchAddress";
import SearchCEP from "./pages/SearchCEP";
import * as S from "./styles";

function App() {
  return (
    <S.Container>
      <GlobalStyle />

      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/buscarEndereco">
            <SearchAddressContextProvider>
              <SearchAddress />
            </SearchAddressContextProvider>
          </Route>

          <Route exact path="/buscarCep">
            <SearchCEP />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </S.Container>
  );
}

export default App;
