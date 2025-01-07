import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    padding: 50px 120px;
    height: calc(100vh - 116px);
`;

export const ListHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
    margin-bottom: 40px;
`

export const AddMovieButton = styled(Link)`
    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.BACKGROUND_900 };

    display: flex; 
    align-items: center;
    justify-content: center; 

    height: 56px;
    border: 0;
    padding: 0 16px;
    border-radius: 10px;
    font-weight: 500;

    &:disabled {
        opacity: 0.5;
    }

    > .addMovieIcon {
        vertical-align: middle;
        margin-right: 8px;
    }
`

export const MovieListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
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
`
