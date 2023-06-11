import * as SQLite from "expo-sqlite";

// Create conneion with database
const db = SQLite.openDatabase("meal.db");

// Create meal table
const createTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "create table if not exists meal (id integer primary key not null , name text, calories integer, season text, price text, food_group text, allergens text, prep_time text);"
    );
  });
};

// Insert data into meal table
const insertMultipleData = (dataList: any[]) => {
  db.transaction((tx) => {
    let values = "";
    const params: any[] | undefined = [];

    dataList.forEach(
      (
        data: {
          name: string;
          calories: number;
          season: string;
          price: string;
          food_group: string;
          allergens: string;
          has_meat: true;
          prep_time: string;
        },
        index: number
      ) => {
        const {
          name,
          calories,
          season,
          price,
          food_group,
          allergens,
          has_meat,
          prep_time,
        } = data;
        values += "(?, ?, ?, ?, ?, ?, ?)";
        if (index < dataList.length - 1) {
          values += ",";
        }
        params.push(
          name,
          calories,
          season,
          price,
          food_group,
          allergens,
          has_meat,
          prep_time
        );
      }
    );
    const sql = `INSERT INTO meal (name, calories, season, price, food_group, allergens, has_meat, prep_time) VALUES ${values};`;
    tx.executeSql("DELETE FROM meal;", [], (_, { rowsAffected }) => {
      console.log(`${rowsAffected} rows deleted`);
    });
    tx.executeSql(sql, params, (_, { rowsAffected }) => {
      if (rowsAffected > 0) {
        console.log("Data inserted successfully");
      }
    });
  });
};

// Retrieve data from meal table
const retrieveData = (callback: any) => {
  db.transaction((tx) => {
    tx.executeSql("select * from meal;", [], (_, { rows }) => {
      callback(rows._array);
    });
  });
};

const MorningMeals = (datas: any, filters: any) => {
  filters = JSON.parse(filters);
  const morningMeals = [];
  for (const data of datas.content) {
    if (
      data.food_group === "Petit-déjeuner" &&
      data.has_meat === !filters.vegetarian &&
      parseInt(String(data.price)) <= filters.budget
    ) {
      morningMeals.push(data);
    }
  }
  return morningMeals;
};

const LunchMeals = (datas: any, filters: any) => {
  filters = JSON.parse(filters);
  const lunchMeals = [];
  for (const data of datas.content) {
    if (
      data.food_group === "Plat principal" &&
      data.has_meat === !filters.vegetarian &&
      parseInt(String(data.price)) <= filters.budget
    ) {
      lunchMeals.push(data);
    }
  }
  return lunchMeals;
};

const SnackMeals = (datas: any, filters: any) => {
  filters = JSON.parse(filters);

  const lunchMeals = [];
  for (const data of datas.content) {
    if (data.food_group === "Collation") {
      lunchMeals.push(data);
    }
  }
  return lunchMeals;
};

// Export functions
export {
  createTable,
  insertMultipleData,
  retrieveData,
  MorningMeals,
  LunchMeals,
  SnackMeals,
};
