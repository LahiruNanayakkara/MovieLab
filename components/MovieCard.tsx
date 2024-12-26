import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "@/constants/colors";

interface MovieCardProps {
  name: string;
  imgUrl: string;
  rating: number;
}
const MovieCard = ({ name, imgUrl, rating }: MovieCardProps) => {
  return (
    <View>
      <Image
        source={{
          uri: "https://image.tmdb.org/t/p/w500" + imgUrl,
        }}
        style={{ width: "100%", height: 200, borderRadius: 10 }}
      />
      <Text className="text-white font-bold text-xl mt-2">{name}</Text>
      <View className="flex-row items-center gap-2">
        <Feather name="star" size={16} color={Colors.primary} />
        <Text className="text-gray-300 text-sm ">{rating}</Text>
      </View>
    </View>
  );
};

export default MovieCard;
