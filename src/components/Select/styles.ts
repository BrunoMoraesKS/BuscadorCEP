import styled from "styled-components";
import { Colors } from "../../global/GlobalStyles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;
export const SelectContainer = styled.div`
  display: flex;

  width: 110%;
`;

export const Select = styled.select`
  height: 2.1rem;
  width: 100%;
  max-width: 320px;

  padding: 0 16px;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background-color: transparent;

  border-right: none;

  cursor: pointer;

  &:focus {
    outline-color: ${Colors.highlight};
  }
`;

export const Option = styled.option`
  font-size: 1rem;
`;

export const Label = styled.label`
  font-weight: 500;
`;

export const LabelSpan = styled.span`
  color: ${Colors.headline};
  font-size: 1.15rem;
  font-weight: 700;
`;

export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  right: 30px;

  align-self: flex-end;

  width: 32px;
  height: 2.1rem;
  border: 1px solid black;

  background-color: ${Colors.highlight};

  padding: 8px 12px;

  z-index: -1;
`;

export const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid ${Colors.stroke};
`;
