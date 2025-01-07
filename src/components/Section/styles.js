import styled from "styled-components";

export const Container = styled.section`

    > h2 {
        padding-bottom: 16px;
        margin-bottom: 24px;

        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 20px;
        font-weight: 400;
    }
`;

export const Markers = styled.div`
    background-color: #0D0C0F;
    padding: 16px;
    border-radius: 8px;
    
    .markers {
        gap: 24px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
`;