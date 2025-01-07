import { Container, ListHeaderWrapper, AddMovieButton, MovieListWrapper } from "./styles";
import { MovieListItem } from "../MovieListItem"; 
import { PiPlus } from "react-icons/pi";
import { Link } from "react-router-dom";


export function MovieList(){
    return (
        <Container>
            <ListHeaderWrapper>
                <h1>Meus Filmes</h1>
                <AddMovieButton to="/new">
                    <PiPlus size={20} className="addMovieIcon"/> Adicionar Filme
                </AddMovieButton>
            </ListHeaderWrapper>
            <MovieListWrapper>
                <MovieListItem></MovieListItem>
                <MovieListItem></MovieListItem> 
                <MovieListItem></MovieListItem>
                <MovieListItem></MovieListItem> 
                <MovieListItem></MovieListItem> 
            </MovieListWrapper>
        </Container>
    )
}