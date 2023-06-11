import { View, Text, Button, ScrollView } from "react-native";
import React, { useState } from "react";
import { Slider } from "@miblanchard/react-native-slider";
// import { CheckBox } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";


export default function Form() {
  const navigation: any = useNavigation();
  const [budget, setBudget] = useState(0);
  const [allergy, setAllergy] = useState<string[]>([]);
  const [vegetarian, setVegetarian] = useState(false);
  const [prepTime, setPrepTime] = useState(0);

  const handleBudgetChange = (value: any) => {
    setBudget(value);
  };

  const handleAllergyChange = (selectedAllergy: string) => {
    if (allergy.includes(selectedAllergy)) {
      // Allergy is already selected, remove it
      setAllergy(allergy.filter((item) => item !== selectedAllergy));
    } else {
      // Allergy is not selected, add it
      setAllergy([...allergy, selectedAllergy]);
    }
  };

  const handleVegetarianChange = (value: any) => {
    setVegetarian(value);
  };

  const handlePrepTimeChange = (value: any) => {
    setPrepTime(value);
  };

  const storeData = async (value: any) => {
    try {
      await AsyncStorage.setItem("@storage_Key", value);
    } catch (e) {
      console.log(e);
    }
  };
  const handleSubmit = () => {
    const formData = {
      budget: budget,
      allergy: allergy,
      vegetarian: vegetarian,
      prepTime: prepTime,
    };
    storeData(JSON.stringify(formData));
    navigation.navigate("Calendar", { formData: formData });

    console.log(formData);
  };

  return (
    <ScrollView>
      <Text className="text-center text-2xl my-5 font-roboto">
        Bienvenue sur Easy Eat !
      </Text>
      <Text className="text-center text-lg my-5 w-9/12 mx-auto">
        Pour commencer, veuillez remplir le formulaire ci-dessous :
      </Text>

      <Text className="w-10/12 text-center text-lg mx-auto bg-slate-200 py-1 px-2 rounded-xl my-5">
        Choisissez votre budget :
      </Text>
      <View className="flex flex-row justify-center gap-5 mb-8">
        <View className="w-1/6">
          <Pressable
            onPress={() => handleBudgetChange(1)}
            className={`py-2 mx-auto rounded-xl drop-shadow-md w-16 px-1 bg-${
              budget === 1 ? "green" : "gray"
            }-400`}
          >
            <Text className="text-center">€</Text>
          </Pressable>
        </View>
        <View className="w-1/6">
          <Pressable
            onPress={() => handleBudgetChange(2)}
            className={`py-2 mx-auto rounded-xl drop-shadow-md w-16 px-1 bg-${
              budget === 2 ? "green" : "gray"
            }-400`}
          >
            <Text className="text-center">€€</Text>
          </Pressable>
        </View>
        <View className="w-1/6">
          <Pressable
            onPress={() => handleBudgetChange(3)}
            className={`py-2 mx-auto rounded-xl drop-shadow-md w-16 px-1 bg-${
              budget === 3 ? "green" : "gray"
            }-400`}
          >
            <Text className="text-center">€€€</Text>
          </Pressable>
        </View>
        <View className="w-1/6">
          <Pressable
            onPress={() => handleBudgetChange(4)}
            className={`py-2 mx-auto rounded-xl drop-shadow-md w-16 px-1 bg-${
              budget === 4 ? "green" : "gray"
            }-400`}
          >
            <Text className="text-center">€€€€</Text>
          </Pressable>
        </View>
      </View>

      <Text className="w-10/12 text-center text-lg mx-auto bg-slate-200 py-1 px-2 rounded-xl my-5">
        Etes-vous végétarien ?
      </Text>
      <View className="flex flex-row justify-center gap-5 mb-8">
        <View className="w-1/6">
          <Pressable
            onPress={() => handleVegetarianChange(true)}
            className={`py-2 mx-auto rounded-xl drop-shadow-md w-16 px-1 bg-${
              vegetarian === true ? "green" : "gray"
            }-400`}
          >
            <Text className="text-center">Oui</Text>
          </Pressable>
        </View>
        <View className="w-1/6">
          <Pressable
            onPress={() => handleVegetarianChange(false)}
            className={`py-2 mx-auto rounded-xl drop-shadow-md w-16 px-1 bg-${
              vegetarian === false ? "green" : "gray"
            }-400`}
          >
            <Text className="text-center">Non</Text>
          </Pressable>
        </View>
      </View>

      <Text className="w-10/12 text-center text-lg mx-auto bg-slate-200 py-1 px-2 rounded-xl my-5">
        Sélectionnez vos allergies :
      </Text>
      <View className="flex flex-row justify-center gap-5 mb-8">
        <View className="w-1/6">
          <Pressable
            onPress={() => handleAllergyChange("lactose")}
            className={`py-2 mx-auto rounded-xl drop-shadow-md w-16 px-1 bg-${
              allergy.includes("lactose") ? "green" : "gray"
            }-400`}
          >
            <Text className="text-center">Lactose</Text>
          </Pressable>
        </View>
        <View className="w-1/6">
          <Pressable
            onPress={() => handleAllergyChange("oeuf")}
            className={`py-2 mx-auto rounded-xl drop-shadow-md w-16 px-1 bg-${
              allergy.includes("oeuf") ? "green" : "gray"
            }-400`}
          >
            <Text className="text-center">Oeuf</Text>
          </Pressable>
        </View>
        <View className="w-1/6">
          <Pressable
            onPress={() => handleAllergyChange("lait")}
            className={`py-2 mx-auto rounded-xl drop-shadow-md w-16 px-1 bg-${
              allergy.includes("lait") ? "green" : "gray"
            }-400`}
          >
            <Text className="text-center">Lait</Text>
          </Pressable>
        </View>
        <View className="w-1/6">
          <Pressable
            onPress={() => handleAllergyChange("arachide")}
            className={`py-2 mx-auto rounded-xl drop-shadow-md w-16 px-1 bg-${
              allergy.includes("arachide") ? "green" : "gray"
            }-400`}
          >
            <Text className="text-center">Arachide</Text>
          </Pressable>
        </View>
      </View>

      <View className="mb-8">
        <Text className="w-10/12 text-center text-lg mx-auto bg-slate-200 py-1 px-2  my-5 rounded-xl">
          Temps de préparation par repas :
        </Text>
        <View className="w-[90%] mx-auto">
          <Slider
            value={prepTime}
            onValueChange={(value: any) => handlePrepTimeChange(value)}
          />
        </View>
        <Text className="text-center">
          {Math.floor((Math.round(prepTime * 100) / 100) * 100)} minutes
        </Text>
      </View>

      <Pressable
        onPress={handleSubmit}
        className="w-1/2 py-2 mx-auto rounded-xl  drop-shadow-md px-1 bg-green-400 mb-12"
      >
        <Text className="text-center text-lg">Soumettre</Text>
      </Pressable>
    </ScrollView>
  );
}
