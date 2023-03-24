import { StyleSheet } from "react-native";

const colors = {
    primaryDark: '#1C1C1C',
    text: '#D4AF37',
    tabBar: '#313131',
    cardbck: '#3e403e',
    textCard: '#ffffff',
    iconFav: '#D4AF37',

}

const styles = StyleSheet.create({
    title: {
        color: colors.text,
        fontFamily: 'Italiana',
        textAlign: 'center',
        //fontWeight: "bold",
        fontSize: 32,
        overflow: "hidden",
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
        height: '80%',
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
        width: '100%',
    },

    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
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

    cardContainer: {
        height: 120,
        width: '100%',
        alignItems: 'center',
        borderRadius: 15,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        backgroundColor: colors.cardbck,
    },

    textCard: {
        color: colors.textCard,
        textAlign: 'right',
        fontSize: 13,
        marginTop: 57,
        marginLeft: 100,

    },
    iconCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        marginBottom: 100,
        //width: '100%',

    },
    box2: {
        backgroundColor: colors.primaryDark,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    titleWinner: {
        color: colors.textCard,
        fontSize: 25,
        marginEnd: 200,
        marginBottom: 20,
        marginTop: 60,
        fontFamily: "Italiana",
        color: colors.text
    },
    text2: {
        color: colors.textCard,
        textAlign: 'left',
        alignItems: 'center',
        fontSize: 17,
        width: '100%',
        letterSpacing: 0.8,
        marginLeft: 5,
        fontFamily: "Italiana",
        color: colors.text
    },

    textCard: {
        width: "80%",
        height: 72,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderWidth: 1,
        borderColor: colors.text,
        borderRadius: 25,
    },

    winnerIcon: {
        width: 60, 
        height: 60, 
        marginRight: 20,
        borderRadius: 50,
        borderWidth: 0,
        borderColor: colors.text,
    },
    fav:{
        width:'100%',
        alignItems:'flex-end',
    },
    favWinners:{
        width:'100%',
        alignItems:'flex-end',
        marginTop:30,
    }
});

export { styles, colors }
