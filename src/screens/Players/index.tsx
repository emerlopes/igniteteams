import { useState } from 'react';
import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { FlatList } from "react-native";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";

export function Players() {
    const [team, setTeam] = useState("Time A");
    const [players, setPlayers] = useState(['Emerson', 'John', 'Mary']);


    return (
        <Container>
            <Header showBackButton />
            <Highlight title="Nome da turma" subtitle="Adicione a galera e separe os times" />
            <Form>
                <Input placeholder="Nome do participante" autoCorrect={false} />
                <ButtonIcon icon="add" />
            </Form>

            <HeaderList>
                <FlatList
                    data={['Time A', 'Time B']}
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

            <Button title="Remover turma" type="SECUNDARY" style={{ marginTop: 20 }} />
        </Container>
    );
}