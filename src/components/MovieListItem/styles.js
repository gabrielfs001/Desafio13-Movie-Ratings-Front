import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    border-radius: 16px;
    padding: 32px;
    background-color: #FF859B0D;
    display: flex;
    flex-direction: column;
    gap: 15px;

    > h2 {
        font-weight: 700;
    }

    > p {
        font-size: 16px;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        margin-bottom: 15px;

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;