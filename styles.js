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
        //fontWeight: "bold",
        fontSize: 32,
        overflow : "hidden",
        marginTop: 70, 
        marginBottom: 35,
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
        flex: 5,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: colors.primaryDark,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderTopColor: colors.text,
        borderWidth: 0.5,
        width:'100%',
    },

    imageBackground: {
        flex: 2,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        color: colors.primaryDark,
      },

    box: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },

    iconRow: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: "space-around", 
        alignItems: "space-around", 
        marginBottom: 50, 
        width: '80%'
    }

  });

export {styles, colors}
