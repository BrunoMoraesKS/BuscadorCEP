import React from "react";
import * as S from "./styles";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, required, onChange, ...props }: IInputProps) => {
  return (
    <S.Container>
      <S.Label>
        {label} {required && <S.LabelSpan>*</S.LabelSpan>}
      </S.Label>
      <S.Input onChange={onChange} {...props} />
    </S.Container>
  );
};

export default Input;
