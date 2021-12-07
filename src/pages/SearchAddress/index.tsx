import { useState, useEffect } from "react";
import * as S from "./styles";
import axios from "axios";
import LoadingSpinner from "../../components/LoadingSpinner";
import SearchNewAddress from "../../modules/SearchNewAddress";
import SearchAddressResult from "../../modules/SearchAddressResult";

export interface ICEPData {
  cep: number;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade: string;
  uf: string;
  ibge: number;
  gia: number;
  ddd: number;
  siafi: number;
  erro?: boolean;
}

interface ICEPResponse {
  data: ICEPData;
  status: number;
}

const SearchAddress = () => {
  const [showModule, setShowModule] = useState("SearchNewAddress");
  const [cep, setCep] = useState("");
  const [data, setData] = useState({} as ICEPData);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const axios = require("axios");

  const handleError = () => {
    setErrorMessage("CEP não encontrado, tente novamente!");
    setShowModule("SearchNewAddress");
  };

  const makeCEPRequest = async () => {
    setLoading(true);
    await axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response: ICEPResponse) => {
        setData(response.data);
        response.data.erro === true && handleError();

        setLoading(false);
      });
  };

  useEffect(() => {
    cep !== "" && makeCEPRequest();
  }, [cep]);

  return (
    <>
      {loading && (
        <S.LoadingScreen>
          <LoadingSpinner />
        </S.LoadingScreen>
      )}

      {showModule === "SearchNewAddress" && !loading && (
        <SearchNewAddress
          setShowModule={setShowModule}
          setCep={setCep}
          errorMessage={errorMessage}
        />
      )}

      {showModule === "SearchAddressResult" && !loading && (
        <SearchAddressResult
          setShowModule={setShowModule}
          data={data}
          setErrorMessage={setErrorMessage}
          cep={cep}
        />
      )}
    </>
  );
};

export default SearchAddress;
