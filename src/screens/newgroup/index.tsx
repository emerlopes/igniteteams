import { Container, Content, Icon } from "@/screens/newgroup/styles";

import { Header } from "@/components/header";
import { Button } from "@/components/button";
import { Highlight } from "@/components/highlight";
import { Input } from "@/components/input";

export function NewGroup() {
    return (
        <Container>
            <Header showBackButton />

            <Content>
                <Icon />

                <Highlight
                    title="Nova turma"
                    subTitle="crie a turma para adicionar as pessoas"
                />
                <Input placeholder="Nome da turma"/>

                <Button
                    title="Criar"
                />
            </Content>
        </Container>
    )
}