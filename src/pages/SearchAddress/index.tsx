import { useState, useEffect } from "react";
import * as S from "./styles";
import axios from "axios";

import LoadingScreen from "../../components/LoadingScreen";
import SearchNewAddress from "../../modules/SearchNewAddress";
import SearchAddressResult from "../../modules/SearchAddressResult";

import { ICEPResponse } from "../../interfaces/SearchAddress";

import { useSearchAddressContext } from "../../contexts/SearchAddressContext";

const SearchAddress = () => {
  const [loading, setLoading] = useState(false);

  const { showModule, setShowModule, cep, setData, setErrorMessage } =
    useSearchAddressContext();

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
      {loading && <LoadingScreen />}

      {showModule === "SearchNewAddress" && !loading && <SearchNewAddress />}

      {showModule === "SearchAddressResult" && !loading && (
        <SearchAddressResult />
      )}
    </>
  );
};

export default SearchAddress;
