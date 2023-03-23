import { View, Text, } from "react-native";
import { colors, styles } from "../../styles";
import TextCard from "../components/TextCard";
import { IconButton } from 'react-native-paper';
import { useState } from "react";


export default function WinnersInfo({ route, navigation }) {
    const { year, laureates, motivation, category } = route.params

    const [starFilled, setStarFilled] = useState(false);

    return (
        <View style={[styles.box2, { justifyContent: "space-around" }]}>
            <View style={[styles.box2, { paddingHorizontal: 20 }]} >
                <View style={styles.fav}>
                    <IconButton
                        icon={starFilled ? 'star' : 'star-outline'}
                        color='#ffffff'
                        size={40}
                        onPress={() => setStarFilled(!starFilled)}
                    />
                </View>

                <Text style={styles.titleWinner}>{category + " Nobel Prize" + " - " + year}</Text>
                <Text style={styles.text2}>{motivation}</Text>
            </View>
            <View style={[styles.box2, { rowGap: 20 }]}>
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
        </View>

    );
}
