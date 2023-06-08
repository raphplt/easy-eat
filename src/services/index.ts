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
