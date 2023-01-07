import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Container, Title } from './styles';

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title='Turmas' subtitle='Jogue com a sua turma' />
      <GroupCard title={'Galera do Paineiras'} />
    </Container>
  );
}
