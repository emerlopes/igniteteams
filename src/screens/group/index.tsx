import { Header } from '@/components/header';
import { Highlight } from '@/components/highlight';
import { Container } from '@/screens/group/styles';

export function Group() {
  return (
    <Container>
      <Header />
      <Highlight title="Emerson" subTitle="Lopes"/>
    </Container>
  );
}
