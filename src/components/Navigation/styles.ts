import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  gap: 0 16px;

  @media (max-width: 496px) {
    margin-top: 16px;
  }
`;
