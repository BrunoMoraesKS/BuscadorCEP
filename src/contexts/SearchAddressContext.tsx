import React, { ReactNode, useContext, useState } from "react";
import { ICEPData } from "../interfaces/SearchAddress";

type SearchAddressContextProps = {
  showModule: string;
  setShowModule: (showModule: string) => void;

  cep: string;
  setCep: (cep: string) => void;

  data: ICEPData;
  setData: (data: ICEPData) => void;

  errorMessage: string;
  setErrorMessage: (errorMessage: string) => void;
};

const SearchAddressContext = React.createContext<SearchAddressContextProps>(
  {} as SearchAddressContextProps
);

export const useSearchAddressContext = (): SearchAddressContextProps =>
  useContext(SearchAddressContext);

const SearchAddressContextProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [showModule, setShowModule] = useState("SearchNewAddress");
  const [cep, setCep] = useState("");
  const [data, setData] = useState({} as ICEPData);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <SearchAddressContext.Provider
      value={{
        showModule,
        setShowModule,
        cep,
        setCep,
        data,
        setData,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </SearchAddressContext.Provider>
  );
};

export default SearchAddressContextProvider;
