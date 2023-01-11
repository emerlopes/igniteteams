import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { setStorageGroup } from '@storage/group/setStorageGroup';
import { AppError } from '@utils/AppError';

import { Conainer, Content, Icon } from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { Alert } from 'react-native';



export function NewGroup() {
    const [group, setGroup] = useState('');
    const navigation = useNavigation();

    async function actionCreateNewGroup() {
        try {
            await setStorageGroup(group.trim());
            navigation.navigate('players', { group });
        } catch (e) {
            if (e instanceof AppError) {
                Alert.alert("Nova turma", e.message);
            } else {
                Alert.alert("Nova turma", "Não foi possível criar um novo grupo");
                console.log(e)
            }

        }
    }

    return (
        <Conainer>
            <Header showBackButton />
            <Content>
                <Icon />
                <Highlight title='Nova turma' subtitle='Crie uma turma para adicionar pessoas' />
                <Input placeholder='Nome da turma'
                    onChangeText={setGroup}
                    keyboardType={'name-phone-pad'}
                    maxLength={29}
                />
                <Button title='Criar' style={{ marginTop: 20 }}
                    onPress={actionCreateNewGroup}

                />
            </Content>
        </Conainer>
    );
}