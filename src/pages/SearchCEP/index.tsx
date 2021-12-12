import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Breadcrumber from "../../components/Breadcrumber";
import Button from "../../components/Button";
import CepCard from "../../components/CepCard";
import Input from "../../components/Input";
import LoadingScreen from "../../components/LoadingScreen";
import Select from "../../components/Select";
import SeparatorLine from "../../components/SeparatorLine";
import { ICEPData, ICityData, IStateData } from "../../interfaces/SearchCEP";
import * as S from "./styles";

interface IData {
  id: number;
  nome: string;
}

const SearchCEP = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(true);
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

    setCepData([]);

    selectedState && selectedState !== "0"
      ? setIsCityDisabled(false)
      : setIsCityDisabled(true);
  }, [selectedState]);

  const makeCEPRequest = async () => {
    setLoading(true);

    try {
      const response = await axios.get<ICEPData[]>(
        `
      https://viacep.com.br/ws/${selectedState}/${selectedCity}/${selectedStreet.replace(
          /\s+/g,
          "+"
        )}/json/
      `
      );

      let data = response.data.map((item) => {
        return item;
      });

      response.data.length > 0 ? handleSuccess(data) : handleError();

      setLoading(false);
    } catch (err) {
      handleError();
    }
  };

  const handleError = () => {
    setShowErrorMessage(true);
    setLoading(false);
    setCepData([]);
  };
  const handleSuccess = (data: ICEPData[]) => {
    setCepData(data);
    setShowErrorMessage(false);
  };

  useEffect(() => {
    selectedCity && selectedCity !== "0"
      ? setIsStreetDisabled(false)
      : setIsStreetDisabled(true);
    setCepData([]);
  }, [selectedCity]);

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
            name="state"
            placeholder="Selecione o estado..."
            onChange={(e: any) => {
              setSelectedState(e.target.value);
            }}
            data-testid="stateInput"
          />

          <Select
            data={cityData}
            label="Cidade"
            name="city"
            placeholder="Selecione a cidade..."
            onChange={(e: any) => {
              setSelectedCity(e.target.value);
            }}
            disabled={isCityDisabled}
            data-testid="cityInput"
          />

          <Input
            label="Logradouro"
            placeholder="Digite o logradouro..."
            name="street"
            onChange={(e) => {
              setSelectedStreet(e.target.value);
            }}
            disabled={isStreetDisabled}
            data-testid="streetInput"
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
              data-testid="goBackButton"
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
              data-testid="searchButton"
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
