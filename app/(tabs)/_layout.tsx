import { View, Text, Alert } from "react-native";
import React from "react";
import { Redirect, Tabs, useRouter } from "expo-router";
import Octicons from "@expo/vector-icons/Octicons";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "@/constants/colors";

const TabsLayout = () => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = React.useState(true);

  if (!loggedIn) {
    return <Redirect href="/sign-in" />;
  }
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#020617",
          borderTopWidth: 0,
          paddingTop: 10,
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarShowLabel: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Octicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="sign-out"
        options={{
          tabBarShowLabel: false,
          tabBarLabel: "Sign Out",
          tabBarIcon: ({ color }) => (
            <Feather name="log-out" size={24} color={color} />
          ),
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            router.push("/sign-in");
          },
        })}
      />
    </Tabs>
  );
};

export default TabsLayout;
