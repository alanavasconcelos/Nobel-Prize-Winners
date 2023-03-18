import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home';
import WinnersByCategory from './WinnersByCategory';
import WinnerInfo from './WinnerInfo';
import PrizeInfo from './PrizeInfo';

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
            <Stack.Screen name="WinnerInfo" component={WinnerInfo} />
            <Stack.Screen name="PrizeInfo" component={PrizeInfo} />
        </Stack.Navigator>
    );
}