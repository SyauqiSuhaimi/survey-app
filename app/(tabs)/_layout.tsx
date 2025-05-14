import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => null,
        }}
      />
      <Tabs.Screen
        name="survey"
        options={{
          title: "Survey History",
          tabBarIcon: () => null,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});
