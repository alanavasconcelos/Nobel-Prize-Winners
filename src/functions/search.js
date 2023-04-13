import prizes from "./data/prizes";

var stringSimilarity = require("string-similarity");

const searchPrizes = (query) => {
    let myPrizes = prizes.nobelPrizes
    myPrizes.sort((a, b) =>
        //console.log("String a: " + stringifyPrize(a) + " " + stringSimilarity.compareTwoStrings(stringifyPrize(a), query));
        //console.log("String b: " + stringifyPrize(b) + " " + stringSimilarity.compareTwoStrings(stringifyPrize(b), query));
        stringSimilarity.compareTwoStrings(stringifyPrize(b), query)
        - stringSimilarity.compareTwoStrings(stringifyPrize(a), query)
    )
    return myPrizes
}

const stringifyPrize = ({ awardYear, category, laureates }) =>
    //`${awardYear} ${category} ${laureates.map(laur => laur.knownName.en).join(", ")}`
    `${awardYear} ${category.en}`

export { searchPrizes }