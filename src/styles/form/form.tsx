
import { StyleSheet } from "react-native";

const form = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    form: {
        width: '80%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 15,
        shadowColor: '#8B0000'
    },
    formInput:{
        borderWidth: 2,
        borderRadius: 10,
        margin: 3
    },
    formText: {
        margin: 3,
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'center'
    },
    formButton: {
        backgroundColor: '#FF3b1f',
        width: 100,
        height: 35,
        borderRadius: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    }
})

export default form;