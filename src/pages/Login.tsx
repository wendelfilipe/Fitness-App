import { Button, Text, View } from "react-native";
import React from "react";
import { Props } from "../typescript/LoginScreenNavigationProp";


const Login: React.FC<Props> = ({ navigation }) => {

    function clickLogin(){
        navigation.navigate('TabRoutes')
    }

    return(
        <View>
            <Text>Login</Text>
            <Button title='Login' onPress={() => clickLogin()}/>
        </View>
    )
}

export default Login;