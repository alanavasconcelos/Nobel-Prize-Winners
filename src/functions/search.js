import prizes from "./data/prizes";

var stringSimilarity = require("string-similarity");

const searchPrizes = (query) => 
    prizes.nobelPrizes.sort((a, b) =>
        stringSimilarity.compareTwoStrings(stringifyPrize(b), query)
        - stringSimilarity.compareTwoStrings(stringifyPrize(a), query)
    ).slice(0, 10);

const stringifyPrize = ({ awardYear, category, laureates }) => {
    let laureatesString = ""
    try {
        laureatesString = laureates.map(laur => laur.knownName.en).join(", ")
        return `${awardYear} ${category.en} ${laureatesString}`
    } catch (error) {
        console.log("Error in laureate: " + error)
    }
    return `${awardYear} ${category.en}`
}

export { searchPrizes }