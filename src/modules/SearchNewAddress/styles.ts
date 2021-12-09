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
