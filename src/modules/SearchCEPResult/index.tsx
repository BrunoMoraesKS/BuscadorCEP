import React, { useEffect } from "react";
import * as S from "./styles";
import SeparatorLine from "../../components/SeparatorLine";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";

interface ISearchCEPResultsProps {
  showModule: "SearchNewCEP" | "SearchCEPResult";
  setShowModule: (showModule: "SearchNewCEP" | "SearchCEPResult") => void;
  cep: string;
  setCep: (cep: string) => void;
}

const SearchCEPResult = ({
  showModule,
  setShowModule,
  cep,
  setCep,
}: ISearchCEPResultsProps) => {
  const history = useHistory();

  useEffect(() => {
    console.log(cep);
  }, []);

  return (
    <S.Container>
      <SeparatorLine />

      <S.ButtonsContainer>
        <Button
          onClick={() => {
            history.push("/");
          }}
          variant="secondary"
        >
          Voltar
        </Button>
        <Button onClick={() => {}} variant="primary">
          Buscar
        </Button>
      </S.ButtonsContainer>
      <SeparatorLine />
    </S.Container>
  );
};

export default SearchCEPResult;
