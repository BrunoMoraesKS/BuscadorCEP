import styled, { css } from "styled-components";
import { Colors } from "../../global/GlobalStyles";

export const Container = styled.div``;

export const LoadingScreen = styled.div`
  display: flex;

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;

  background-color: ${Colors.background};

  z-index: 9999;
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

export const ErrorMessage = styled.span`
  color: ${Colors.tertiary};
  font-size: 1rem;
  font-weight: 500;
`;
