import React from "react";
import { useHistory } from "react-router-dom";
import * as S from "./styles";
import SeparatorLine from "../../components/SeparatorLine";
import Title from "../../components/Title";
import Button from "../../components/Button";

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
            history.push("searchAddress");
          }}
        >
          Buscar Endereço
        </Button>

        <Button
          variant="primary"
          onClick={() => {
            history.push("searchCep");
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
