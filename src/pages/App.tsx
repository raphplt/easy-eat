import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import React from "react";
import { registerRootComponent } from "expo";
import * as SQLite from "expo-sqlite";

function App() {
  const [meal, setMeal] = React.useState("");

  const db = SQLite.openDatabase("db.testDb");
  db.transaction((tx) => {
    tx.executeSql(
      "create table if not exists meal (id integer primary key not null, name text, calories integer, season text, price text);"
    );
    tx.executeSql(
      "insert into meal (name, calories, season, price) values ('pouler', '200', 'spring', 'expensive');"
    );
    tx.executeSql(
      "select * from meal;",
      [],
      (_, { rows }) =>
        // setMeal(JSON.stringify(rows))
        console.log(JSON.stringify(rows))
      // console.log("JSON.stringify(rows)")
    );
    // console.log("inserted 2");
  });

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Bienvenue sur Easy Eat !</Text>
      <StatusBar style="auto" />
      <Text>{meal}</Text>
    </View>
  );
}

export default registerRootComponent(App);
