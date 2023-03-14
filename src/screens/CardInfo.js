import { View, Text, Button } from "react-native";
import Background from "../components/Background";
import { styles } from "../../styles";

export default function CardInfo({navigation}) {
    return (
        <Background title = "Card info">
            <View style = {styles.box} >
                <Text style = {styles.text}>Card Info</Text>
                <Button title = "Ir para winners info" onPress={() => navigation.navigate("WinnersInfo")}/>
            </View>
        </Background>
    );
}