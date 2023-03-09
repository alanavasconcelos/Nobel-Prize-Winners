import Background from "../components/Background";
import { useState, useEffect } from "react";
import { filterByCategory } from "../functions/filtro";
import { Text, ActivityIndicator, View } from "react-native";
import CreateCard from "../components/Cards";
import { styles } from "../../styles";

export default function WinnersByCategory({ route }) {

    const { category } = route.params;
    const [nobels, setNobels] = useState(null);

    useEffect(() => {
        filterByCategory(category).then((res) => setNobels(res.slice(0, 10)));
    })

    const getYear = (nobel) => {
        try {
            return nobel.awardYear;
        } catch (error) {
            return null;
        }
    }

    const getLaureates = (nobel) => {
        try {
            return nobel.laureates.map(laur => laur.knownName.en).join(", ");
        } catch (error) {
            return null
        }
    }

    const getMotivation = (nobel) => {
        try {
            return nobel.laureates[0].motivation.en;
        } catch (error) {
            return null
        }
    }

    return (
        <Background title={category}>
            <View style={{ flex: 1, paddingBottom: 30 }}>
                {
                    nobels ?
                        nobels.map((nobel, idx) =>
                            <CreateCard
                                text={`${getYear(nobel)} - ${getLaureates(nobel)} - ${getMotivation(nobel)}`} key={idx} />
                        ) : <ActivityIndicator style = {{marginTop: 60}}/>
                }
            </View>
        </Background>
    );
}