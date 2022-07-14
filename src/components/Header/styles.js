import styled from 'styled-components';

export const Container = styled.div`
    grid-area: header;
    height: 105px;
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    display: flex;
    align-items: center;
    padding: 0 80px;
    

    > h1 {
        color: ${({theme}) => theme.COLORS.PINK};
        margin-right: 64px;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 9px;
    

    > img {
        width: 64px;
        border-radius: 50%;
    }

    > div {
        width: 200px;
        text-align: end;
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 24px;
        span {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
        strong {
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;