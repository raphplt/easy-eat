import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Calendar from "./CalendarPage";
import Form from "./Form";
import Entry from "./Entry";
import { registerRootComponent } from "expo";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entry">
        <Stack.Screen
          name="Form"
          component={Form}
          options={{ title: "Accueil" }}
        />
        <Stack.Screen
          name="Calendar"
          component={Calendar}
          options={{ title: "Calendrier" }}
        />
        <Stack.Screen
          name="Entry"
          component={Entry}
          options={{ title: "Eat-sy" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default registerRootComponent(App);
