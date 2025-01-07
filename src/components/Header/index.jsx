import { Container, Profile, Search } from "./styles";

import { Input } from "../Input";

export function Header() {
    return (
        <Container>
            <h2>RocketMovies</h2>

            <Search>
                <Input placeholder="Pesquisar pelo título"/>
            </Search>

            <Profile to="/profile">
                <div>
                    <strong>Gabriel Fernandes</strong>
                    <span>Sair</span>

                </div>
                <img src="https://github.com/gabrielfs001.png" alt="Imagem de Gabriel" />


            </Profile> 
        </Container>
    )
}