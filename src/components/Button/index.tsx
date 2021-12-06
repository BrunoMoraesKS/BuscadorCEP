import React from "react";
import * as S from "./styles";

interface IButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant: "primary" | "secondary";
}

const Button = ({ onClick, children, variant }: IButtonProps) => {
  return (
    <S.Button variant={variant} onClick={onClick}>
      {children}
    </S.Button>
  );
};

export default Button;
