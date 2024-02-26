import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
// import GestureHandlerRootView from "react-native-gesture-handler";
import MealsDetailScreen from "./screens/MealsDetailScreen";
import Meal from "./models/meal";
import { CATEGORIES } from "./data/dummy-data";
import IconButton from "./Components/IconButton";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Favorites from "./screens/Favorites";
import DrawerNavigator from "./Navigator/DrawerNavigator";
// import Store from './Components/Redux/Store';
// import { Provider } from "react-redux";
// import { Store } from "./Store/Redux/Store";
import FavouritesContextProvider from "./Store/Context/Context";

let Stack = createNativeStackNavigator();
// let Drawer = createDrawerNavigator();

export default function App() {
  // let DrawerNavigator = () =>{
  //   return <Drawer.Navigator screenOptions={{
  //       headerStyle: { backgroundColor: "#351401" },
  //       sceneContainerStyle: { backgroundColor: "#3f2f25" },
  //       headerTintColor: "white"
  //     }}>
  //       <Drawer.Screen name="Categories" component={CategoriesScreen} />
  //       <Drawer.Screen name="Favorites" component={Favorites} />
  //     </Drawer.Navigator>

  // }
  return (
    <FavouritesContextProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            contentStyle: { backgroundColor: "#3f2f25" },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="Categories Screen"
            component={CategoriesScreen}
            options={
              {
                // headerShown: false
                // contentStyle : {
                //   backgroundColor: '#3f2f25'
                // },
                // headerTintColor: 'white',
                // headerStyle: {backgroundColor: '#351401'}
              }
            }
          />
          <Stack.Screen
            name="MealsOverView"
            component={MealsOverViewScreen}
            // options={({ route, navigation }) => {
            //   return {
            //     title: CATEGORIES.find((item) => item.id === route.params.id).title
            //   };
            // }}
          />
          <Stack.Screen
            name="MealsDetailScreen"
            component={MealsDetailScreen}
          />
          <Stack.Screen name="FavouritesScreen" component={Favorites} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavouritesContextProvider>
  );
}

const styles = StyleSheet.create({});
