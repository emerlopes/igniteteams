import { Button } from '@/components/button';
import { GroupCard } from '@/components/GroupCard';
import { Header } from '@/components/header';
import { Highlight } from '@/components/highlight';
import { ListEmpty } from '@/components/listEmpty';
import { Group, mockGroups } from '@/helper/groups';
import { Container } from '@/screens/groups/styles';
import { useState } from 'react';
import { FlatList } from 'react-native';


type Props = {
  groups: Group[]
}

export function Groups() {

  const [groups, setGroups] = useState<Group[]>([])

  return (
    <Container>
      <Header />
      <Highlight title="Turma" subTitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <GroupCard title={item.title}
        />}
        contentContainerStyle={groups?.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <ListEmpty message="Crie a sua turma e comece hoje" />}
      />

      <Button title="Criar nova turma" />
    </Container>
  );
}
