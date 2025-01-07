import { Container } from "./styles";

import { Header } from "../../components/Header";
import { MovieList } from "../../components/MovieList";

export function Home(){
    return (
        <Container>
            <Header />
            <MovieList />
        </Container>
    )
}