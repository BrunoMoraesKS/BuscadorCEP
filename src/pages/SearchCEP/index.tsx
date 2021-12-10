import { useEffect, useState } from "react";
import axios from "axios";

import * as S from "./styles";
import SeparatorLine from "../../components/SeparatorLine";
import Title from "../../components/Title";
import { useHistory } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Select from "../../components/Select";
import CepCard from "../../components/CepCard";
import Breadcrumber from "../../components/Breadcrumber";
import { IStateData, ICityData, ICEPData } from "../../interfaces/SearchCEP";
import LoadingScreen from "../../components/LoadingScreen";

interface IData {
  id: number;
  nome: string;
}

const SearchCEP = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const [showResultModal, setShowResultModal] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const [cepData, setCepData] = useState<ICEPData[]>([]);

  const [selectedState, setSelectedState] = useState("");
  const [stateData, setStateData] = useState<IData[]>([]);

  const [selectedCity, setSelectedCity] = useState("");
  const [cityData, setCityData] = useState<IData[]>([]);
  const [isCityDisabled, setIsCityDisabled] = useState(true);

  const [selectedStreet, setSelectedStreet] = useState("");
  const [isStreetDisabled, setIsStreetDisabled] = useState(true);

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
      `
      https://viacep.com.br/ws/${selectedState}/${selectedCity}/${selectedStreet.replace(
        /\s+/g,
        "+"
      )}/json/
      `
    );
    const data = response.data.map((item) => {
      return item;
    });

    response.data.length > 0 ? handleSuccess(data) : handleError();

    setLoading(false);
  };

  const handleError = () => {
    setShowErrorMessage(true);
    setCepData([]);
  };
  const handleSuccess = (data: ICEPData[]) => {
    setCepData(data);
    setShowResultModal(true);
    setShowErrorMessage(false);
  };

  useEffect(() => {
    selectedCity && selectedCity !== "0"
      ? setIsStreetDisabled(false)
      : setIsStreetDisabled(true);
    setCepData([]);
  }, [selectedCity]);

  useEffect(() => {}, [selectedState]);

  return (
    <>
      {loading && <LoadingScreen />}

      <S.Container>
        <SeparatorLine />

        <Breadcrumber
          data={[
            {
              title: "Início",
              link: "/",
            },
            {
              title: "Buscar CEP",
              link: ".",
            },
          ]}
        />

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
              setSelectedStreet(e.target.value);
            }}
            disabled={isStreetDisabled}
          />

          {showErrorMessage && (
            <S.ErrorMessage>Logradouro inválido.</S.ErrorMessage>
          )}

          {cepData.length > 0 &&
            cepData.map((item) => {
              return (
                <CepCard
                  cep={item.cep}
                  street={item.logradouro}
                  complement={item.complemento}
                  neighborhood={item.bairro}
                  city={item.localidade}
                  state={item.uf}
                />
              );
            })}

          <S.ButtonsContainer>
            <Button
              type="button"
              onClick={() => {
                history.push("/");
              }}
              variant="secondary"
            >
              Voltar
            </Button>

            <Button
              onClick={(e) => {
                e.preventDefault();
                makeCEPRequest();
              }}
              variant="primary"
              disabled={isStreetDisabled}
            >
              Pesquisar
            </Button>
          </S.ButtonsContainer>
        </S.Form>
        <SeparatorLine />
      </S.Container>
    </>
  );
};

export default SearchCEP;
