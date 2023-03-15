import { View, Text } from "react-native";
import Background from "../components/Background";
import { styles } from "../../styles";

export default function WinnersInfo() {
    return (
       
            <View style = {styles.box2} >
                <Text style = {styles.titleWinner}>OTTO STERN 1888-1969 Polônia</Text>
                <Text style = {styles.text2}>Otto Stern foi um físico alemão nascido em 17 de fevereiro de 1888 em Łódź, Polônia, e falecido em 17 de agosto de 1969 em Berkeley, Califórnia, EUA. Stern estudou física teórica na Universidade de Breslau e, mais tarde, na Universidade de Munique, onde obteve seu doutorado em 1912. Ele então passou vários anos trabalhando em diferentes instituições de pesquisa na Alemanha, incluindo a Universidade de Frankfurt e a Universidade de Hamburgo.Ele é conhecido por seus trabalhos pioneiros em espectroscopia molecular, teoria do átomo de hidrogênio e, mais notavelmente, pela sua contribuição à física nuclear experimental, incluindo a medida da carga elétrica do elétron e o desenvolvimento da técnica de separação de isótopos usando o método de Stern-Gerlach. Otto Stern foi agraciado com o Prêmio Nobel de Física em 1943, juntamente com seu colega físico americano, Isidor Rabi, por seu trabalho na ressonância magnética nuclear.</Text>
            </View>
            
   
    );
}