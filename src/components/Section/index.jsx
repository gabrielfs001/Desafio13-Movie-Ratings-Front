import { Container, Markers } from "./styles";

export function Section({ title, children }){
    return (
        <Container>
            <h2>
                {title}
            </h2>
            <Markers>
                {children}
            </Markers>
        </Container>
    );
}