import { View, Text, Button, ScrollView } from "react-native";
import React, { useState } from "react";
import { Slider } from "@miblanchard/react-native-slider";
// import { CheckBox } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { fillCalendar } from "../datas/user-meal";

export default function Form() {
  const navigation: any = useNavigation();
  const [budget, setBudget] = useState(0);
  const [allergy, setAllergy] = useState<string[]>([]);
  const [vegetarian, setVegetarian] = useState(false);
  const [prepTime, setPrepTime] = useState(0);
  const [repas, setRepas] = useState<string[]>([]);

  const handleBudgetChange = (value: any) => {
    setBudget(value);
  };

  const handleAllergyChange = (selectedAllergy: string) => {
    if (allergy.includes(selectedAllergy)) {
      setAllergy(allergy.filter((item) => item !== selectedAllergy));
    } else {
      setAllergy([...allergy, selectedAllergy]);
    }
  };

  const handleRepasChange = (selectedRepas: string) => {
    if (repas.includes(selectedRepas)) {
      setRepas(repas.filter((item) => item !== selectedRepas));
    } else {
      setRepas([...repas, selectedRepas]);
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
      await AsyncStorage.setItem("@filters", value);
      fillCalendar(value);
    } catch (e) {
      console.log(e);
    }
  };
  const handleSubmit = () => {
    const formData = {
      repas: repas,
      budget: budget,
      allergy: allergy,
      vegetarian: vegetarian,
      prepTime: prepTime,
    };
    storeData(JSON.stringify(formData));
    navigation.navigate("Calendar", { formData: formData });
  };

  return (
    <ScrollView>
      <Text className="text-center text-2xl my-5 font-roboto">
        Bienvenue sur Foodzy !
      </Text>
      <Text className="text-center text-lg my-5 w-9/12 mx-auto">
        Pour commencer, veuillez remplir le formulaire ci-dessous :
      </Text>

      <Text className="w-10/12 text-center text-lg mx-auto bg-slate-200 py-1 px-2 rounded-xl my-5">
        Quels sont vos repas journaliers ?
      </Text>
      <View className="flex flex-col items-center justify-center gap-5 mb-8">
        <View className="w-4/6">
          <Pressable
            onPress={() => handleRepasChange("Petit déjeuner")}
            className={`py-2 mx-auto rounded-xl drop-shadow-md px-10 w-full border-black border-[1px] bg-${
              repas.includes("Petit déjeuner") ? "green" : "slate"
            }-400`}
          >
            <Text className="text-center">Petit déjeuner</Text>
          </Pressable>
        </View>
        <View className="w-4/6">
          <Pressable
            onPress={() => handleRepasChange("Déjeuner")}
            className={`py-2 mx-auto rounded-xl drop-shadow-md px-10 w-full border-black border-[1px] bg-${
              repas.includes("Déjeuner") ? "green" : "gray"
            }-400`}
          >
            <Text className="text-center">Déjeuner</Text>
          </Pressable>
        </View>
        <View className="w-4/6">
          <Pressable
            onPress={() => handleRepasChange("Diner")}
            className={`py-2 mx-auto rounded-xl drop-shadow-md px-10 w-full border-black border-[1px] bg-${
              repas.includes("Diner") ? "green" : "gray"
            }-400`}
          >
            <Text className="text-center">Diner</Text>
          </Pressable>
        </View>
        <View className="w-4/6">
          <Pressable
            onPress={() => handleRepasChange("Collation")}
            className={`py-2 mx-auto rounded-xl drop-shadow-md px-10 w-full border-black border-[1px] bg-${
              repas.includes("Collation") ? "green" : "gray"
            }-400`}
          >
            <Text className="text-center">Collation</Text>
          </Pressable>
        </View>
      </View>

      <Text className="w-10/12 text-center text-lg mx-auto bg-slate-200 py-1 px-2 rounded-xl my-5">
        Choisissez votre budget :
      </Text>
      <View className="flex flex-row justify-center gap-5 mb-8">
        <View className="w-1/6">
          <Pressable
            onPress={() => handleBudgetChange(1)}
            className={`py-2 mx-auto rounded-xl drop-shadow-md w-16 px-1 border-black border-[1px] bg-${
              budget === 1 ? "green" : "gray"
            }-400`}
          >
            <Text className="text-center">€</Text>
          </Pressable>
        </View>
        <View className="w-1/6">
          <Pressable
            onPress={() => handleBudgetChange(2)}
            className={`py-2 mx-auto rounded-xl drop-shadow-md w-16 px-1 border-black border-[1px] bg-${
              budget === 2 ? "green" : "gray"
            }-400`}
          >
            <Text className="text-center">€€</Text>
          </Pressable>
        </View>
        <View className="w-1/6">
          <Pressable
            onPress={() => handleBudgetChange(3)}
            className={`py-2 mx-auto rounded-xl drop-shadow-md w-16 px-1 border-black border-[1px] bg-${
              budget === 3 ? "green" : "gray"
            }-400`}
          >
            <Text className="text-center">€€€</Text>
          </Pressable>
        </View>
        <View className="w-1/6">
          <Pressable
            onPress={() => handleBudgetChange(4)}
            className={`py-2 mx-auto rounded-xl drop-shadow-md w-16 px-1 border-black border-[1px] bg-${
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
            className={`py-2 mx-auto rounded-xl drop-shadow-md w-16 px-1 border-black border-[1px] bg-${
              vegetarian === true ? "green" : "gray"
            }-400`}
          >
            <Text className="text-center">Oui</Text>
          </Pressable>
        </View>
        <View className="w-1/6">
          <Pressable
            onPress={() => handleVegetarianChange(false)}
            className={`py-2 mx-auto rounded-xl drop-shadow-md w-16 px-1 border-black border-[1px] bg-${
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
            className={`py-2 mx-auto rounded-xl drop-shadow-md w-16 border-black border-[1px] px-1 bg-${
              allergy.includes("lactose") ? "green" : "gray"
            }-400`}
          >
            <Text className="text-center">Lactose</Text>
          </Pressable>
        </View>
        <View className="w-1/6">
          <Pressable
            onPress={() => handleAllergyChange("oeuf")}
            className={`py-2 mx-auto rounded-xl drop-shadow-md w-16 border-black border-[1px] px-1 bg-${
              allergy.includes("oeuf") ? "green" : "gray"
            }-400`}
          >
            <Text className="text-center">Oeuf</Text>
          </Pressable>
        </View>
        <View className="w-1/6">
          <Pressable
            onPress={() => handleAllergyChange("lait")}
            className={`py-2 mx-auto rounded-xl drop-shadow-md w-16 border-black border-[1px] px-1 bg-${
              allergy.includes("lait") ? "green" : "gray"
            }-400`}
          >
            <Text className="text-center">Lait</Text>
          </Pressable>
        </View>
        <View className="w-1/6">
          <Pressable
            onPress={() => handleAllergyChange("arachide")}
            className={`py-2 mx-auto rounded-xl drop-shadow-md w-16 border-black border-[1px] px-1 bg-${
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
