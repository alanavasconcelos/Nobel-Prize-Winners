import { View, Text, ImageBackground } from 'react-native';
import Background from "../components/Background";
import CreateCard from "../components/Cards";

export default function FavouritesScreen() {
    return (
        <Background title="Favorites">
          <View>
            <CreateCard text = "1943 - OTTO STERNPOR Contribuições no desenvolvimento do método do raio molecular e pela descoberta do momento magnético do próton."/>
          </View>
        </Background>
    );
}