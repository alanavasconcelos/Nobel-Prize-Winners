import { View, Text, ImageBackground } from 'react-native';
import Background from "../components/Background";
import CreateCard from "../components/Cards";

export default function FavouritesScreen() {
    return (
        <Background title="Favorites">
          <View>
            <CreateCard />
          </View>
        </Background>
    );
}