import { useState } from 'react';
import { useRoute } from '@react-navigation/native'

import { Alert } from 'react-native';

import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { FlatList } from "react-native";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpyty } from '@components/ListEmpty';

type RouteParams = {
    group: string;

}

export function Players() {
    const [newPlayerName, setNewPlayerName] = useState('');
    const [team, setTeam] = useState("Time A");
    const [players, setPlayers] = useState([]);

    const route = useRoute();
    const { group } = route.params as RouteParams;


    async function actionAddPlayer() {
        if (newPlayerName.trim().length === 0) {
            return Alert.alert("Nome do participante", "Informe o nome do participante.");
        }

        const newPlayer = {
            name: newPlayerName,
            team,
        }
    }

    return (
        <Container>
            <Header showBackButton />
            <Highlight title={group} subtitle="Adicione a galera e separe os times" />
            <Form>
                <Input onChangeText={setNewPlayerName} placeholder="Nome do participante" autoCorrect={false} />
                <ButtonIcon icon="add" onPress={actionAddPlayer} />
            </Form>

            <HeaderList>
                <FlatList
                    data={['Elenco', 'Time A', 'Time B']}
                    keyExtractor={item => item}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}

                        />
                    )}
                />
                <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
            </HeaderList>
            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <PlayerCard
                        name={item}
                        onRemove={() => setPlayers(players.filter(player => player !== item))}
                    />
                )}
                contentContainerStyle={
                    [
                        { paddingBottom: 100 },
                        players.length === 0 && { flex: 1 }
                    ]
                }
                ListEmptyComponent={() => (
                    <ListEmpyty message="Não há pessoas nesse time" />
                )}
                showsVerticalScrollIndicator={false}
            />
            <Button title="Remover turma" type="SECUNDARY" style={{ marginTop: 20 }} />
        </Container>
    );
}