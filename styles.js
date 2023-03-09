import { StyleSheet } from "react-native";

const colors = {
    primaryDark: '#1C1C1C',
    text: '#D4AF37',
    tabBar: '#313131',
    cardbck: '#3e403e',
    textCard: '#ffffff'
    
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
    },
    box2:{
        flex: 1, 
        resizeMode:'repeat',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    cardContainer: {
        height: 120,
        width: 298,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 6,
        marginRight: 20,
        backgroundColor:colors.cardbck,

    },

    textCard: { 
        color: colors.textCard, 
        textAlign: 'right',  
        marginLeft: 110,
        fontSize: 13,
        marginTop: 57,
    },
    iconCard: {
        flex: 1, 
        flexDirection: 'row', 
        alignItems: "space-around", 
        marginBottom: 105, 
        width: '80%', 
    },

  });

export {styles, colors}
