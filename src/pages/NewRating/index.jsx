import { Header } from "../../components/Header";
import { Container, InputWrapper, TitleWrapper, NewRatingWrapper } from "./styles";
import { BackButton } from "../../components/BackButton";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { MovieMark } from "../../components/MovieMark";


export function NewRating(){
    return (
        <Container>
            <Header />
            <NewRatingWrapper>
                <TitleWrapper>
                    <Link to={'/'}>
                        <BackButton title={'Voltar'} />
                    </Link> 
                    <h1>Novo filme</h1>
                </TitleWrapper>
                <InputWrapper>
                    <Input placeholder="Título"/>
                    <Input placeholder="Sua nota (de 0 a 5)"/>
                </InputWrapper>

                <Textarea placeholder="Observações"/>

                <Section title="Marcadores">
                    <div className="markers">
                        <MovieMark value="React" />
                        <MovieMark isNew placeholder="Novo Marcador" />
                    </div>
                </Section>
                <InputWrapper>
                    <Button title={'Excluir filme'} style={{color: '#FF859B', background: '#0D0C0F'}}/>
                    <Button title={'Salvar alterações'}/>
                </InputWrapper>
            </NewRatingWrapper>
        </Container>
    )
}