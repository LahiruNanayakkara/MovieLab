import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "@/constants/colors";

interface MovieCardProps {
  name: string;
  imgUrl: string;
  description:string;
  rating: number;
}
const MovieCard = ({ name, description, imgUrl, rating }: MovieCardProps) => {
  return (
    <View>
      <Image
        source={{
          uri: "https://image.tmdb.org/t/p/w500" + imgUrl,
        }}
        style={{ width: "100%", height: 200, borderRadius: 10 }}
      />
      <Text className="text-white font-bold text-xl mt-2">{name}</Text>
      <Text className="text-gray-100 text-lg line-clamp-2 my-1">{description.substring(0,30)+"..."}</Text>
      <View className="flex-row items-center gap-2">
        <Feather name="star" size={16} color={Colors.primary} />
        <Text className="text-gray-300 text-sm ">{rating}</Text>
      </View>
    </View>
  );
};

export default MovieCard;
