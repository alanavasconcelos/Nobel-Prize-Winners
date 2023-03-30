import {Pressable, Text} from 'react-native'
import { colors, styles } from '../../styles';

export default function TextCard({text, onPress, style}) {
    return (
        <Pressable style = {[styles.textCard, style]} onPress = {onPress}>
            <Text style = {[styles.text, {fontSize: 16}]}>{text}</Text>
        </Pressable>
    );
}