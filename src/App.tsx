import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./global/GlobalStyles";
import * as S from "./styles";

import Home from "./pages/Home";
import SearchCEP from "./pages/SearchCEP";
import SearchAddress from "./pages/SearchAddress";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
          <Route exact path="/searchAddress">
            <SearchAddress />
          </Route>
          <Route exact path="/searchCep" component={SearchCEP} />
        </Switch>
        <Footer />
      </Router>
    </S.Container>
  );
}

export default App;
