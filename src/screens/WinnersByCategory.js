import Background from "../components/Background";
import { useState, useEffect } from "react";
import { filterByCategory } from "../functions/filtro";
import { Text, ActivityIndicator, View } from "react-native";
import CreateCard from "../components/Cards";
import { styles, colors } from "../../styles";

export default function WinnersByCategory({ route, navigation }) {

    const { category, imageSource } = route.params;
    const [nobels, setNobels] = useState(null);

    useEffect(() => {
        filterByCategory(category).then((res) => setNobels(res.slice(0, 10)));
    }, [])

    const getNobelObject = (nobel) => {
        return {
            year: getYear(nobel),
            laureates: getLaureates(nobel),
            laureatesString: getLaureatesString(nobel),
            motivation: getMotivation(nobel),
            category: category,
            image: imageSource,
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
                obj.name = laur.knownName.en;
                obj.id = laur.id
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
                                nobelObject={getNobelObject(nobel)} key = {idx}
                                onPress={() => navigation.navigate("PrizeInfo", {nobelObject: getNobelObject(nobel)})}
                            />
                        ) :
                        <View style={{ height: "100%", justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator size="large" color={colors.text}/>
                        </View>
                }
            </View>
        </Background>
    );
}