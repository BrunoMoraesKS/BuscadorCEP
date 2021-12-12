import axios from "axios";
import { useEffect, useState } from "react";
import LoadingScreen from "../../components/LoadingScreen";
import { useSearchAddressContext } from "../../contexts/SearchAddressContext";
import { ICEPResponse } from "../../interfaces/SearchAddress";
import SearchAddressResult from "../../modules/SearchAddressResult";
import SearchNewAddress from "../../modules/SearchNewAddress";

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
