import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Calendar from "./CalendarPage";
import Form from "./Form";
import Entry from "./Entry";
import { registerRootComponent } from "expo";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, View } from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
  const [isData, setIsData] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const datas: any = await AsyncStorage.getItem("@mealCalendar");
      if (datas) {
        setIsData(true);
      }
      setIsLoading(false);
    };
    getData();
  }, []);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  console.log(isData);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isData ? "Calendar" : "Entry"}>
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
          options={{ title: "Foodzy" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default registerRootComponent(App);
