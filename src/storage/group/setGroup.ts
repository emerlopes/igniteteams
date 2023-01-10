import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '@storage/storageConfig';
import { getGroups } from './getGroup';

export async function setGroup(newGroup: string) {
    try {
        const storedGroups = await getGroups();

        const storage = JSON.stringify([...storedGroups, newGroup]);

        await AsyncStorage.setItem(GROUP_COLLECTION, storage);

    } catch (e) {
        throw e;

    }
}