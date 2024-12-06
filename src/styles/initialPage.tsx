import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerAll:{
        flex: 1
    },
    container:{
        flex:1,
        backgroundColor: 'white',
        borderRadius: 15,
        margin: 5,
        borderWidth: 3,
        borderColor: 'red',
        elevation: 25,
        shadowColor: '#ff0000',
        padding: 10
    },
    info: {
        flexDirection: 'row',
        height: '100%'
    },
    containerImg: {
        height: '98%',
        width: '18%',
        backgroundColor: 'white',
        borderRadius: 15,
        borderColor: 'red',
        borderWidth: 2,
        elevation: 15,
        shadowColor: 'red'
    },
    containerProps: {
        margin: 5,
        alignSelf: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    statusContainer: {
        backgroundColor: 'white',
        flex: 5,
        margin: 5,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: 'red',
        elevation: 25,
        shadowColor: '#ff0000',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    backButton:{
        margin: 25,
        backgroundColor: '#FF0000',
        width: 100,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 25,
        shadowColor: '#ff0000'
    },
    backButtonText:{
        color: 'white',
        fontWeight: 'bold',
    }

})

export default styles;