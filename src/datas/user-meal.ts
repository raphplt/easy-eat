import datas from "../../assets/data/meal.json";
import { LunchMeals, MorningMeals, SnackMeals } from "./db";

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

const fillCalendar = () => {
  const morningMeals = MorningMeals(datas);
  const lunchMeals = LunchMeals(datas);
  const snackMeals = SnackMeals(datas);
  const dinnerMeals = LunchMeals(datas);
  const mealCalendar = [];

  for (const date of dateArray) {
    const randomMeal: any = [];
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
