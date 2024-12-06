import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
      },
      containerMap:{
        height: '80%',
        width: '90%',
        margin: 5,
        borderWidth: 3,
        borderColor: 'red',
        borderRadius: 5,
        elevation: 10,
        shadowColor: 'red'
        
      },
      map: {
        flex: 1
      },
      indicator: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center"
      },
      containerButton:{
        alignItems: 'center',
        justifyContent: 'center'
      },
      buttonClean:{
        margin: 5,
        padding: 10,
        backgroundColor: '#ff3b1f',
        borderRadius: 10,
        elevation: 25,
        shadowColor: '#ff0000',
      },
      buttonCleanText: {
        color: 'white',
        fontWeight: 'bold'
      }
})

export default styles;