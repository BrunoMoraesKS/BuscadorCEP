import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Modal from "../Modal";
import Button from "../Button";
import Title from "../Title";

interface ICepCardProps {
  neighborhood: string;
  cep: number;
  complement: string;
  city: string;
  street: string;
  state: string;
}

const CepCard = ({
  neighborhood,
  cep,
  complement,
  city,
  street,
  state,
}: ICepCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copyButtonText, setCopyButtonText] = useState("Copiar");

  const copyHandler = () => {
    navigator.clipboard.writeText(cep.toString());

    setCopyButtonText("Copiado!");
  };

  useEffect(() => {
    if (isModalOpen === false) {
      setCopyButtonText("Copiar");
    }
  }, [isModalOpen]);

  return (
    <>
      <S.Container
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <S.LeftColumn>
          <S.Title>CEP: </S.Title>

          <S.Title>Localidade: </S.Title>

          {neighborhood && <S.Title>Bairro: </S.Title>}

          {street && <S.Title>Logradouro: </S.Title>}
        </S.LeftColumn>

        <S.RightColumn>
          <S.Result> {cep}</S.Result>

          <S.Result>
            {city} - {state}
          </S.Result>

          {neighborhood && <S.Result>{neighborhood}</S.Result>}

          {street && (
            <S.Result>
              {street} - {complement}
            </S.Result>
          )}
        </S.RightColumn>
      </S.Container>

      {isModalOpen && (
        <Modal>
          <S.ModalTextContainer>
            <Title content="CEP:" variant="h3" size={2.1} />
            <Title content={cep.toString()} variant="h4" size={2} />
          </S.ModalTextContainer>

          <S.ButtonContainer>
            <Button
              type="button"
              onClick={() => {
                copyHandler();
              }}
              variant="primary"
            >
              {copyButtonText}
            </Button>
            <Button onClick={() => setIsModalOpen(false)} variant="secondary">
              Fechar
            </Button>
          </S.ButtonContainer>
        </Modal>
      )}
    </>
  );
};

export default CepCard;
