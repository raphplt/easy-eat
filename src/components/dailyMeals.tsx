import { View, Text } from "react-native";

export default function DailyMeals(props: any) {
  return (
    <View
      className="py-2 flex w-[100%] mx-auto justify-center bg-slate-100 rounded-lg my-2"
      //   style={{ backgroundColor: "black" }}
    >
      <View className="w-[90%] mx-auto">
        <Text className="text-lg mb-2">Journéee du {props.datas[0]}</Text>
        <Text>🥐: {props.datas[1][0].name}</Text>
        <View className="h-[1px] w-full bg-black my-2"></View>
        <Text>🥦: {props.datas[1][1].name}</Text>
        <View className="h-[1px] w-full bg-black my-2"></View>
        <Text>🍿: {props.datas[1][2].name}</Text>
        <View className="h-[1px] w-full bg-black my-2"></View>
        <Text>🥗: {props.datas[1][3].name}</Text>
      </View>
    </View>
  );
}
