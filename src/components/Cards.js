import React from "react";
import { Text, View, ImageBackground, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { colors, styles } from '../../styles';

const CreateCard = ({ nobelObject, onPress }) => {

	const { year, laureatesString, motivation, image } = nobelObject;

	return (

		<Card style={styles.cardContainer} onPress={onPress}>
			<ImageBackground
				source={require('../../assets/home.png')}
				style={{ flex: 1, resizeMode: 'repeat', justifyContent: 'center' }}
				imageStyle={{ borderRadius: 15 }}>
				<Card.Content>
					<Text numberOfLines={3} style={{ color: colors.textCard, fontSize: 13, marginTop: 57, marginLeft: 100, width: 150 }}>
						{`${year} - ${laureatesString} - ${motivation}`}
					</Text>
					<View style={styles.iconCard}>
						<Image source={image} style={{ width: 90, height: 90, marginEnd: 10 }} />
					</View>
				</Card.Content>
			</ImageBackground>
		</Card>

	)
}
export default CreateCard;



