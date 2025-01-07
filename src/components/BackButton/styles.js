import styled from "styled-components";

export const Container = styled.div`
    color: ${({theme}) => theme.COLORS.PINK};
    text-decoration: none;

    > .linkIcon {
        vertical-align: middle;
        margin-right: 8px;
        color: ${({theme}) => theme.COLORS.PINK};
    }
`;