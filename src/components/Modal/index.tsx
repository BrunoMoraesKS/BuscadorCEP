import React from "react";
import * as S from "./styles";

interface IModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: IModalProps) => {
  return (
    <S.OuterContainer>
      <S.InnerContainer>
        <S.ChildrenContainer>{children}</S.ChildrenContainer>
      </S.InnerContainer>
    </S.OuterContainer>
  );
};

export default Modal;
