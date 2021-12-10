import styled from "styled-components";
import { Colors } from "../../global/GlobalStyles";

export const OuterContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  background-color: ${Colors.background}99;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: fixed;

  width: 90%;
  max-width: 550px;

  padding: 16px 32px;

  background-color: ${Colors.background};
  border: 1px solid ${Colors.stroke};
`;

export const ChildrenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-direction: column;

  width: 100%;

  padding: 8px 16px;
`;
