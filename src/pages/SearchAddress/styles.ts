import styled from "styled-components";
import { Colors } from "../../global/GlobalStyles";

export const Container = styled.div``;

export const LoadingScreen = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: ${Colors.background};

  z-index: 999;
`;
