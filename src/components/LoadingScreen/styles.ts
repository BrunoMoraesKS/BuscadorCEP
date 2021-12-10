import styled, { keyframes } from "styled-components";
import { Colors } from "../../global/GlobalStyles";

const load2 = keyframes`
 0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  color: ${Colors.stroke};
  font-size: 0.5rem;
  text-indent: -99999em;
  margin: 55px auto;
  position: relative;
  width: 10em;
  height: 10em;
  box-shadow: inset 0 0 0 1em;
  border-radius: 50%;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  &:before,
  &:after {
    border-radius: 50%;
    position: absolute;
    content: "";
  }

  &:before {
    width: 5.2em;
    height: 10.2em;
    background-color: ${Colors.background}99;
    border-radius: 10.2em 0 0 10.2em;
    top: -0.1em;
    left: -0.1em;
    -webkit-transform-origin: 5.1em 5.1em;
    transform-origin: 5.1em 5.1em;
    -webkit-animation: ${load2} 2s infinite ease 1.5s;
    animation: ${load2} 2s infinite ease 1.5s;
  }

  &:after {
    width: 5.2em;
    height: 10.2em;
    background-color: ${Colors.background}99;
    border-radius: 0 10.2em 10.2em 0;
    top: -0.1em;
    left: 4.9em;
    -webkit-transform-origin: 0.1em 5.1em;
    transform-origin: 0.1em 5.1em;
    -webkit-animation: ${load2} 2s infinite ease;
    animation: ${load2} 2s infinite ease;
  }
`;

export const Container = styled.div`
  display: flex;
  position: fixed;

  top: 0;
  left: 0;

  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background-color: ${Colors.background}99;

  z-index: 999;
`;
