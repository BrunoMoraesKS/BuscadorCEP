import { useState } from "react";
import * as S from "./styles";

import SearchNewCEP from "../../modules/SearchNewCEP";
import SearchCEPResult from "../../modules/SearchCEPResult";

const SearchCEP = () => {
  const [showModule, setShowModule] = useState("SearchNewCEP");
  const [cep, setCep] = useState("");
  return (
    <>
      {showModule === "SearchNewCEP" && (
        <SearchNewCEP
          showModule={showModule}
          setShowModule={setShowModule}
          cep={cep}
          setCep={setCep}
        />
      )}
      {showModule === "SearchCEPResult" && (
        <SearchCEPResult
          showModule={showModule}
          setShowModule={setShowModule}
          cep={cep}
          setCep={setCep}
        />
      )}
    </>
  );
};

export default SearchCEP;
