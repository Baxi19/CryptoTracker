import AsyncStorage from 'react-native-comunity/async-storage';

class Storage {
    static instance = Storage();

    store = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value); 
            return true;
        } catch (error) {
            console.log(`===>Error in Storage store(): ${error}`)
            return false;
        }
    }

    get = async (key) => {
        try {
            return await AsyncStorage.getItem(key);
        } catch (error) {
            console.log(`===>Error in Storage get(): ${error}`)
            throw Error(error);
        }
    }

    multiGet = async (keys) => {
        try {
            return await AsyncStorage.multiGet(keys);
        } catch (error) {
            console.log(`===>Error in Storage multiGet(): ${error}`)
            throw Error(error);
        }
    }

    getAllKeys = async () => {
        try {
            return await AsyncStorage.getAllKeys();
        } catch (error) {
            console.log(`===>Error in Storage getAllKeys(): ${error}`)
            throw Error(error);
        }
    }

    remove = async (key) => {
        try {
            await AsyncStorage.removeItem(key);
            return true;
        } catch (error) {
            console.log(`===>Error in Storage remove(): ${error}`)
            return false;
        }
    }

}

export default Storage;