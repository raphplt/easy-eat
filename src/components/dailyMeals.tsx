import { View, Text } from "react-native";

export default function DailyMeals(props: any) {
  return (
    <View
      className="py-2 flex w-[100%] mx-auto  justify-center bg-slate-100 rounded-lg my-2"
      //   style={{ backgroundColor: "black" }}
    >
      <View className="w-[90%] mx-auto">
        <Text className="text-lg mb-1">Journéee du {props.datas.date}</Text>
        <Text className="">🥐: {props.datas.meal[0].name}</Text>
        <Text>🥦: {props.datas.meal[1].name}</Text>
        <Text>🍿: {props.datas.meal[2].name}</Text>
        <Text>🥗: {props.datas.meal[3].name}</Text>
      </View>
    </View>
  );
}
