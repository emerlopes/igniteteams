import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Container } from "./styles";

export function Players() {
    return (
        <Container>
            <Header showBackButton />
            <Highlight title="Nome da turma" subtitle="Adicione a galera e separe os times" />
            <Input placeholder="Nome do participante" />
            <Button title="Remover turma" type="SECUNDARY" style={{ marginTop: 20 }} />
        </Container>
    );
}