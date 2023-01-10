import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '@storage/storageConfig';
import { getStorageGroups } from './getStorageGroup';

export async function setStorageGroup(newGroup: string) {
    try {
        const storedGroups = await getStorageGroups();

        const storage = JSON.stringify([...storedGroups, newGroup]);

        await AsyncStorage.setItem(GROUP_COLLECTION, storage);

    } catch (e) {
        throw e;

    }
}