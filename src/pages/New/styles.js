import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    
    > main {

        padding: 40px 106px 85px 123px;

        header {

            h1 {
                font-style: normal;
                font-weight: 500;
                font-size: 36px;
                line-height: 47px;
                color: ${({theme}) => theme.COLORS.WHITE};
                margin-bottom: 40px;
            }
            
            a {
                font-size: 16px;
                color: ${({theme}) => theme.COLORS.PINK};
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 24px;
            }

        }

    }
`;

export const Form = styled.form`
    width: 100%; 

    > header {
        button {
        background: transparent;
        color: ${({theme}) => theme.COLORS.WHITE};
        display: flex;
        align-self: center;
        gap: 8px;
    }
    }

    > .input-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 40px;
        margin-bottom: 40px;
    }

    > .buttons {
        display: flex;
        align-items: center;
        gap: 40px;
        color: ${({ theme}) => theme.COLORS.BACKGROUND_900};

        .button-delete {
            background:  #0D0C0F;
            color: ${({theme}) => theme.COLORS.PINK};
        }
    }

    .tags {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        align-items: center;
        gap: 24px;

        background: #0D0C0F;
        /* height: 88px; */
        padding: 16px;
        border-radius: 10px;
    }
`;