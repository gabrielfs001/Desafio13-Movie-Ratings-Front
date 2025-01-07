import styled from "styled-components";
import backgroundImg from "../../assets/movie-background.png";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

> h1 {
    font-size: 48px;
    color: ${({theme}) => theme.COLORS.PINK};
}

> h2 {
    font-size: 24px;
    font-weight: 500;
    margin: 48px 0;
    width: 100%;
    text-align: left;
}

> p {
    font-size: 14px;
    width: 100%;
    text-align: left;
    color: ${({theme}) => theme.COLORS.GRAY_100};
}

> a {
    margin-top: 124px;
    color: ${({theme}) => theme.COLORS.PINK};
}
`;

export const Background = styled.div`
    flex:1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;