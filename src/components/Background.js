import { View, Text, ImageBackground } from 'react-native';
import { styles } from '../../styles';

export default function Background({ children, title }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/home.png')} style={styles.imageBackground} resizeMode='repeat'>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.background}>
                    {children}
                </View>
            </ImageBackground>
        </View>
    );
}