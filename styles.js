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
        fontSize: 30,
        overflow : "hidden",
    },
   
    text: { 
        color: colors.text, 
        fontFamily: 'Italiana',
        textAlign: 'center',  
    },

    container: {
        flex: 10,
        flexDirection: "column",
        height:'80%',
       
      },
     

    background: { 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: colors.primaryDark,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        width:'100%',
        height: '100%', 
    },

    imageBackground: {
        flex: 2,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        color: colors.primaryDark,
        paddingTop: 90,
      }

  });

export {styles, colors}
