import Background from "../components/Background";
import { countGender, countCountries } from "../functions/filtro";
import { Text, View } from "react-native";
import { colors } from "../../styles";

export default function Statistics() {

    let genders = countGender();
    let countries = Object.entries(countCountries()).slice(0, 5);

    return (
        <Background title="Statistics">
            <View style={{ backgroundColor: 'black', padding: 20, borderRadius: 25, justifyContent: 'space-around', width: '70%', alignItems: "center", marginTop: 20, borderWidth: 0.5, borderColor: colors.text }}>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 20, color: colors.text, fontFamily: 'Julius Sans One' }}>{genders.male + " men"}</Text>
                    <Text style={{ fontSize: 15, color: colors.textSub, fontFamily: 'Julius Sans One' }}>won the nobel</Text>
                </View>
                <View style={{ marginTop: 20, marginBottom: 20 }}>
                    <Text style={{ fontSize: 20, color: colors.text, fontFamily: 'Julius Sans One' }}>{genders.female + " women"}</Text>
                    <Text style={{ fontSize: 15, color: colors.textSub, fontFamily: 'Julius Sans One' }}>won the nobel</Text>
                </View>
            </View>
            <View style={{ backgroundColor: 'black', padding: 20, borderRadius: 25, justifyContent: 'space-around', width: '70%', alignItems: "center", marginTop: 30, marginBottom: 20, borderWidth: 0.5, borderColor: colors.text }}>
                <Text style={{ fontSize: 20, color: colors.textSub, fontFamily: 'Julius Sans One', alignItems: "center" }}>Top 5</Text>
                {countries.map((country, idx) =>
                    <View style={{ marginTop: 20 }} key = {idx}>
                        <Text style={{ fontSize: 20, color: colors.text, fontFamily: 'Julius Sans One' }}>{country[0]}</Text>
                        <Text style={{ fontSize: 15, color: colors.textSub, fontFamily: 'Julius Sans One' }}>{`won ${country[1]} nobel prizes`}</Text>
                    </View>
                )}
            </View>
        </Background>
    );
}