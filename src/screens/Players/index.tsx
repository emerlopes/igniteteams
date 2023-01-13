import { useState, useEffect, useRef } from 'react';
import { useRoute } from '@react-navigation/native'

import { Alert, TextInput } from 'react-native';

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
import { AppError } from '@utils/AppError';

import { setPlayerByGroup } from '@storage/player/setPlayerByGroup';
import { getPlayersByGroup } from '@storage/player/getPlayersByGroup';
import { getPlayersByGroupAndTeam } from '@storage/player/getPlayersByGroupAndTeam';
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';

type RouteParams = {
    group: string;
}

export function Players() {
    const [newPlayerName, setNewPlayerName] = useState('');
    const [team, setTeam] = useState("Time A");
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

    const route = useRoute();
    const { group } = route.params as RouteParams;

    const newPlayerNameInputRef = useRef<TextInput>(null);


    async function actionAddPlayer() {
        if (newPlayerName.trim().length === 0) {
            return Alert.alert("Nome do participante", "Informe o nome do participante.");
        }

        const newPlayer = {
            name: newPlayerName,
            team,
        }

        try {
            await setPlayerByGroup(newPlayer, group);
            newPlayerNameInputRef.current?.blur();

            setNewPlayerName('');
            fetchPlayersByTeam();
        } catch (e) {
            if (e instanceof AppError) {
                Alert.alert('Nova pessoa', e.message)
            } else {
                console.log(e);
                Alert.alert("Nova pessoa", "Não foi possível adicionar")
            }
        }
    }

    async function fetchPlayersByTeam() {
        try {
            const playersByTeam = await getPlayersByGroupAndTeam(group, team);
            setPlayers(playersByTeam);
        } catch (e) {
            console.log(e);
            Alert.alert("Pessoas", "Não foi possível carregar as pessoas por time")
        }
    }

    useEffect(() => {
        fetchPlayersByTeam();
    }, [team]);

    return (
        <Container>
            <Header showBackButton />
            <Highlight title={group} subtitle="Adicione a galera e separe os times" />
            <Form>
                <Input
                    inputRef={newPlayerNameInputRef}
                    onChangeText={setNewPlayerName}
                    value={newPlayerName}
                    placeholder="Nome do participante"
                    autoCorrect={false}
                    onSubmitEditing={actionAddPlayer}
                    returnKeyType="done"
                />
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
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                    <PlayerCard
                        name={item.name}
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