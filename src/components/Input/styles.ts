import styled from "styled-components";
import { Colors } from "../../global/GlobalStyles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;

export const Input = styled.input`
  padding: 8px 12px;
`;

export const Label = styled.label`
  font-weight: 500;
`;

export const LabelSpan = styled.span`
  color: ${Colors.headline};
  font-size: 1.15rem;
  font-weight: 700;
`;
