import { useEffect, useState } from "react";
import datas from "../../assets/data/meal.json";
import { LunchMeals, MorningMeals, SnackMeals } from "./db";
import AsyncStorage from "@react-native-async-storage/async-storage";

function getDatesUntilOneMonthLater(): string[] {
  const dates: string[] = [];
  const currentDate = new Date();
  const endDate = new Date();
  endDate.setMonth(endDate.getMonth() + 1);

  while (currentDate <= endDate) {
    const options: any = { day: "numeric", month: "long" };
    const formattedDate = currentDate.toLocaleDateString("fr-FR", options);
    dates.push(formattedDate);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}

const dateArray = getDatesUntilOneMonthLater();

const fillCalendar = async (filters: any) => {
  const morningMeals = MorningMeals(datas, filters);
  const lunchMeals = LunchMeals(datas, filters);
  const snackMeals = SnackMeals(datas, filters);
  const dinnerMeals = LunchMeals(datas, filters);
  const mealCalendar = [];
  for (const date of dateArray) {
    const randomMeal = [];
    randomMeal.push(
      morningMeals[Math.floor(Math.random() * morningMeals.length)]
    );
    randomMeal.push(lunchMeals[Math.floor(Math.random() * lunchMeals.length)]);
    randomMeal.push(snackMeals[Math.floor(Math.random() * snackMeals.length)]);
    randomMeal.push(
      dinnerMeals[Math.floor(Math.random() * dinnerMeals.length)]
    );
    mealCalendar.push({ date, meal: randomMeal });
  }
  return mealCalendar;
};

export { getDatesUntilOneMonthLater, fillCalendar };
