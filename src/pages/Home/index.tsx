import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import SeparatorLine from "../../components/SeparatorLine";
import Title from "../../components/Title";
import * as S from "./styles";

const Home = () => {
  const history = useHistory();
  return (
    <S.Container>
      <SeparatorLine />

      <Title size={2.1} variant="h2" content="Bem vindo ao BuscadorCEP!" />

      <S.WelcomeText>
        O aplicativo BuscadorCEP! permite que você encontre códigos de
        endereçamento postais (CEP).
        <br />
        Se você já tiver o CEP em mãos e gostaria de buscar seu endereço, o
        BuscadorCEP! também vai te ajudar.
        <br />
        Aproveite! =D
      </S.WelcomeText>

      <S.ButtonsContainer>
        <Button
          variant="primary"
          onClick={() => {
            history.push("buscarEndereco");
          }}
        >
          Buscar Endereço
        </Button>

        <Button
          variant="primary"
          onClick={() => {
            history.push("buscarCep");
          }}
        >
          Buscar Cep
        </Button>
      </S.ButtonsContainer>

      <SeparatorLine />
    </S.Container>
  );
};

export default Home;
