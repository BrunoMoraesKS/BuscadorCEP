import * as S from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import SeparatorLine from "../../components/SeparatorLine";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { AnyObject } from "yup/lib/object";
import { useSearchAddressContext } from "../../contexts/SearchAddressContext";
import Breadcrumber from "../../components/Breadcrumber";

const schema = yup.object().shape({
  cep: yup
    .string()
    .min(8, "Digite os 8 dígitos.")
    .max(8, "Digite apenas 8 dígitos.")
    .required("Digite o CEP."),
});

const SearchNewAddress = () => {
  const history = useHistory();

  const { setShowModule, setCep, errorMessage } = useSearchAddressContext();

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

    setShowModule("SearchAddressResult");
  };

  return (
    <S.Container>
      <SeparatorLine />

      <Breadcrumber
        data={[
          {
            title: "Início",
            link: "/",
          },
          {
            title: "Buscar Endereço",
            link: ".",
          },
        ]}
      />

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
              data-testid="cepInput"
            />
          )}
          name="cep"
          defaultValue=""
        />

        <S.Error>
          {errors.cep?.message ? errors.cep?.message : errorMessage}
        </S.Error>

        <S.ButtonsContainer>
          <Button
            onClick={() => {
              history.push("/");
            }}
            variant="secondary"
            type="button"
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

export default SearchNewAddress;
