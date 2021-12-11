import React from "react";
import { useHistory } from "react-router-dom";
import Title from "../Title";
import * as S from "./styles";

const Navigation = () => {
  const history = useHistory();
  return (
    <S.Container data-testid="navigation">
      <Title
        size={1.2}
        content="Buscar Endereço"
        variant="h3"
        onClick={() => {
          history.push("/buscarEndereco");
        }}
        decoration="link"
      />

      <Title
        size={1.2}
        content="Buscar CEP"
        variant="h3"
        onClick={() => {
          history.push("/buscarCep");
        }}
        decoration="link"
      />
    </S.Container>
  );
};

export default Navigation;
