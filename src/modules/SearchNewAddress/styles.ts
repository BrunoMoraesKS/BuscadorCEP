import styled from "styled-components";
import { Colors } from "../../global/GlobalStyles";

export const Container = styled.div``;

export const Form = styled.form``;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
  width: 100%;
  max-width: 325px;

  margin-top: 48px;
`;

export const Error = styled.span`
  color: ${Colors.tertiary};
`;
