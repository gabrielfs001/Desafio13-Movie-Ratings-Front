import { Container } from "./styles";

import { FiArrowLeft } from "react-icons/fi";

export function BackButton( {title} ){
    return (
        <Container>
            <FiArrowLeft size={20} className="linkIcon"/>{title}
        </Container>
    )
}