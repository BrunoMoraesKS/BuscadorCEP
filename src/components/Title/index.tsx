import React from "react";
import * as S from "./styles";

interface ITitleProps {
  content: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size: number;
  decoration?: any;
  onClick?: () => void;
}

const Title = ({
  content,
  variant,
  size,
  onClick,
  decoration,
}: ITitleProps) => {
  if (variant === "h2") {
    return (
      <S.TitleH2 size={size} onClick={onClick} decoration={decoration}>
        {content}
      </S.TitleH2>
    );
  } else if (variant === "h3") {
    return (
      <S.TitleH3 size={size} onClick={onClick} decoration={decoration}>
        {content}
      </S.TitleH3>
    );
  } else if (variant === "h4") {
    return (
      <S.TitleH4 size={size} onClick={onClick} decoration={decoration}>
        {content}
      </S.TitleH4>
    );
  } else if (variant === "h5") {
    return (
      <S.TitleH5 size={size} onClick={onClick} decoration={decoration}>
        {content}
      </S.TitleH5>
    );
  } else if (variant === "h6") {
    return (
      <S.TitleH6 size={size} onClick={onClick} decoration={decoration}>
        {content}
      </S.TitleH6>
    );
  } else {
    return (
      <S.TitleH1 size={size} onClick={onClick} decoration={decoration}>
        {content}
      </S.TitleH1>
    );
  }
};

export default Title;
