import styled from "styled-components";
import { Colors } from "../../global/GlobalStyles";

interface IButtonProps {
  variant: "primary" | "secondary";
}

export const Button = styled.button<IButtonProps>`
  border: 1px solid ${Colors.stroke};
  border-radius: 2px;
  width: 45%;
  padding: 4px 0;

  background-color: ${(props) =>
    props.variant === "primary" ? `${Colors.button}` : "transparent"};
  color: ${(props) =>
    props.variant === "primary" ? `${Colors.buttonText}` : `${Colors.button}`};

  cursor: pointer;
`;
