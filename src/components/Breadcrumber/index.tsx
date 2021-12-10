import React from "react";
import * as S from "./styles";
import { useHistory } from "react-router-dom";
import Title from "../Title";

interface IData {
  title: string;
  link: string;
}

interface IBreadcrumberProps {
  data: IData[];
}

const Breadcrumber = ({ data }: IBreadcrumberProps) => {
  const history = useHistory();
  const lastItem = data.length;

  return (
    <S.Container>
      {data.map((item, index) => {
        if (index === lastItem - 1) {
          return <S.BreadCrumberActual>{item.title}</S.BreadCrumberActual>;
        }
        return (
          <>
            <Title
              content={item.title}
              size={0.75}
              variant="h4"
              onClick={() => {
                history.push(item.link);
              }}
              decoration="link"
            />

            <S.BreadCrumberArrow>&gt;</S.BreadCrumberArrow>
          </>
        );
      })}
    </S.Container>
  );
};

export default Breadcrumber;
