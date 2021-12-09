import styled from "styled-components";
import { Colors } from "../../global/GlobalStyles";

export const Container = styled.div``;

export const BreadCrumb = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 0.3rem;

  margin-bottom: 24px;
`;

export const BreadCrumbResult = styled.h4`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${Colors.paragraph};
`;

export const BreadCrumbArrow = styled.span`
  font-size: 0.65rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  flex-wrap: wrap;

  width: 100%;
  max-width: 325px;

  margin-top: 40px;
`;

export const Form = styled.form`
  display: flex;

  flex-direction: column;

  gap: 20px;
`;

export const SearchResultModalOuterContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${Colors.background}99;
`;

export const SearchResultModal = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;
  max-width: 550px;

  padding: 16px 32px;

  background-color: ${Colors.background};
  border: 1px solid ${Colors.stroke};
`;

export const ModalResultText = styled.span`
  font-size: 1.5rem;

  position: relative;

  bottom: 2px;
`;

export const ModalResultTextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: flex-start;

  gap: 0 16px;
  margin: 16px 0;
`;

export const ModalButtonContainer = styled.div`
  display: flex;

  align-self: flex-end;
  justify-content: flex-end;
  width: 80%;

  margin-top: 48px;
`;

export const ErrorMessage = styled.span`
  color: ${Colors.tertiary};
  font-size: 1rem;
  font-weight: 500;
`;
