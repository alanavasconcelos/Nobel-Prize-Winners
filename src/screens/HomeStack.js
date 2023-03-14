import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home';
import WinnersByCategory from './WinnersByCategory';
import CardInfo from './CardInfo';
import WinnersInfo from './WinnersInfo';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTransparent: true,
                headerTitle: "",
                headerTintColor: 'white',
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="WinnersByCategory" component={WinnersByCategory} />
            <Stack.Screen name="CardInfo" component={CardInfo} />
            <Stack.Screen name="WinnersInfo" component={WinnersInfo} />
        </Stack.Navigator>
    );
}