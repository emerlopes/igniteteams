import { getPlayersByGroup } from './getPlayersByGroup';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export async function getPlayersByGroupAndTeam(group: string, team: string) {
    try {
        const storage = await getPlayersByGroup(group);
        const players = storage.filter(player => player.team === team);

        return players;

    } catch (e) {
        throw e;
    }
}