import { View, Text } from "react-native";
import Background from "../components/Background";
import { styles } from "../../styles";

export default function WinnersInfo({route}) {
    const {year, laureates, motivation} = route.params
    
    return (
            <View style = {styles.box2} >
                <Text style = {styles.titleWinner}>{laureates + " - " + year}</Text>
                <Text style = {styles.text2}>{motivation}</Text>
            </View>
    );
}