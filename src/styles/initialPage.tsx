import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        height: '20%',
        backgroundColor: 'grey',
        borderRadius: 15,
        margin: 5,
        borderWidth: 3,
        borderColor: 'white',
        elevation: 15,
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
    }

})

export default styles;