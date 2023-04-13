import prizes from "./data/prizes";

var stringSimilarity = require("string-similarity");

const searchPrizes = (query) => 
    prizes.nobelPrizes.sort((a, b) =>
        stringSimilarity.compareTwoStrings(stringifyPrize(b), query)
        - stringSimilarity.compareTwoStrings(stringifyPrize(a), query)
    ).slice(0, 10);

const stringifyPrize = ({ awardYear, category, laureates }) =>
    //`${awardYear} ${category} ${laureates.map(laur => laur.knownName.en).join(", ")}`
    `${awardYear} ${category.en}`

export { searchPrizes }