import { View, Text, Pressable, Image } from "react-native";
import Svg1 from "../../assets/svg/svg_index_1";
import React from "react";
import { useNavigation } from "@react-navigation/native";
// import entry from "../../assets/img/entry.png";

export default function Entry() {
  const navigation: any = useNavigation();
  return (
    <View>
      <View className="flex justify-center">{/* <Svg1 /> */}</View>
      <Image
        source={require("../../assets/img/entry.png")}
        className="w-[254px] h-[245px] mx-auto mt-24"
      />
      <Text className="text-center text-2xl mt-16">
        Vos repas, sans prise de tête
      </Text>
      <Pressable
        onPress={() => navigation.navigate("Form")}
        className="mb-24 py-2 px-4 mt-24 bg-blue-400 rounded-xl drop-shadow-md w-1/2 mx-auto"
      >
        <Text className="text-center  text-lg">Commencer</Text>
      </Pressable>
    </View>
  );
}
