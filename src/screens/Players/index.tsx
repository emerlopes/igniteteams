import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Container } from "./styles";

export function Players() {
    return (
        <Container>
            <Header showBackButton />
            <Highlight title="Nome da turma" subtitle="Adicione a galera e separe os times" />

            <ButtonIcon icon="home"/>

            <Input placeholder="Nome do participante" />
            <Button title="Remover turma" type="SECUNDARY" style={{ marginTop: 20 }} />
        </Container>
    );
}