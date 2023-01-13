import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/storageConfig';
import { getStorageGroups } from './getStorageGroup';

export async function removeGroupByName(deletedGroup: string) {
    try {
        const storageGroups = await getStorageGroups();
        const groups = storageGroups.filter(group => group !== deletedGroup);

        await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));
        await AsyncStorage.removeItem(`${PLAYER_COLLECTION}=${deletedGroup}`)
    } catch (e) {
        throw e;
    }

}
