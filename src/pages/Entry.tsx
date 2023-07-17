import { View, Text, Pressable, Image } from "react-native";
import Svg1 from "../../assets/svg/svg_index_1";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Entry() {
  const navigation: any = useNavigation();

  const handleNavigation = async () => {
    try {
      const userDatas = await AsyncStorage.getItem("@mealCalendar");
      if (!userDatas) {
        navigation.navigate("Form");
      } else {
        navigation.navigate("Calendar");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View className="h-[100vh] bg-white">
      <View className="flex justify-center">{/* <Svg1 /> */}</View>
      <Image
        source={require("../../assets/img/entry.png")}
        className="w-[254px] h-[245px] mx-auto mt-24"
      />
      <Text className="text-center text-2xl mt-16">
        Vos repas, sans prise de tête
      </Text>
      <Pressable
        onPress={() => handleNavigation()}
        className="mb-24 py-2 px-4 mt-24 bg-[#35900e] focus:bg-[#3fa812] rounded-3xl drop-shadow-md w-1/2 mx-auto"
      >
        <Text className="text-center text-white text-lg">Commencer</Text>
      </Pressable>
    </View>
  );
}
