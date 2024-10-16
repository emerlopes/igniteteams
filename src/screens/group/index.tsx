import { GroupCard } from '@/components/GroupCard';
import { Header } from '@/components/header';
import { Highlight } from '@/components/highlight';
import { Container } from '@/screens/group/styles';

export function Group() {
  return (
    <Container>
      <Header />
      <Highlight title="Turma" subTitle="jogue com a sua turma"/>

      <GroupCard title="Paineiras FC"/>
    </Container>
  );
}
