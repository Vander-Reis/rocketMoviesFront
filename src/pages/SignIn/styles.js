import styled from 'styled-components';
import backgroundImg from '../../assets/backgroud.png'

export const Container = styled.div`

    height: 100vh;
    display: flex;
    align-items: stretch;

`;

export const Form = styled.form`
    padding: 0 134px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;

    > h1 {
        font-size: 48px;
        font-weight: 700;
        line-height: 63px;
        color: ${({theme}) => theme.COLORS.PINK};
    }

    > p {
        font-size: 14px;
        line-height: 18px;
        color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        margin-bottom: 48px;
    }

    > h2 {
        font-size: 24px;
        line-height: 32px;
        color: ${({theme}) => theme.COLORS.WHITE};
        margin-bottom: 48px;
    }

    > a {
        margin-top: 42px;
        text-align: center;
        color: ${({theme}) => theme.COLORS.PINK};
    }
`;

export const Background = styled.div`
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    flex: 1;
`;