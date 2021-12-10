import React from "react";
import * as S from "./styles";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: (e?: any) => void;
  children: React.ReactNode;
  variant: "primary" | "secondary";
  disabled?: boolean;
}

const Button = ({
  onClick,
  children,
  variant,
  disabled,
  ...rest
}: IButtonProps) => {
  return (
    <S.Button variant={variant} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </S.Button>
  );
};

export default Button;
