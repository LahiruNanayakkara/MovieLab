import React from 'react'
import ActionButton from "@/components/ActionButton";
import images from "@/constants/images";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
} from "react-native";

const Welcome = () => {
    const router = useRouter()
  return (
    <View className="flex-1">
          <ImageBackground
            source={images.bgImage}
            style={styles.background}
            resizeMode="cover"
          >
            <View className="justify-end h-full w-full px-8 pb-20">
              <Text className="text-[2.75rem] font-bold text-white mb-4">
                Welcome to MovieLab
              </Text>
              <Text className="text-[1.15rem] text-white opacity-80 my-1">
              Discover a world of movies at your feet. Browse through detailed information about your favorite films, explore new releases, and dive into the magic of cinema. Start your journey now!
              </Text>
              <ActionButton
                text={"Continue with email"}
                otherStyle={"mt-7"}
                handlePress={() => router.push("/home")}
              />   
            </View>
          </ImageBackground>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    background: {
      flex: 1,
      justifyContent: "center", // Centers content vertically
      alignItems: "center", // Centers content horizontally
    },
    text: {
      color: "white",
      fontSize: 24,
      fontWeight: "bold",
    },
    error: {
      color: "red",
      marginTop: 8,
      marginLeft: 8,
    },
  });

export default Welcome