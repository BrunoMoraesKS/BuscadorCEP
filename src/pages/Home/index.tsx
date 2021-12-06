import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import SeparatorLine from "../../components/SeparatorLine";
import Title from "../../components/Title";
import Button from "../../components/Button";

const Home = () => {
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
        <Link to="searchAddress">
          <Button variant="primary" onClick={() => {}}>
            Buscar Endereço
          </Button>
        </Link>

        <Link to="searchCep">
          <Button variant="primary" onClick={() => {}}>
            Buscar Cep
          </Button>
        </Link>
      </S.ButtonsContainer>

      <SeparatorLine />
    </S.Container>
  );
};

export default Home;
