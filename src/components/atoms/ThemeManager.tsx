import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import React, { ReactNode } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { TailwindProvider, useTailwind } from "tailwind-rn";
import utilities from "./../../../tailwind.json";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { appThemes } from "../../theme/appThemes";

const ThemeManager = ({ children }: { children: ReactNode }) => {
  const tailwind = useTailwind();
  return (
    <ThemeProvider theme={appThemes}>
      <NavigationContainer>
        <TailwindProvider utilities={utilities}>
          <PaperProvider>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : undefined}
              style={{ flex: 1 }}
            >
              {children}
              <StatusBar style="dark" />
            </KeyboardAvoidingView>
          </PaperProvider>
        </TailwindProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default ThemeManager;
