import { Text, View, Image } from 'react-native';
import iconMedicine from './assets/categoryIcons/iconMedicine.png'
import iconPhysics from './assets/categoryIcons/iconPhysics.png'
import iconPeace from './assets/categoryIcons/iconPeace.png'
import iconLiterature from './assets/categoryIcons/iconLiterature.png'
import iconChemistry from './assets/categoryIcons/iconChemistry.png'
import iconEconomics from './assets/categoryIcons/iconEconomics.png'
import { styles, colors } from './styles.js'
import { Searchbar } from 'react-native-paper';

function HomePageContent() {

    const iconPairs = [[iconMedicine, iconPhysics], [iconPeace, iconLiterature], [iconChemistry, iconEconomics]]

    return (
        <View style = {styles.box}>
            <View style = {[styles.box, {width: '70%'}]}>
                <Searchbar style = {{backgroundColor: colors.tabBar}} inputStyle = {{color: 'white'}} iconColor = {colors.text}/>
            </View>
            <View style={[styles.box, { flex: 4 }]}>
                {
                    iconPairs.map(iconPair =>
                        <View style={styles.iconRow}>
                            <Image source={iconPair[0]} style={{ width: 100, height: 100 }} />
                            <Image source={iconPair[1]} style={{ width: 100, height: 100 }} />
                        </View>
                    )
                }
            </View>
        </View>

    );
}

export default HomePageContent