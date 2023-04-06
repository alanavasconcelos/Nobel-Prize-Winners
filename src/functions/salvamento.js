const api_pessoas_url = "https://masterdataapi.nobelprize.org/2.1/laureates?offset=0&limit=1000";// atualmente tem 981
const api_premios_url = "https://masterdataapi.nobelprize.org/2.1/nobelPrizes?offset=0&limit=700";// atualmente tem 664
import AsyncStorage from '@react-native-async-storage/async-storage';
import laureates from "./data/laureates"
import prizes from "./data/prizes"
pessoasFavoritas = []
premiosFavoritos = []

async function getapi(url){
    const response = await fetch(url);
    var data = await response.json();
    
        console.log(data.laureates.filter(laureates => laureates.id == 745));
}

async function saveApis(){//rodar uma vez no inicio do app
    localPrizes = prizes.nobelPrizes;
    const response = await fetch(api_premios_url);
    var onlinePrizes = await response.json();
    onlinePrizes = onlinePrizes.nobelPrizes
    console.log("online prizes length: " + onlinePrizes.length);
    console.log("local prizes length: " + localPrizes.length);
    if(onlinePrizes.length != localPrizes.length){
        console.log("Atualizando apis...");
        const response = await fetch(api_pessoas_url);
        var data = await response.json();
        saveObjectToJsFile(data, "laureates");
        saveObjectToJsFile(onlinePrizes, "prizes");
    }
}

async function saveObjectToJsFile(object, fileName) {
    try {
      const jsonString = JSON.stringify(object);
      //const jsString = `export default ${jsonString};`;
      await AsyncStorage.setItem(fileName, jsonString);
      console.log('Object saved to file!');
    } catch (error) {
      console.error('Error saving object to file:', error);
    }
  }

  async function retrieveData(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        const jsonValue = JSON.parse(value);
        console.log('Data retrieved successfully: ', jsonValue);
        return jsonValue;
      } else {
        console.log('Data not found.');
        return null;
      }
    } catch (error) {
      console.log('Error retrieving data: ', error);
      return null;
    }
  }

export { saveApis, retrieveData } 