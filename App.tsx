import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppRoutes from "./src/AppRoutes";
import ThemeManager from "./src/components/atoms/ThemeManager";

export default function App() {
  return (
    <ThemeManager>
      <AppRoutes />
    </ThemeManager>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
