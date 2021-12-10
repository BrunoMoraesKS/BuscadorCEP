import styled from "styled-components";
import { Colors } from "../../global/GlobalStyles";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 0.3rem;

  margin-bottom: 24px;
`;

export const BreadCrumberActual = styled.h4`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${Colors.paragraph};
`;

export const BreadCrumberArrow = styled.span`
  font-size: 0.65rem;
`;
