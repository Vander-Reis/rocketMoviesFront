import styled from 'styled-components';

export const Container = styled.header`
    padding: 0 123px;
    width: 100%;
    height: 116px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 64px;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
    
    grid-area: header;
    

    > h1 {
        color: ${({theme}) => theme.COLORS.PINK};
        margin-right: 64px;
    }
`;

export const Profile = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    

    > img {
        width: 64px;
        border-radius: 50%;
    }

    > div {
        width: max-content;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
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