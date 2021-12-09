import React from "react";
import * as S from "./styles";

interface IData {
  id: number;
  nome: string;
  sigla?: string;
}

interface ISelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  required?: boolean;
  data: IData[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({
  label,
  required,
  onChange,
  data,
  ...props
}: ISelectProps) => {
  return (
    <S.Container>
      <S.Label>
        {label} {required && <S.LabelSpan>*</S.LabelSpan>}
      </S.Label>
      <S.SelectContainer>
        <S.Select onChange={onChange} {...props}>
          <S.Option selected value="0">
            Selecione...
          </S.Option>
          {data.map((item: IData) => (
            <S.Option key={item.id} value={item.sigla ? item.sigla : item.nome}>
              {item.nome}
            </S.Option>
          ))}
        </S.Select>
        <S.ArrowContainer>
          <S.Arrow />
        </S.ArrowContainer>
      </S.SelectContainer>
    </S.Container>
  );
};

export default Select;
