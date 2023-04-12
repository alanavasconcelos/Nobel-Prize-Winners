import Background from "../components/Background";
import { countCategories, countCountries } from "../functions/filtro";
import { Text, View } from "react-native";
import { colors } from "../../styles";
export default function Statistics() {

    return (
        <Background title="Statistics">
            <View style={{ backgroundColor: 'black', padding: 20, borderRadius: 25, justifyContent: 'space-around',width:'70%',alignItems:"center", marginTop: 20,borderWidth:0.5,borderColor:colors.text }}>
                <View style = {{marginTop: 20}}>
                    <Text style={{ fontSize: 20, color: colors.text, fontFamily: 'Julius Sans One' }}>62 mulheres</Text>
                    <Text style={{ fontSize: 15, color: colors.textSub, fontFamily: 'Julius Sans One' }}>ganharam o nobel</Text>
                </View>
                <View style = {{marginTop: 20, marginBottom: 20}}>
                    <Text style={{ fontSize: 20, color: colors.text, fontFamily: 'Julius Sans One' }}>900 homens</Text>
                    <Text style={{ fontSize: 15, color: colors.textSub, fontFamily: 'Julius Sans One' }}>ganharam o nobel</Text>
                </View>
            </View>
            <View style={{ backgroundColor: 'black', padding: 20, borderRadius: 25, justifyContent: 'space-around',width:'70%',alignItems:"center", marginTop: 30, marginBottom: 20,borderWidth:0.5,borderColor:colors.text}}>
                    <Text style={{ fontSize: 20, color: colors.textSub, fontFamily: 'Julius Sans One', alignItems:"center"}}>Top 5</Text>
            <View style = {{marginTop: 20}}>
                    <Text style={{ fontSize: 20, color: colors.text, fontFamily: 'Julius Sans One' }}>USA</Text>
                    <Text style={{ fontSize: 15, color: colors.textSub, fontFamily: 'Julius Sans One' }}>won 386 nobel prizes</Text>
                </View>
                <View style = {{marginTop: 20}}>
                    <Text style={{ fontSize: 20, color: colors.text, fontFamily: 'Julius Sans One' }}>United Kingdom</Text>
                    <Text style={{ fontSize: 15, color: colors.textSub, fontFamily: 'Julius Sans One' }}>won 132 nobel prizes</Text>
                </View>
                <View style = {{marginTop: 20}}>
                    <Text style={{ fontSize: 20, color: colors.text, fontFamily: 'Julius Sans One' }}>Germany</Text>
                    <Text style={{ fontSize: 15, color: colors.textSub, fontFamily: 'Julius Sans One' }}>won 109 nobel prizes</Text>
                </View>
                <View style = {{marginTop: 20}}>
                    <Text style={{ fontSize: 20, color: colors.text, fontFamily: 'Julius Sans One' }}>France</Text>
                    <Text style={{ fontSize: 15, color: colors.textSub, fontFamily: 'Julius Sans One' }}>won 69 nobel prizes</Text>
                </View>
                <View style = {{marginTop: 20, marginBottom: 20}}>
                    <Text style={{ fontSize: 20, color: colors.text, fontFamily: 'Julius Sans One' }}>Sweden</Text>
                    <Text style={{ fontSize: 15, color: colors.textSub, fontFamily: 'Julius Sans One' }}>won 33 nobel prizes</Text>
                </View>
            </View>
        </Background>
    );
}