import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
        padding: 64px 0;
    }

`;

export const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    
    > .buttons {

        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 16px;
            line-height: 21px;
            color: ${({theme}) => theme.COLORS.PINK};
            background: transparent;

            svg {
                font-size: 16px;
            }
        }

        
    }
`;

export const MovieInfo = styled.div`
    margin-top: 24px;
    
    > p {
        margin-top: 40px;
        text-align: justify;
    }
`;

export const TitleRating = styled.div`
    display: flex;
    align-items: center;
    gap: 19px;
`;

export const AuthorInfo = styled.div`
    
    display: flex;
    gap: 8px;
    margin-top: 24px;
    margin-bottom: 40px;
    > div {
        display: flex;
        align-items: center;
        gap: 8px;

        img {
            width: 16px;
            height: 16px;
            border-radius: 50%;
        }

        > svg {
            color: ${({theme}) => theme.COLORS.PINK};
        }

        > span {
            font-size: 16px;
            line-height: 19px;
            font-weight: 400;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }
`;
