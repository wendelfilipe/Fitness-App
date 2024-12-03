import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./RootStackParamList";

export type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>

export type Props = {
    navigation: LoginScreenNavigationProp;
}