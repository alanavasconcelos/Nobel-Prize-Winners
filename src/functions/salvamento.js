const api_pessoas_url = "https://masterdataapi.nobelprize.org/2.1/laureates?offset=0&limit=1000";// atualmente tem 981
const api_premios_url = "https://masterdataapi.nobelprize.org/2.1/nobelPrizes?offset=0&limit=700";// atualmente tem 664
import { AsyncStorage } from 'react-native';
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
    localPrizes = prizes;
    const response = await fetch(api_premios_url);
    var onlinePrizes = await response.json();
    if(onlinePrizes.length != localPrizes.length){
        const response = await fetch(api_pessoas_url);
        var data = await response.json();
        saveObjectToJsonFile(data, "./data/laureates");
        saveObjectToJsonFile(onlinePrizes, "./data/prizes");
    }
}

async function saveObjectToJsonFile(object, fileName) {
    try {
      await AsyncStorage.setItem(fileName, JSON.stringify(object));
      console.log('Object saved to file!');
    } catch (error) {
      console.error('Error saving object to file:', error);
    }
  }