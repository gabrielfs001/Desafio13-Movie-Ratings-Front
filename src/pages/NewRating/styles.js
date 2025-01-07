import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
`;

export const NewRatingWrapper = styled.div`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    padding: 50px 120px;
    display: flex;
    flex-direction: column;
    gap: 40px;

    height: calc(100vh - 116px);
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const InputWrapper = styled.div`
    display: flex;
    gap: 40px;
`;

export const MarkersWrapper = styled.div`
    background: #0D0C0F;
    display: flex;
    gap: 24px;
    border-radius: 8px;
    padding: 16px;
`;