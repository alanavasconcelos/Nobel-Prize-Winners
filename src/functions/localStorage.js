import AsyncStorage from '@react-native-async-storage/async-storage';

const storeObject = async (value, storageKey, errorMessage) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(storageKey, jsonValue)
      console.log("Finished storing")
    } catch (e) {
      console.log(errorMessage + e)
    }
}

const readObject = async (storage_Key, errorMessage) => {
    try {
      const jsonValue = await AsyncStorage.getItem(storage_Key)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      console.log(errorMessage + e)
    }
  }

const appendToList = async (element, storage_Key, errorMessage) => {
    try {
        let list = await readObject(storage_Key, "Error reading in appendToList")
        if(list.includes(element)){
            list = list.filter(el => el != element)
        }
        if(list == null || !Array.isArray(list)) {
            await storeObject([element], storage_Key, "Error storing in appendToList")
        }else{
            if(list.some(el => el.category == element.category && el.year == element.year)){
                list = list.filter(el => el.category != element.category || el.year != element.year) //Se está na lista, remove da lista
            }else{
                list.push(element) //Se não está, adiciona
            }
            await storeObject(list, storage_Key, "Error storing in appendToList")
        }
    } catch (error) {
        console.log(errorMessage + error)
    }
}

const isInPrizes = async (element) => {
    try {
        let list = await readPrizes()
        return list.some(el => el.category == element.category && el.year == element.year)
    } catch (error) {
        console.log("Erro checking if its in prizes " + error)
    }
}

const readPrizes = async () => await readObject("@favorite_Prizes", "Error reading prizes");
const appendToPrizes = async (element) => appendToList(element, "@favorite_Prizes", "Error appending to prizes");  

export { readPrizes, appendToPrizes, isInPrizes }