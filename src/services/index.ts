import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("db.testDb");
db.transaction((tx) => {
  tx.executeSql(
    "create table if not exists meal (id integer primary key not null, name text, calories integer, season text, price text);"
  );
  tx.executeSql(
    "insert into test (name, calories, season, price) values ('pouler', 200, 'spring', 'expensive');"
  );
  tx.executeSql("select * from meal;", [], (_, { rows }) =>
    console.log(JSON.stringify(rows))
  );
});

  //   const db = SQLite.openDatabase("db.testDb");
  //   db.transaction((tx) => {
  // tx.executeSql(
  // ("CREATE TABLE IF NOT EXISTS meal (id INTEGER PRIMARY KEY NOT NULL, name TEXT, calories INTEGER, season TEXT, price TEXT, food_group TEXT, allergens TEXT, carbs INTEGER, fats INTEGER, proteins INTEGER, vitamins TEXT, minerals TEXT, dietary_labels TEXT, recipe_ids TEXT);");
  // );

  // tx.executeSql(
  //   "insert into meal (name, calories, season, price) values ('pouler', '200', 'spring', 'expensive');"
  // );
  // tx.executeSql("select * from meal;", [], (_, { rows }) =>
  //   // setMeal(JSON.stringify(rows))
  //   console.log(JSON.stringify(rows))
  // );
  //   });