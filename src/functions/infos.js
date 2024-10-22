import laureates from "./data/laureates"

const api_pessoas_url = "https://masterdataapi.nobelprize.org/2.1/laureates?offset=0&limit=2000";
const api_premios_url = "https://masterdataapi.nobelprize.org/2.1/nobelPrizes?offset=0&limit=1000";

info = {
    id: null,
    name: null,
    gender: null,
    birthDate: null,
    birthString: null,
    birthCountry: null,
    wikipedia: null,
    wikidataId: null,
    wikipediaName: null,
    nobel:[{name: null, link: null}, {name: null, link: null}]
    };

//função pra checar a api função exemplo
async function getapi(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data.laureates.filter(laureates => laureates.id == 745));
}

async function informa(id){//você dá o id do laureado e ela retorna as informações
    //const response = await fetch(api_pessoas_url);
    //var data = await response.json();
    let data = laureates
    let laureado = data.laureates.filter(laureado => laureado.id == id)
    let winner = laureado[0]
    try {
    info.id = winner.id
    info.name = winner.knownName.en 
    info.gender = winner.gender
    info.birthDate = winner.birth.date
    info.birthString = winner.birth.place.city.en + ", "+ winner.birth.place.country.en
    info.birthCountry = winner.birth.place.country.en
    info.wikipedia = winner.wikipedia.english
    info.wikidataId = winner.wikidata.id
    info.wikipediaName = winner.wikipedia.slug
    info.nobel[0].name = winner.nobelPrizes[0].category.en + " of " + winner.nobelPrizes[0].awardYear
    info.nobel[0].link = winner.nobelPrizes[0].links[0].href
        info.nobel[1].name = winner.nobelPrizes[1].category.en + " of " + winner.nobelPrizes[1].awardYear
        info.nobel[1].link = winner.nobelPrizes[1].links[0].href 
    } catch (error) {
        
    }

    console.log(info)
    return info
}

async function getNameById(id){
  const response = await fetch(api_pessoas_url);
    var data = await response.json();
    let laureado = data.laureates.filter(laureado => laureado.id == id)
    let winner = laureado[0]
    return winner.knownName.en
}

async function getWikiSummary(name) {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${name}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("Data wikipedia: " + data.extract);
      console.log("Image wikipedia: " + data.originalimage.source);
      return { summary: data.extract, picture: data.originalimage.source};
    } catch (error) {
      console.error(error);
    }
}

async function getWikiImage(name) {
  var name = getNameById(id);
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${name}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.originalimage.source);
    return data.originalimage.source;
  } catch (error) {
    console.error(error);
  }
}
//console.log(informa(300))

export { informa, getWikiSummary, getWikiImage }