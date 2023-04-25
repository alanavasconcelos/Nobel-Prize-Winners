import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favorites from './Favorites'
import PrizeInfo from './PrizeInfo'
import WinnersInfo from './PrizeInfo';

const Stack = createNativeStackNavigator();

export default function FavoritesStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTransparent: true,
                headerTitle: "",
                headerTintColor: 'white',
            }}
        >
            <Stack.Screen name="Favorites" component={Favorites} />
            <Stack.Screen name="WinnersInfo" component={WinnersInfo} />
            <Stack.Screen name="PrizeInfo" component={PrizeInfo} />
        </Stack.Navigator>
    );
}