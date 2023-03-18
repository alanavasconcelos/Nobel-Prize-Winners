import React from "react";
import { Text ,View, StyleSheet, ImageBackground , Image} from 'react-native';
import {Card, Button , Title ,Paragraph } from 'react-native-paper';
import { colors, styles } from '../../styles';
import iconMedicine from '../../assets/categoryIcons/iconMedicine.png'
import iconLiterature from '../../assets/categoryIcons/iconLiterature.png'
import iconPhysics from '../../assets/categoryIcons/iconPhysics.png'


const CreateCard = ({text, imageSource, onPress}) => {

	return(

	 <Card style={styles.cardContainer} onPress={onPress}>
		 <ImageBackground 
		 source={require('../../assets/home.png')} 
		 style={{flex: 1, resizeMode:'repeat',justifyContent: 'center'}}
		 imageStyle={{borderRadius:15}}>
		 <Card.Content>
			 <Text numberOfLines={3} style={{color:colors.textCard,fontSize: 13,marginTop: 57,marginLeft:100,width:150 }}>{text}</Text>
		          <View style={styles.iconCard}>
                      <Image source={imageSource} style={{ width: 90, height: 90,marginEnd:10 }} />
                  </View>  
           </Card.Content>
		</ImageBackground>
	 </Card>
		
	)
}
export default CreateCard;
		


