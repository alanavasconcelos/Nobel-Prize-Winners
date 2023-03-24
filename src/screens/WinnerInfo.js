import { View, Text, ImageBackground, ScrollView, Image, ActivityIndicator } from "react-native";
import { styles, colors } from "../../styles";
import { useEffect, useState } from "react";
import informa from "../functions/infos";
import { IconButton } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function WinnerInfo({ route, navigation }) {

    const [winnerData, setWinnerData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [starFilled, setStarFilled] = useState(false);

    useEffect(() => {
        informa(route.params.id).then((res) => {
            setWinnerData(res);
            setLoading(false);
        })
    }, [])

    return (
        <ImageBackground
            source={require('../../assets/medalBackground.png')}
            resizeMode="cover"
            style={styles.imageBackground}
        >
            <ScrollView contentContainerStyle={styles.scrollView}>
                {
                    loading ?
                        <ActivityIndicator size="large" color={colors.text} /> :
                        <View style={styles.box}>
                            <View style={styles.favWinners}>
                                <Ionicons.Button
                                    name={starFilled ? 'star' : 'star-outline'}
                                    style={{ size: 10, backgroundColor: '#1c1c1c' }}
                                    onPress={favoritar}></Ionicons.Button>
                            </View>
                            <View style={[styles.box, { flex: 1, flexDirection: 'row', marginTop: 15, borderBottomWidth: 0.5, borderColor: colors.text }]}>
                                <Image source={require("../../assets/nobelMedal.jpg")} style={styles.winnerIcon} />
                                <Text style={[styles.text, { fontSize: 32 }]}>{winnerData.name}</Text>
                            </View>
                            <View style={[styles.box, { flex: 1 }]}>
                                <Text style={[styles.text, { fontSize: 20 }]}>{winnerData.birthString}</Text>
                                <Text style={[styles.text, { fontSize: 20 }]}>{winnerData.birthDate}</Text>
                            </View>
                            <View style={[styles.box, { flex: 3 }]}>
                                <Text style={[styles.text, { fontSize: 20, textAlign: 'left' }]}>Marie Curie was a pioneering physicist and chemist who lived from 1867 to 1934. She was the first woman to win a Nobel Prize, the first person to win two Nobel Prizes in different fields, and the first female professor at the University of Paris. Curie is best known for her pioneering work on radioactivity, which she discovered with her husband, Pierre Curie. </Text>
                            </View>
                        </View>
                }

            </ScrollView>
        </ImageBackground>
    );
}


//<IconButton icon={starFilled ? 'star' : 'star-outline'} color='#ffffff'size={40}onPress={() => setStarFilled(!starFilled)}/>