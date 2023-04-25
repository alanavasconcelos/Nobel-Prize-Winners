const api_pessoas_url = "https://masterdataapi.nobelprize.org/2.1/laureates?offset=0&limit=2000";
const api_premios_url = "https://masterdataapi.nobelprize.org/2.1/nobelPrizes?offset=0&limit=1000";
import prizes from './data/prizes'
import laureates from "./data/laureates"
import { retrieveData } from './salvamento';

//função pra checar a api função exemplo
async function getapi(url) {
  const response = await fetch(url);

  var data = await response.json();
  console.log(data);
}

async function filterByCategory(category) {
  //const response = await fetch(api_premios_url);
  //var data = await response.json();    
  let data = await retrieveData('prizes');
  data = data == null ? prizes.nobelPrizes : data;
  return data.filter(nobel => nobel.category.en == category)
}

async function filterByYear(year) {
  const response = await fetch(api_premios_url);
  var data = await response.json();
  return data.nobelPrizes.filter(nobel => nobel.awardYear == year)
}

async function filterByCountry(country) {
  const response = await fetch(api_pessoas_url);
  var data = await response.json();
  for (r in data.laureates) {
    try {
      if (data.laureates[r].birth.place.country.en == country) {
        //data.laureates[r] contém todos os laureados desse País
        console.log(data.laureates[r])
      }
    } catch (error) {

    }

  }
}

//WIP vvv

async function filterMulti(country, year, category) {
  const response = await fetch(api_premios_url);
  var data = await response.json();

  if (country == "null") {// caso ano-categoria
    for (r in data.nobelPrizes) {
      if (data.nobelPrizes[r].awardYear == year && data.nobelPrizes[r].category.en == category) {
        //data.nobelPrizes[r] contém todos os nobéis desse ano e categoria
        console.log(data.nobelPrizes[r])
      }
    }
  }
  if (year == "null") {// caso país-categoria
    for (r in data.nobelPrizes) {
      if (data.nobelPrizes[r].category.en == category) {
        //data.nobelPrizes[r] contém todos os nobéis desse ano e categoria
        console.log(data.nobelPrizes[r])
      }
    }
  }
}
//funcoes curiosidades

function countCategories() {//conta quais categorias tem e quantas de cada, tem que chamar countCategories
  const categoriesCount = {};

  prizes.nobelPrizes.forEach(object => {
    const category = object.category.en;

    if (category in categoriesCount) {
      // If category already exists in the dictionary, increment the count
      categoriesCount[category] += 1;
    } else {
      // If category doesn't exist in the dictionary, add it with count 1
      categoriesCount[category] = 1;
    }
  });

  return categoriesCount;
}

function countCountries() {//conta quais categorias tem e quantas de cada, tem que chamar countCategories
  const countriesCount = {};

  laureates.laureates.forEach(object => {
    try {
      const country = object.birth.place.country.en;

      if (country in countriesCount) {
        // If category already exists in the dictionary, increment the count
        countriesCount[country] += 1;
      } else {
        // If category doesn't exist in the dictionary, add it with count 1
        countriesCount[country] = 1;
      }
    } catch (error) {
      console.log(object.knownName? object.knownName.en + " não nasceu em país nenhum :O": "Erro: sem país")
    }
  });
      const countriesArray = Object.entries(countriesCount);
      countriesArray.sort((a, b) => b[1] - a[1]);
      const sortedCountriesCount = Object.fromEntries(countriesArray);
   return sortedCountriesCount;
  }

  function countGender() {
    const gendersCount = {};
  
    laureates.laureates.forEach(object => {
      const gender = object.gender;
  
      if (gender in gendersCount) {
        // If category already exists in the dictionary, increment the count
        gendersCount[gender] += 1;
      } else {
        // If category doesn't exist in the dictionary, add it with count 1
        gendersCount[gender] = 1;
      }
    });
  
    return gendersCount;
  }

export { filterByCategory, filterByYear, filterByCountry, filterMulti, countCountries, countCategories, countGender }