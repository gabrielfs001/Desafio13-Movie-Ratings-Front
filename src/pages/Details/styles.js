import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
`;

export const DetailsWrapper = styled.div`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    padding: 50px 120px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    height: calc(100vh - 116px);

    > p {
        text-align: justify;
        padding-right: 16px;
        max-height: 600px; 
        overflow-y: auto;

        &::-webkit-scrollbar {
            width: 10px;
        }

        &::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.COLORS.PINK};
            border-radius: 10px;
        }
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

export const TitleWithRating = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const AuthorSection = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    font-weight: 400;


`;

export const AuthorSectionWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    > .linkIcon {
        vertical-align: middle;
        color: ${({theme}) => theme.COLORS.PINK};
    }

    > img {
        vertical-align: middle;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        border: 1px solid #3E3B47;
    }
`;