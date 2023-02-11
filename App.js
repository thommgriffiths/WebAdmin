import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
//Docs de react native paper: https://callstack.github.io/react-native-paper/4.0/index.html
import { registerTranslation, enGB } from "react-native-paper-dates";

import LoginScreen from "./src/sharedScreens/LoginScreen";

//Pantallas administrador
import AdminHome from "./src/pantallasWebAdmin/HomeAdmin";
import AdminEstadosObra from "./src/pantallasWebAdmin/EstadosObra/EstadosObra";
import MenuAdministracionSistema from "./src/pantallasWebAdmin/AdministracionDelSistema/MenuAdministracionSistema";
import AdminReporteRapido from "./src/pantallasWebAdmin/ReporteContratistas/ReporteRapido";
import AdminMenuTareas from "./src/pantallasWebAdmin/Tareas/MenuTareas";
import AdminPedidosDeObraYMateriales from "./src/pantallasWebAdmin/Tareas/PedidosObraYMateriales";
import AdminPedidosDeReintegro from "./src/pantallasWebAdmin/Tareas/PedidosReintegro";
import AdminTodasTareas from "./src/pantallasWebAdmin/Tareas/TodasTareas";

//Componentes ABM datos maestros para admin
import AdminConsultarObras from "./src/pantallasWebAdmin/AdministracionDelSistema/Obra/ConsultarObras";
import AdminCrearObra from "./src/pantallasWebAdmin/AdministracionDelSistema/Obra/CrearObra";
import AdminConsultarRubros from "./src/pantallasWebAdmin/AdministracionDelSistema/Rubro/ConsultarRubros";
import AdminCrearRubro from "./src/pantallasWebAdmin/AdministracionDelSistema/Rubro/CrearRubro";
import AdminConsultarUsuarios from "./src/pantallasWebAdmin/AdministracionDelSistema/Usuarios/ConsultarUsuarios";

const Stack = createStackNavigator();

export default function App() {
  registerTranslation("en", enGB);
  return (
    <PaperProvider>
      <AppWithNavigation />
    </PaperProvider>
  );
}

const AppWithNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />

          <Stack.Screen
            options={{ headerShown: false }}
            name="AdminHomeScreen"
            component={AdminHome}
          />

          <Stack.Screen
            options={{ headerShown: false }}
            name="AdminEstadosObraScreen"
            component={AdminEstadosObra}
          />

          <Stack.Screen
            options={{ headerShown: false }}
            name="MenuAdministracionScreen"
            component={MenuAdministracionSistema}
          />

          <Stack.Screen
            options={{ headerShown: false }}
            name="AdminReporteRapidoScreen"
            component={AdminReporteRapido}
          />

          <Stack.Screen
            options={{ headerShown: false }}
            name="AdminMenuTareasScreen"
            component={AdminMenuTareas}
          />

          <Stack.Screen
            options={{ headerShown: false }}
            name="AdminPedidosDeObraYMaterialesScreen"
            component={AdminPedidosDeObraYMateriales}
          />

          <Stack.Screen
            options={{ headerShown: false }}
            name="AdminPedidosDeReintegroScreen"
            component={AdminPedidosDeReintegro}
          />

          <Stack.Screen
            options={{ headerShown: false }}
            name="AdminTodasTareasScreen"
            component={AdminTodasTareas}
          />

          <Stack.Screen
            options={{ headerShown: false }}
            name="AdminCrearObraScreen"
            component={AdminCrearObra}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="AdminVerObrasScreen"
            component={AdminConsultarObras}
          />

          <Stack.Screen
            options={{ headerShown: false }}
            name="AdminCrearRubroScreen"
            component={AdminCrearRubro}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="AdminVerRubrosScreen"
            component={AdminConsultarRubros}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="AdminVerUsuariosScreen"
            component={AdminConsultarUsuarios}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
