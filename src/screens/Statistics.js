import Background from "../components/Background";
import { countCategories, countCountries } from "../functions/filtro";
import { Text } from "react-native";

export default function Statistics() {
    
    return (
        <Background title = "Statistics">
            <Text style = {{color: 'white'}}>{"Categorias: " + JSON.stringify(countCategories())}</Text>
            <Text style = {{color: 'white'}}>{"Países: " + JSON.stringify(countCountries())}</Text>
        </Background>
    );
}