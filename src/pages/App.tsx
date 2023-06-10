import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Calendar from "./CalendarPage";
import Form from "./Form";
import { registerRootComponent } from "expo";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Form">
        <Stack.Screen
          name="Form"
          component={Form as any}
          options={{ title: "Accueil" }}
        />
        <Stack.Screen
          name="Calendar"
          component={Calendar as any}
          options={{ title: "Calendrier" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default registerRootComponent(App);
