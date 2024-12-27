import { View, Text, Alert } from "react-native";
import React from "react";
import { Redirect, Tabs, useRouter } from "expo-router";
import Octicons from "@expo/vector-icons/Octicons";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "@/constants/colors";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/context/store";
import { changeUserAction, logOutAction } from "@/context/actions/userActions";

const TabsLayout = () => {
  const router = useRouter();
  const { isSignedIn } = useSelector((state:RootState) => state.user);
  const dispatch = useDispatch();

  if (!isSignedIn) {
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
            dispatch(logOutAction())
          },
        })}
      />
    </Tabs>
  );
};

export default TabsLayout;
