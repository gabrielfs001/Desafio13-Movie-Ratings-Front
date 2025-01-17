import { Container, Form, Background } from "./styles";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButton";

export function SignUp(){
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />

                <Input      
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input      
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Cadastrar" />

                <Link to="/">
                    {/* <FaArrowLeft size={20} className="linkIcon"/>Voltar para o login */}
                    <BackButton title={'Voltar para o login'} />
                </Link>
            </Form>
            <Background />
        </Container>
    )
}