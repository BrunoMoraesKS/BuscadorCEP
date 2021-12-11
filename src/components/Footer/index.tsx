import React from "react";
import * as S from "./styles";

const Footer = () => {
  return (
    <S.Container>
      <S.Span> {new Date().getFullYear()} - BuscadorCEP!</S.Span>
    </S.Container>
  );
};

export default Footer;
