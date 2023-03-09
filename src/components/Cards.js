import React from "react";
import { Text ,View, StyleSheet, ImageBackground , Image} from 'react-native';
import {Card, Button , Title ,Paragraph } from 'react-native-paper';
import { styles } from '../../styles';
import iconMedicine from '../../assets/categoryIcons/iconMedicine.png'
import iconLiterature from '../../assets/categoryIcons/iconLiterature.png'
import iconPhysics from '../../assets/categoryIcons/iconPhysics.png'


const CreateCard = () => {
	
	return(
		
	 <Card style={styles.cardContainer}>
		 <ImageBackground 
		 source={require('../../assets/cardBackground.png')} 
		 style={{flex: 1, resizeMode:'cover',justifyContent: 'center',width: '100%',marginLeft:0.1}}
		 imageStyle={{borderRadius:15}}>
		 <Card.Content>
			 <Text style={[styles.textCard]}>1943 - OTTO STERNPOR Contribuições no desenvolvimento do método do raio molecular e pela descoberta do momento magnético do próton.</Text>
		          <View style={styles.iconCard}>
                      <Image source={iconPhysics} style={{ width: 100, height: 100 }} />
                  </View>  
           </Card.Content>
		</ImageBackground>
	 </Card>
		
	)
}
export default CreateCard;


