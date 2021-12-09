import { useState } from "react";
import * as S from "./styles";
import { useHistory } from "react-router-dom";
import SeparatorLine from "../../components/SeparatorLine";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Title from "../../components/Title";
import { useSearchAddressContext } from "../../contexts/SearchAddressContext";

interface ISearchAddressResultsProps {}

const SearchAddressResult = ({}: ISearchAddressResultsProps) => {
  const history = useHistory();
  const [logradouro, setLogradouro] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");

  const { setShowModule, data, setErrorMessage, cep } =
    useSearchAddressContext();

  return (
    <S.Container>
      <SeparatorLine />

      <S.BreadCrumb>
        <Title
          content="Início"
          size={0.75}
          variant="h4"
          onClick={() => {
            history.push("/");
          }}
          decoration="link"
        />
        <S.BreadCrumbArrow>&gt;</S.BreadCrumbArrow>

        <Title
          content="Buscar Endereço"
          size={0.75}
          variant="h4"
          decoration="link"
          onClick={() => {
            setShowModule("SearchNewAddress");
            setErrorMessage("");
          }}
        />

        <S.BreadCrumbArrow>&gt;</S.BreadCrumbArrow>

        <S.BreadCrumbResult>Resultado - CEP {cep}</S.BreadCrumbResult>
      </S.BreadCrumb>

      <S.Form>
        <Input
          label="Logradouro"
          onChange={(e) => {
            setLogradouro(e.target.value);
          }}
          id="logradouro"
          name="logradouro"
          value={data.logradouro ? data.logradouro : logradouro}
          disabled={data.logradouro ? true : false}
        />

        <Input
          label="Município / UF"
          onChange={(e) => {
            setMunicipio(e.target.value);
          }}
          id="municipio"
          name="municipio"
          value={
            data.localidade ? `${data.localidade} - ${data.uf}` : municipio
          }
          disabled={data.localidade ? true : false}
        />

        <Input
          label="Bairro"
          onChange={(e) => {
            setBairro(e.target.value);
          }}
          id="bairro"
          name="bairro"
          value={data.bairro ? data.bairro : bairro}
          disabled={data.bairro ? true : false}
        />

        <Input
          label="Número"
          onChange={(e) => {
            setNumero(e.target.value);
          }}
          id="numero"
          name="numero"
          value={numero}
        />

        <Input
          label="Cep"
          onChange={() => {}}
          id="cep"
          name="cep"
          value={cep}
          disabled={true}
        />
      </S.Form>

      <S.ButtonsContainer>
        <Button
          onClick={() => {
            setShowModule("SearchNewAddress");
            setErrorMessage("");
          }}
          variant="secondary"
        >
          Nova Busca
        </Button>
        <Button onClick={() => window.print()} variant="primary">
          Imprimir
        </Button>
      </S.ButtonsContainer>
      <SeparatorLine />
    </S.Container>
  );
};

export default SearchAddressResult;
