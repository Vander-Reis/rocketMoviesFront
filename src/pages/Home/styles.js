import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";
`;

export const Content = styled.div`
  grid-area: content;
  width: 100%;
  padding: 50px 106px 60px 123px;
  margin: auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > section {
    overflow: auto;
  }
`;

export const NewMovie = styled(Link)`
    width: 207px;
    background: ${({theme}) => theme.COLORS.PINK};
    color: black;

    display: flex;
    align-items: center;

    height: 56px;
    border: none;
    border-radius: 10px;
    margin-top: 24px;
    padding: 16px;
    font-weight: 500;

    &:disabled {
        opacity: 0.5;
    }

    > svg {
        margin-right: 8px;
    }
`;
