import React from "react";
import Navigation from "../Navigation";
import Title from "../Title";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Container>
      <Title size={1.1} content="BuscadorCEP!" />
      <Navigation />
    </S.Container>
  );
};

export default Header;
