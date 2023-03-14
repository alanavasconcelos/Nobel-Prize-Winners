import { View, Text } from "react-native";
import Background from "../components/Background";
import { styles } from "../../styles";

export default function WinnersInfo() {
    return (
        <Background title = "Winners info">
            <View style = {styles.box} >
                <Text style = {styles.text}>Winners Info</Text>
            </View>
        </Background>
    );
}