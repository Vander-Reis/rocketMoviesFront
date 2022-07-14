import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    gap: 16px;
    align-items: center;
    background: ${({theme}) => theme.COLORS.BACKGROUND_500};
    color: ${({theme}) => theme.COLORS.GRAY_100};

    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;
        padding: 12px;
        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        border: none;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }
    }

    > svg {
        margin-left: 16px;
    }
`;
