import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { Props } from "../typescript/LoginScreenNavigationProp";
import form from "../styles/form/form";

const Login: React.FC<Props> = ({ navigation }) => {

    function clickLogin(){
        navigation.navigate('DrawerRoutes')
    }

    return(
        <View style={form.container}>
            <View style={form.form}>
                <View>
                    <Text style={form.formText}>Email</Text>
                    <TextInput style={form.formInput}/>
                </View>
                <View>
                    <Text style={form.formText}>Password</Text>
                    <TextInput style={form.formInput}/>
                </View>
                <View style={form.buttonContainer}>
                    <TouchableOpacity style={form.formButton} onPress={clickLogin}>
                        <Text style={form.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={form.formButton} onPress={clickLogin}>
                        <Text style={form.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    )
}

export default Login;