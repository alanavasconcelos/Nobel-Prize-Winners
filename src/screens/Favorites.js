import { TouchableOpacity, View } from 'react-native';
import Background from "../components/Background";
import CreateCard from "../components/Cards";
import { readPrizes, readLaureates } from '../functions/localStorage';
import { useEffect, useState } from 'react';
import { colors, styles } from "../../styles";
import Icon from 'react-native-vector-icons/Ionicons';
import TextCard from '../components/TextCard';
import { useIsFocused } from '@react-navigation/native';

export default function FavouritesScreen({navigation}) {

    const isFocused = useIsFocused();

    const [favorites, setFavorites] = useState(null);
    const [isPressed, setIsPressed] = useState(true);
    const [isPressed2, setIsPressed2] = useState(false);
    const [favoriteLaureates, setFavoriteLaureates] = useState(null)


    useEffect(() => {
        readPrizes().then((prize) => setFavorites(prize));
    }, [isFocused])

    useEffect(() => {
        readLaureates().then((laureates) => setFavoriteLaureates(laureates));
    }, [isFocused])

    const handlePress = () => {
        setIsPressed(true);
        setIsPressed2(false);
    };
    const handlePress2 = () => {
        setIsPressed(false);
        setIsPressed2(true);
        
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
            <View style={{ flex: 1, paddingBottom: 30, width: "65%", alignItems: 'center' }}>
                {
                    (favorites && isPressed2) &&
                    favorites.map((favorite, idx) => <CreateCard nobelObject={favorite} key={idx} onPress = {() => navigation.navigate("PrizeInfo", {nobelObject: favorite})} />)
                }
                {
                    (favoriteLaureates && isPressed) &&
                    favoriteLaureates.map((favorite, idx) => <TextCard text={favorite.name} key = {idx} style ={{marginTop: 30}} onPress = {() => navigation.navigate("WinnerInfo", {id: favorite.id})}/>)
                }
            </View>
        </Background>
    );
}

