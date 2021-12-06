import styled from "styled-components";
import { Colors } from "../../global/GlobalStyles";

export const Container = styled.div``;

export const Form = styled.form``;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 16px;

  margin-top: 32px;
`;

export const Error = styled.span`
  color: ${Colors.tertiary};
`;
