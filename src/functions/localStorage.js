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

const readPrizes = async () => await readObject("@favorite_Prizes", "Error reading prizes");

//se o element nao está na lista, o adiciona, se está, o remove
const toggleToPrizes = async (element) => {
    try {
        let list = await readObject("@favorite_Prizes", "Error reading in toggleToPrizes")
        if(list == null || !Array.isArray(list)) {
            await storeObject([element], "@favorite_Prizes", "Error storing in toggleToPrizes")
        }else{
            if(list.some(el => el.category == element.category && el.year == element.year)){
                list = list.filter(el => el.category != element.category || el.year != element.year) //Se está na lista, remove da lista
            }else{
                list.push(element) //Se não está, adiciona
            }
            await storeObject(list, "@favorite_Prizes", "Error storing in toggleToPrizes")
        }
    } catch (error) {
        console.log("Error toggoling to prizes " + error)
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

const readLaureates = async () => await readObject("@favorite_Laureates", "Error reading laureates");

//se o element nao está na lista, o adiciona, se está, o remove
const toggleToLaureates = async (element) => {
    try {
        let list = await readObject("@favorite_Laureates", "Error reading in toggleLaureates")
        if(list == null || !Array.isArray(list)) {
            await storeObject([element], "@favorite_Laureates", "Error storing in toggleLaureates")
        }else{
            if(list.some(el => el.id == element.id)){
                list = list.filter(el => el.id !== element.id) //Se está na lista, remove da lista
            }else{
                list.push(element) //Se não está, adiciona
            }
            await storeObject(list, "@favorite_Laureates", "Error storing in toggleLaureates")
        }
    } catch (error) {
        console.log("Error toggoling to Laureates " + error)
    }
}

const isInLaureates = async (id) => {
    try {
        let list = await readLaureates()
        return list.some(el => el.id == id)
    } catch (error) {
        console.log("Erro checking if its in prizes " + error)
    }
}

export { readPrizes, toggleToPrizes, isInPrizes, readLaureates, toggleToLaureates, isInLaureates }