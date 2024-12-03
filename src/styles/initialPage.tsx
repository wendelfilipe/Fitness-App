import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerAll:{
        flex: 1
    },
    container:{
        flex:1,
        backgroundColor: 'grey',
        borderRadius: 15,
        margin: 5,
        borderWidth: 3,
        borderColor: 'white',
        elevation: 25,
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
        backgroundColor: 'grey',
        flex: 5,
        margin: 5,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: 'white',
        elevation: 25
    }

})

export default styles;