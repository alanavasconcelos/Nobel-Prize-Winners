const api_pessoas_url = "https://masterdataapi.nobelprize.org/2.1/laureates?offset=0&limit=1000";// atualmente tem 981
const api_premios_url = "https://masterdataapi.nobelprize.org/2.1/nobelPrizes?offset=0&limit=700";// atualmente tem 664
pessoasFavoritas = []
premiosFavoritos = []

async function getapi(url){
    const response = await fetch(url);
    var data = await response.json();
    
        console.log(data.laureates.filter(laureates => laureates.id == 745));
}

async function favoritaPessoa(laureado){
    pessoasFavoritas.push(laureado)
}

async function favoritaPremio(premio){
    premiosFavoritos.push(premio)
}

async function checaPremioFavorito(premio){
    favorito = premiosFavoritos.find(nobel => nobel == premio)
    if(favorito==premio){
        console.log("true")
        return true;
    }
    console.log("false")
    return false;
}
async function checaPessoaFavorito(laureado){
    favorito = pessoasFavoritas.find(pessoa => pessoa == laureado)
    if(favorito==laureado){
        console.log("true")
        return true;
    }
    console.log("false")
    return false;
}

async function salvaPessoas(){
    objeto = pessoasFavoritas
    var jsonData = JSON.stringify(objeto);
    var fs = require('fs');
    fs.writeFile('./Pessoas.json', jsonData, function(err) {
    if (err) {
        console.log(err);
    }
    });
}

async function salvaPremios(){
    objeto = premiosFavoritos
    var jsonData = JSON.stringify(objeto);
    var fs = require('fs');
    fs.writeFile('./Premios.json', jsonData, function(err) {
    if (err) {
        console.log(err);
    }
    });
}

async function readPessoas(){
    var fs = require('fs');
    try {
        const data = fs.readFileSync('Pessoas.json', 'utf8');
        pessoasFavoritas = data;
      } catch (err) {
        console.error(err);
      }
}

async function readPremios(){
    var fs = require('fs');
    try {
        const data = fs.readFileSync('Premios.json', 'utf8');
        premiosFavoritas = data;
      } catch (err) {
        console.error(err);
      }
}