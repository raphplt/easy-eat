import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";
import { createTable, insertMultipleData, retrieveData } from "../datas/db";
import datas from "../../assets/data/meal.json";
import { fillCalendar, getDatesUntilOneMonthLater } from "../datas/user-meal";
import DailyMeals from "../components/dailyMeals";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Calendar({ navigation }: any) {
  const [content, setContent]: any = useState([]);
  const [calendar, setCalendar] = useState<any>({});
  // const [isLoading, setIsLoading] = useState(false);
  // const db = SQLite.openDatabase("meal.db");

  // useEffect(() => {
  //   createTable();
  //   retrieveData((data: any) => {
  //     if (data.length === 0) {
  //       insertMultipleData(datas.content);
  //     }
  //     setContent(data);
  //   });
  // }, []);
  // if (isLoading) {
  //   return (
  //     <View className="flex-1 items-center justify-center bg-white">
  //       <Text>Chargement...</Text>
  //     </View>
  //   );
  // }

  // useEffect(() => {
  //   const dates = getDatesUntilOneMonthLater();
  // }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const datas: any = await AsyncStorage.getItem("@mealCalendar");
        setContent(Object.entries(JSON.parse(datas)));
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  // useEffect(() => {
  //   const storeData = async () => {
  //     try {
  //       const filter: any = await AsyncStorage.getItem("@filters");
  //       console.log("filtres:", filter);
  //       const datas: any = fillCalendar(filter);
  //       setCalendar(datas["_j"]);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   storeData();
  // }, []);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl mt-10 text-center">
        Vos repas du prochains mois sont disponible ici:
      </Text>
      <Text className="mt-4">
        🥐: Matin - 🥦: Déjeuner - 🍿: Collation - 🥗: Dîner
      </Text>
      <ScrollView className="h-[85vh] mt-8">
        {content &&
          content.map((item: any, id: any) => (
            <View key={id}>
              <DailyMeals datas={item} />
            </View>
          ))}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}
