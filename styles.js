import { StyleSheet } from "react-native";

const colors = {
    primaryDark: '#1C1C1C',
    text: '#D4AF37',
    tabBar: '#313131'
}
  
const styles = StyleSheet.create({
    title: {
        color: colors.text, 
        fontFamily: 'Italiana',
        textAlign: 'center',
        fontWeight: "bold",
        fontSize:30,
        overflow : "hidden",
    },
   
    text: { 
        color: colors.text, 
        fontFamily: 'Italiana',
        textAlign: 'center',  
    },

    container: {
        flex: 0.28,
        flexDirection: "column",
      },

    background: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: colors.primaryDark,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        width: '100%',
        height: '100%',
        position: 'absolute',
    },

    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        
       
        
      }

  });

export {styles, colors}
