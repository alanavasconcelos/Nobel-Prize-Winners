import Background from "../components/Background";
import { useState, useEffect } from "react";
import { filterByCategory } from "../functions/filtro";
import { Text, ActivityIndicator, View } from "react-native";
import CreateCard from "../components/Cards";
import { styles, colors } from "../../styles";
import parsePrize from "../functions/parsePrize";

export default function WinnersByCategory({ route, navigation }) {

    const { category } = route.params;
    const [nobels, setNobels] = useState(null);

    useEffect(() => {
        filterByCategory(category).then((res) => setNobels(res));
    }, [])

    return (
        <Background title={category}>
            <View style={{ flex: 1, paddingBottom: 30 }}>
                {
                    nobels ?
                        nobels.map((nobel, idx) =>
                            <CreateCard
                                nobelObject={parsePrize(nobel)} key = {idx}
                                onPress={() => navigation.navigate("PrizeInfo", {nobelObject: parsePrize(nobel)})}
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