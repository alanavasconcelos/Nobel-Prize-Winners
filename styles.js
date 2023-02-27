import { StyleSheet } from "react-native";

const colors = {
    primaryDark: '#1C1C1C',
    text: '#D4AF37',
    tabBar: '#455A64'
}
  
const styles = StyleSheet.create({
    text: { 
        color: colors.text, 
        fontFamily: 'Italiana'
    },

    background: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: colors.primaryDark
    },

  });


export {styles, colors}
