import { Conainer, Content, Icon } from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';




export function NewGroup() {
    return (
        <Conainer>
            <Header showBackButton />
            <Content>
                <Icon />
                <Highlight title='Nova turma' subtitle='Crie uma turma para adicionar pessoas' />
                <Button title='Criar' />
            </Content>
        </Conainer>
    );
}