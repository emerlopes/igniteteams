import { useState, useEffect, useRef } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'

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
import { PlayerStorageDTO } from '@storage/player/playerStorageDTO';
import { removePlayerByGroup } from '@storage/player/removePlayerByGroup';
import { removeGroupByName } from '@storage/group/removeGroupByName';

type RouteParams = {
    group: string;
}

export function Players() {
    const [newPlayerName, setNewPlayerName] = useState('');
    const [team, setTeam] = useState("Elenco");
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

    const navigation = useNavigation();
    const route = useRoute();
    const { group } = route.params as RouteParams;

    const newPlayerNameInputRef = useRef<TextInput>(null);


    async function actionAddPlayer() {
        if (newPlayerName.trim().length === 0) {
            return Alert.alert("Nome do participante", "Informe o nome do participante.");
        }

        const newPlayer = {
            name: newPlayerName.trim(),
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
                Alert.alert("Nova pessoa", "N??o foi poss??vel adicionar")
            }
        }
    }

    async function fetchPlayersByTeam() {
        try {
            const playersByTeam = await getPlayersByGroupAndTeam(group, team);
            setPlayers(playersByTeam);
        } catch (e) {
            console.log(e);
            Alert.alert("Pessoas", "N??o foi poss??vel carregar as pessoas por time")
        }
    }

    async function actionRemovePlayer(playerName: string) {
        try {
            await removePlayerByGroup(playerName, group);
            fetchPlayersByTeam();
        } catch (e) {
            console.log(e)
            Alert.alert("Remover", "N??o foi poss??vel remover esta pessoa.")
        }
    }

    async function removeGroup() {
        try {
            await removeGroupByName(group);
            navigation.navigate('groups');
        } catch (e) {
            console.log(e);
            Alert.alert("Remover grupo", "N??o foi poss??vel remover o grupo.")
        }
    }

    async function actionRemoveGroup() {
        Alert.alert(
            "Remover",
            "Deseja remover o grupo?",
            [
                { text: "N??o", style: "cancel" },
                { text: "Sim", style: "destructive", onPress: () => removeGroup() },
            ]
        );
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
                        onRemove={() => actionRemovePlayer(item.name)}
                    />
                )}
                contentContainerStyle={
                    [
                        { paddingBottom: 100 },
                        players.length === 0 && { flex: 1 }
                    ]
                }
                ListEmptyComponent={() => (
                    <ListEmpyty message="N??o h?? pessoas nesse time" />
                )}
                showsVerticalScrollIndicator={false}
            />
            <Button
                title="Remover turma"
                type="SECUNDARY"
                style={{ marginTop: 20 }}
                onPress={actionRemoveGroup}
            />
        </Container>
    );
}