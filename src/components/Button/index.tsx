import React from "react";
import * as S from "./styles";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: (e?: any) => void;
  children: React.ReactNode;
  variant: "primary" | "secondary";
}

const Button = ({ onClick, children, variant, ...rest }: IButtonProps) => {
  return (
    <S.Button variant={variant} onClick={onClick} {...rest}>
      {children}
    </S.Button>
  );
};

export default Button;
