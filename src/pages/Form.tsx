import { View, Text, Button } from "react-native";
import { Link } from "native-base";

import { useNavigation } from "@react-navigation/native";

export default function Form() {
  const navigation: any = useNavigation();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl mt-16">Bienvenue sur Easy Eat !</Text>
      <Text className="mt-5">Veuillez renseigner votre nom pour commencer</Text>
      <Button
        title="Aller sur le calendrier"
        onPress={() => navigation.navigate("Calendar")}
      ></Button>
    </View>
  );
}
