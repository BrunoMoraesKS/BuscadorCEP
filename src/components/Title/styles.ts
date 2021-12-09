import styled from "styled-components";

interface IInputProps {
  size: number;
  decoration: string;
}

export const TitleH1 = styled.h1<IInputProps>`
  font-size: ${(props) => props.size}rem;
  cursor: ${(props) => (props.decoration === "link" ? "pointer" : "default")};
  text-decoration: ${(props) =>
    props.decoration === "link" ? "underline" : "none"};
`;

export const TitleH2 = styled.h2<IInputProps>`
  font-size: ${(props) => props.size}rem;
  cursor: ${(props) => (props.decoration === "link" ? "pointer" : "default")};
  text-decoration: ${(props) =>
    props.decoration === "link" ? "underline" : "none"};
`;

export const TitleH3 = styled.h3<IInputProps>`
  font-size: ${(props) => props.size}rem;
  cursor: ${(props) => (props.decoration === "link" ? "pointer" : "default")};
  text-decoration: ${(props) =>
    props.decoration === "link" ? "underline" : "none"};
`;

export const TitleH4 = styled.h4<IInputProps>`
  font-size: ${(props) => props.size}rem;
  cursor: ${(props) => (props.decoration === "link" ? "pointer" : "default")};
  text-decoration: ${(props) =>
    props.decoration === "link" ? "underline" : "none"};
`;

export const TitleH5 = styled.h5<IInputProps>`
  font-size: ${(props) => props.size}rem;
  cursor: ${(props) => (props.decoration === "link" ? "pointer" : "default")};
  text-decoration: ${(props) =>
    props.decoration === "link" ? "underline" : "none"};
`;

export const TitleH6 = styled.h6<IInputProps>`
  font-size: ${(props) => props.size}rem;
  cursor: ${(props) => (props.decoration === "link" ? "pointer" : "default")};
  text-decoration: ${(props) =>
    props.decoration === "link" ? "underline" : "none"};
`;
