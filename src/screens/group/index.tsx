import { GroupCard } from '@/components/GroupCard';
import { Header } from '@/components/header';
import { Highlight } from '@/components/highlight';
import { Group, mockGroups } from '@/helper/groups';
import { Container } from '@/screens/group/styles';
import { useState } from 'react';
import { FlatList } from 'react-native';


type Props = {
  groups: Group[]
}

export function Groups() {

  const [groups, setGroups] = useState<Group[]>(mockGroups)

  return (
    <Container>
      <Header />
      <Highlight title="Turma" subTitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <GroupCard title={item.title} />}
      />
    </Container>
  );
}
