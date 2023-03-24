import { View, Text, } from "react-native";
import { colors, styles } from "../../styles";
import TextCard from "../components/TextCard";
import { IconButton } from 'react-native-paper';
import { useState, useEffect } from "react";
//import { salvaPremios, favoritaPremio, checaPremioFavorito } from "../functions/salvamento";
import { appendToPrizes, readPrizes, isInPrizes } from "../functions/localStorage";

export default function WinnersInfo({ route, navigation }) {

    const { nobelObject } = route.params 
    const { year, laureates, motivation, category } = route.params.nobelObject
    const [starFilled, setStarFilled] = useState(false);

    useEffect(() => {
        isInPrizes(nobelObject).then(res => setStarFilled(res))
    }, [])

    const favoritar = () => {
        setStarFilled(!starFilled)
        appendToPrizes(nobelObject).then(readPrizes).then((prize) => console.log(JSON.stringify(prize)))
    }

    return (
        <View style={[styles.box2, { justifyContent: "space-around" }]}>
            <View style={[styles.box2, { flex: 2, paddingHorizontal: 20 }]} >
                <View style={styles.favWinners}>
                        <IconButton
                            icon={starFilled ? 'star' : 'star-outline'}
                            color='#ffffff'
                            size={40}
                            onPress={favoritar}
                        />
                </View>
                <Text style={styles.titleWinner}>{category + " Nobel Prize" + " - " + year}</Text>
                <Text style={styles.text2}>{motivation}</Text>
            </View>
            {
                laureates &&
                <View style={[styles.box2, { flex: 1, rowGap: 20, paddingBottom: 50 }]}>
                    <Text style={[styles.text, { fontSize: 25 }]}>Laureates</Text>
                    {
                        laureates.map(laureate =>
                            <TextCard
                                text={laureate.name}
                                onPress={() => navigation.navigate("WinnerInfo", { id: laureate.id })}
                            />
                        )
                    }
                </View>
            }
        </View>
    );
}
