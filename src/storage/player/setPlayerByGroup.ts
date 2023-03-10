import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDTO } from "./playerStorageDTO";
import { getPlayersByGroup } from "./getPlayersByGroup";

export async function setPlayerByGroup(newPlayer: PlayerStorageDTO, group: string) {
    try {
        const storedPlayers = await getPlayersByGroup(group);
        const playerAlreadyExists = storedPlayers.filter((player) => player.name === newPlayer.name);

        if (playerAlreadyExists.length > 0) {
            throw new AppError("Essa pessoa já está em um time");
        }
        const storage = JSON.stringify([...storedPlayers, newPlayer]);
        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
    } catch (e) {
        throw (e);
    }
}


