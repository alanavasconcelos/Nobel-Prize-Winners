import { View } from 'react-native';
import Background from "../components/Background";
import CreateCard from "../components/Cards";
import { readPrizes } from '../functions/localStorage';
import { useEffect, useState } from 'react';

export default function FavouritesScreen() {
    
    const [favorites, setFavorites] = useState(null);

    useEffect(() => {
        readPrizes().then((prize) => setFavorites(prize));
    })
    
    return (
        <Background title="Favorites">
            <View style={{ flex: 1, paddingBottom: 30 }}>
            {
                favorites && 
                favorites.map((favorite, idx) => <CreateCard nobelObject={favorite} key = {idx} onPress/>)
            }
            </View>
        </Background>
    );
}