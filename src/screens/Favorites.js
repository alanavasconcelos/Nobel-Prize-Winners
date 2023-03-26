import { View } from 'react-native';
import Background from "../components/Background";
import CreateCard from "../components/Cards";
import { readPrizes } from '../functions/localStorage';
import { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors, styles } from "../../styles";

export default function FavouritesScreen() {

    const [favorites, setFavorites] = useState(null);
    const [starFilled, setStarFilled] = useState(false);

    useEffect(() => {
        readPrizes().then((prize) => setFavorites(prize));
    })

    return (
        <Background title="Favorites">
            <View style={styles.iconePagFav}>
                <Ionicons.Button
                    name={starFilled ? 'person-outline' : 'person-outline'}
                    style={{ size: 10, backgroundColor: colors.primaryDark}}>
                </Ionicons.Button>
            </View>
            <View style={styles.iconePagFav}>
               <Ionicons.Button
                    name={starFilled ? 'trophy-outline' : 'trophy-outline'}
                    style={{ size: 10, backgroundColor: colors.primaryDark }}>
                </Ionicons.Button>
            </View>
            <View style={{ flex: 1, paddingBottom: 30 }}>
                {
                    favorites &&
                    favorites.map((favorite, idx) => <CreateCard nobelObject={favorite} key={idx} onPress />)
                }
            </View>
        </Background>
    );
}

