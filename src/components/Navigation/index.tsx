import React from "react";
import { Link } from "react-router-dom";
import Title from "../Title";
import * as S from "./styles";

const Navigation = () => {
  return (
    <S.Container>
      <Link to="searchAddress">
        <Title size={1.2} content="Buscar Endereço" variant="h3" />
      </Link>
      <Link to="searchCep">
        <Title size={1.2} content="Buscar CEP" variant="h3" />
      </Link>
    </S.Container>
  );
};

export default Navigation;
