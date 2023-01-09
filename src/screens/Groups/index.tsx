import { useState } from 'react';

import { Container, Title } from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { FlatList } from 'react-native';
import { GroupCard } from '@components/GroupCard';
import { ListEmpyty } from '@components/ListEmpty';
import { Button } from '@components/Button'


export function Groups() {

  const [groups, setGroups] = useState(['Grupo do Sábado', 'Grupo de Segunda']);

  return (
    <Container>
      <Header />
      <Highlight title='Turmas' subtitle='Jogue com a sua turma' />
      <FlatList style={{ width: '100%' }}
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpyty message="Parece que você ainda não tem turmas cadastradas. Adicione uma nova turma para começar a usar o aplicativo." />
        )}
      />

      <Button title="Criar nova turma" />

    </Container>
  );
}
