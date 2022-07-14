import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background: ${({theme}) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.BACKGROUND_700};

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