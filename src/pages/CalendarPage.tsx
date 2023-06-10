import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { registerRootComponent } from "expo";
import * as SQLite from "expo-sqlite";
import {
  MorningMeals,
  createTable,
  insertMultipleData,
  retrieveData,
} from "../datas/db";
import datas from "../../assets/data/meal.json";
import { fillCalendar, getDatesUntilOneMonthLater } from "../datas/user-meal";
import DailyMeals from "../components/dailyMeals";

export default function Calendar({ navigation }: any) {
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent]: any = useState({});
  const [currentName, setCurrentName] = useState(undefined);
  const db = SQLite.openDatabase("meal.db");
  const [calendar, setCalendar] = useState<any>({});

  useEffect(() => {
    createTable();
    console.log("datas", datas.content.length);
    retrieveData((data: any) => {
      if (data.length === 0) {
        console.log("data", datas.content.length);
        insertMultipleData(datas.content);
      }
      setContent(data);
    });
  }, []);
  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text>Chargement...</Text>
      </View>
    );
  }

  useEffect(() => {
    const dates = getDatesUntilOneMonthLater();
  }, []);

  useEffect(() => {
    const morning = MorningMeals(datas);
    // console.log("morning", morning);
  }, []);

  useEffect(() => {
    const datas = fillCalendar();
    // console.log(typeof datas);
    setCalendar(datas);
    // console.log("calendar", datas);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl mt-10 text-center">
        Vos repas du prochains mois sont disponible ici:
      </Text>
      <Text className="mt-4">
        🥐: Matin - 🥦: Déjeuner - 🍿: Collaction - 🥗: Dîner
      </Text>

      <ScrollView className="h-[85vh] mt-8">
        {calendar &&
          Array.isArray(calendar) &&
          calendar.length > 0 &&
          calendar.map((item: any, id: any) => (
            <View key={id}>
              <DailyMeals datas={item} />
            </View>
          ))}
      </ScrollView>

      {/* <Text>{JSON.stringify(calendar)}</Text> */}
      <StatusBar style="auto" />
      <Text>{datas.content.length}</Text>
    </View>
  );
}
