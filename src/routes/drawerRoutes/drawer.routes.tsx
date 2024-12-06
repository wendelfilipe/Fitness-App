import { createDrawerNavigator } from "@react-navigation/drawer";
import TabRoutes from "../tabRoutes/tab.routes";
import { RootStackParamList } from "../../typescript/RootStackParamList";

const Drawer = createDrawerNavigator<RootStackParamList>();

const DrawerRoutes: React.FC = () => {
    return(
        <Drawer.Navigator
            screenOptions={{
                headerShadowVisible: false
            }}
        >
            <Drawer.Screen
                name="TabRoutes"
                component={TabRoutes}
                options={{
                    title: 'Fitness App',
                    headerTitleAlign: 'center'
                }}
            >
            </Drawer.Screen>
        </Drawer.Navigator>
    )
}

export default DrawerRoutes;