import styled from "styled-components";
import { Colors } from "../../global/GlobalStyles";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 16px;

  max-width: 325px;

  border: 1px solid ${Colors.stroke};
  border-radius: 4px;

  cursor: pointer;

  &:hover {
    border-color: ${Colors.highlight};
    box-shadow: 0 0 2px ${Colors.highlight};
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 16px;

  width: 30%;
  height: 100%;
`;
export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 16px;

  width: 70%;
  height: 100%;
`;

export const Title = styled.h4`
  height: 100%;
`;

export const Result = styled.span`
  height: 100%;

  font-size: 0.8rem;
`;

export const ModalTextContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-evenly;

  width: 100%;
`;

export const ModalCopyButtonContainer = styled.div`
  width: 40%;

  display: flex;

  justify-content: flex-end;
`;

export const ButtonContainer = styled.div`
  display: flex;

  align-self: flex-end;
  justify-content: flex-end;
  gap: 8px;
  width: 75%;

  margin-top: 48px;
`;
