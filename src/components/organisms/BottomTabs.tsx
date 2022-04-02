import { View, Text } from "react-native";
import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";

const BottomTabs = () => {
  const [index, setIndex] = useState(0);

  return (
    <View>
      <Text>BottomTabs</Text>
    </View>
  );
};

export default BottomTabs;
