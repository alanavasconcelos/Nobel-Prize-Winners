import { View, Text, ImageBackground, ScrollView } from 'react-native';
import { styles, colors } from '../../styles';

export default function Background({ children, title }) {
    return (
        <View style={[styles.container, {backgroundColor: colors.primaryDark}]}>
            <ImageBackground source={require('../../assets/home.png')} style={styles.imageBackground} resizeMode='repeat'>
                <ScrollView style={{ flex: 1, width: '100%' }} contentContainerStyle={{ flexGrow: 1 }}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.background}>
                        {children}
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
}