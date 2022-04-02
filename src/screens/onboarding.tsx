import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Onboarding = () => {
  const navigation: any = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Pressable onPress={() => navigation.navigate("Aisha Screens")}>
        <Text> onboarding</Text>
      </Pressable>
    </View>
  );
};

export default Onboarding;
