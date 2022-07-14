import styled from "styled-components";

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

        Button {
            width: 207px;
            height: 47px;
            display: flex;
            align-items: center;
        }
    }

    > section {
        overflow: auto;
    }
    


`;