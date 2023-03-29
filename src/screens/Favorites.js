import { TouchableOpacity, View } from 'react-native';
import Background from "../components/Background";
import CreateCard from "../components/Cards";
import { readPrizes } from '../functions/localStorage';
import { useEffect, useState } from 'react';
import { colors, styles } from "../../styles";
import Icon from 'react-native-vector-icons/Ionicons';

export default function FavouritesScreen() {

    const [favorites, setFavorites] = useState(null);
    const [isPressed, setIsPressed] = useState(false);
    const [isPressed2, setIsPressed2] = useState(false);

    useEffect(() => {
        readPrizes().then((prize) => setFavorites(prize));
    })

    const handlePress = () => {
        setIsPressed(!isPressed);
        setIsPressed2(false);
    };
    const handlePress2 = () => {
        setIsPressed(false);
        setIsPressed2(!isPressed2);
        
    };

    return (
        <Background title="Favorites">
            <View style={styles.iconePagFav}>
            <TouchableOpacity onPress={handlePress} style={styles.iconePagFav}>
                    <View style={[styles.circle, { backgroundColor: isPressed ? colors.text : 'transparent' },]}>
                        <Icon name="person-outline" size={28} color="white" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePress2} style={styles.iconePagFav}>
                    <View style={[styles.circle, { backgroundColor: isPressed2 ?  colors.text : 'transparent' },]}>
                        <Icon name="trophy-outline" size={28} color="white" />
                    </View>
                </TouchableOpacity>
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

