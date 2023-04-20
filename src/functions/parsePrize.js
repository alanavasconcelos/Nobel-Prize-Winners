import iconMedicine from '../../assets/categoryIcons/iconMedicine.png'
import iconPhysics from '../../assets/categoryIcons/iconPhysics.png'
import iconPeace from '../../assets/categoryIcons/iconPeace.png'
import iconLiterature from '../../assets/categoryIcons/iconLiterature.png'
import iconChemistry from '../../assets/categoryIcons/iconChemistry.png'
import iconEconomics from '../../assets/categoryIcons/iconEconomics.png'


const categoryIcons = {
    "Physiology or Medicine": iconMedicine,
    "Chemistry": iconChemistry,
    "Literature": iconLiterature,
    "Physics": iconPhysics,
    "Peace": iconPeace,
    "Economic Sciences": iconEconomics,
}

export default parseNobelObject = (nobel) => {
    return {
        year: getYear(nobel),
        laureates: getLaureates(nobel),
        laureatesString: getLaureatesString(nobel),
        motivation: getMotivation(nobel),
        category: nobel.category.en,
        image: categoryIcons[nobel.category.en],
    }
}

const getYear = (nobel) => {
    try {
        return nobel.awardYear;
    } catch (error) {
        return null;
    }
}

const getLaureates = (nobel) => {
    try {
        return nobel.laureates.map(laur => {
            const obj = new Object();
            obj.name = laur.knownName? laur.knownName.en: laur.orgName.en;
            obj.id = laur.id
            obj.isPerson = laur.knownName? true: false;
            return obj;
        });
    } catch (error) {
        return null
    }
}

const getLaureatesString = (nobel) => {
    try {
        return getLaureates(nobel).map(laur => laur.name).join(", ")
    } catch (error) {
        return null
    }
}

const getMotivation = (nobel) => {
    try {
        if(nobel.topMotivation) return nobel.topMotivation.en
        return nobel.laureates[0].motivation.en;
    } catch (error) {
        return null
    }
}
