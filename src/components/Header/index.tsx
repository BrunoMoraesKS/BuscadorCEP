import React from "react";
import * as S from "./styles";
import Navigation from "../Navigation";
import Title from "../Title";

const Header = () => {
  return (
    <S.Container data-testid="headerContainer">
      <Title size={1.1} content="BuscadorCEP!" />
      <Navigation />
    </S.Container>
  );
};

export default Header;
