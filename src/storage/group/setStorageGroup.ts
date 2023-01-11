import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError } from '@utils/AppError';
import { GROUP_COLLECTION } from '@storage/storageConfig';
import { getStorageGroups } from './getStorageGroup';

export async function setStorageGroup(newGroup: string) {
    try {

        if (!newGroup) {
            throw new AppError("Preencha o nome da turma");
        }

        const storedGroups = await getStorageGroups();
        const groupAlreadyExists = storedGroups.includes(newGroup);

        if (groupAlreadyExists) {
            throw new AppError("Já existe um grupo cadastrado com esse nome!");
        }

        const storage = JSON.stringify([...storedGroups, newGroup]);
        await AsyncStorage.setItem(GROUP_COLLECTION, storage);

    } catch (error) {
        throw error;
    }
}