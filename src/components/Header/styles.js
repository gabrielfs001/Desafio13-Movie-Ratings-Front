import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    grid-area: header;

    height: 116px;
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_800};

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 64px;

    padding: 24px 124px;

    > h2 {
        font-size: 24px;
        font-weight: 700;
        color: ${({theme}) => theme.COLORS.PINK};
    }
`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    > img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_800};
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-right: 10px;
        line-height: 24px;
        text-align: end;

        span {
            font-size: 14px;
            color: ${({theme}) => theme.COLORS.GRAY_100}
        }

        strong {
            font-size: 18px;
            color: ${({theme}) => theme.COLORS.WHITE};
            white-space: nowrap;

        }
    }
`;

export const Search = styled.div`
    width: 100%;
`;