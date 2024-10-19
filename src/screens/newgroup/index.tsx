import { Container, Content, Icon } from "@/screens/newgroup/styles";

import { Header } from "@/components/header";
import { Button } from "@/components/button";
import { Highlight } from "@/components/highlight";

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

                <Button
                    title="Criar"
                />
            </Content>
        </Container>
    )
}