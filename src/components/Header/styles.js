import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    }

    .content {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 10px;
    
        > div {
            width: max-content;
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            button {
                background: transparent;
                color: ${({ theme }) => theme.COLORS.WHITE};
            }
        }
    }
`;

export const Profile = styled(Link)`
     width: 64px;
    height: 64px;

    > img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }

    > div {
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