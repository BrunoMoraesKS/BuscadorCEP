import { useEffect, useState } from "react";
import axios from "axios";

import * as S from "./styles";
import SeparatorLine from "../../components/SeparatorLine";
import Title from "../../components/Title";
import { useHistory } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Select from "../../components/Select";
import { IStateData, ICityData, ICEPData } from "../../interfaces/SearchCEP";
import { ICEPResponse } from "../../interfaces/SearchAddress";

interface IData {
  id: number;
  nome: string;
}

const SearchCEP = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [stateData, setStateData] = useState<IData[]>([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [cityData, setCityData] = useState<IData[]>([]);
  const [logradouro, setLogradouro] = useState("");
  const [cepData, setCepData] = useState({} as ICEPData);
  const [showResultModal, setShowResultModal] = useState(false);
  const [isCityDisabled, setIsCityDisabled] = useState(true);
  const [isStreetDisabled, setIsStreetDisabled] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    const makeStateRequest = async () => {
      setLoading(true);
      const response = await axios.get<IStateData[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`
      );
      const data = response.data.map(({ id, nome, sigla }) => {
        return { id, nome, sigla };
      });
      setStateData(data);
      setLoading(false);
    };

    makeStateRequest();
  }, []);

  useEffect(() => {
    const makeCityRequest = async () => {
      setLoading(true);
      const response = await axios.get<ICityData[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedState}/distritos?orderBy=nome
        `
      );
      const data = response.data.map(({ id, nome }) => {
        return { id, nome };
      });
      setCityData(data);
      setLoading(false);
    };

    makeCityRequest();

    selectedState && selectedState !== "0"
      ? setIsCityDisabled(false)
      : setIsCityDisabled(true);
  }, [selectedState]);

  const makeCEPRequest = async () => {
    setLoading(true);
    const response = await axios.get<ICEPData[]>(
      `https:viacep.com.br/ws/${selectedState}/${selectedCity}/${logradouro}/json/
        `
    );
    const data = response.data.map((item) => {
      return item;
    });
    response.data.length > 0 ? handleSuccess(data[0]) : handleErrorMessage();

    setLoading(false);
  };

  const handleErrorMessage = () => {
    setShowErrorMessage(true);
  };
  const handleSuccess = (data: ICEPData) => {
    setCepData(data);
    setShowResultModal(true);
    setShowErrorMessage(false);
  };

  useEffect(() => {
    selectedCity && selectedCity !== "0"
      ? setIsStreetDisabled(false)
      : setIsStreetDisabled(true);
  }, [selectedCity]);

  useEffect(() => {}, [selectedState]);

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
        <S.BreadCrumbResult>Buscar CEP</S.BreadCrumbResult>
      </S.BreadCrumb>

      <S.Form>
        <Select
          data={stateData}
          label="Estado"
          onChange={(e: any) => {
            setSelectedState(e.target.value);
          }}
        />

        <Select
          data={cityData}
          label="Cidade"
          onChange={(e: any) => {
            setSelectedCity(e.target.value);
          }}
          disabled={isCityDisabled}
        />

        <Input
          label="Logradouro"
          placeholder="Digite o logradouro..."
          onChange={(e) => {
            setLogradouro(e.target.value);
          }}
          disabled={isStreetDisabled}
        />

        {showErrorMessage && (
          <S.ErrorMessage>Logradouro inválido.</S.ErrorMessage>
        )}

        <S.ButtonsContainer>
          <Button type="button" onClick={() => {}} variant="secondary">
            Voltar
          </Button>

          <Button
            onClick={(e) => {
              e.preventDefault();
              makeCEPRequest();
            }}
            variant="primary"
          >
            Pesquisar
          </Button>
        </S.ButtonsContainer>
      </S.Form>
      <SeparatorLine />

      {showResultModal && (
        <S.SearchResultModalOuterContainer>
          <S.SearchResultModal>
            <S.ModalResultTextContainer>
              <Title content="CEP:" size={1.5} />
              <S.ModalResultText>{cepData.cep}</S.ModalResultText>
            </S.ModalResultTextContainer>

            {/* <S.ModalResultTextContainer>
              <Title content="Código do logradouro:" size={1.5} />
              <S.ModalResultText>{cepData.cep}</S.ModalResultText>
            </S.ModalResultTextContainer> */}

            <S.ModalResultTextContainer>
              <Title content="Município:" size={1.5} />
              <S.ModalResultText>{cepData.localidade}</S.ModalResultText>
            </S.ModalResultTextContainer>

            {cepData.logradouro && (
              <S.ModalResultTextContainer>
                <Title content="Logradouro:" size={1.5} />
                <S.ModalResultText>{cepData.logradouro}</S.ModalResultText>
              </S.ModalResultTextContainer>
            )}

            <S.ModalButtonContainer>
              <Button
                onClick={() => {
                  setShowResultModal(false);
                }}
                variant="primary"
              >
                OK
              </Button>
            </S.ModalButtonContainer>
          </S.SearchResultModal>
        </S.SearchResultModalOuterContainer>
      )}
    </S.Container>
  );
};

export default SearchCEP;
