import React, { useEffect } from "react";
import * as S from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import SeparatorLine from "../../components/SeparatorLine";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { AnyObject } from "yup/lib/object";

interface ISearchNewCEPProps {
  showModule: "SearchNewCEP" | "SearchCEPResult";
  setShowModule: (showModule: "SearchNewCEP" | "SearchCEPResult") => void;
  cep: string;
  setCep: (cep: string) => void;
}

const schema = yup.object().shape({
  cep: yup
    .string()
    .min(8, "Digite os 8 dígitos.")
    .max(8, "Digite apenas 8 dígitos.")
    .required("Digite o CEP."),
});

const cepPattern = "99999-999";

const SearchNewCEP = ({
  showModule,
  setShowModule,
  cep,
  setCep,
}: ISearchNewCEPProps) => {
  const history = useHistory();
  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: AnyObject) => {
    setCep(getValues("cep"));

    setShowModule("SearchCEPResult");
  };

  return (
    <S.Container>
      <SeparatorLine />
      <S.Form>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              id="cep"
              placeholder="Digite seu CEP..."
              label="CEP"
              required={true}
              name="cep"
              onChange={onChange}
              type="number"
            />
          )}
          name="cep"
          defaultValue=""
        />

        <S.Error>{errors.cep?.message ?? ""}</S.Error>

        <S.ButtonsContainer>
          <Button
            onClick={() => {
              history.push("/");
            }}
            variant="secondary"
          >
            Voltar
          </Button>
          <Button onClick={handleSubmit(onSubmit)} variant="primary">
            Buscar
          </Button>
        </S.ButtonsContainer>
      </S.Form>
      <SeparatorLine />
    </S.Container>
  );
};

export default SearchNewCEP;
