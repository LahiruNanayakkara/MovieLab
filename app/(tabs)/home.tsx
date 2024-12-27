import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { getMovies } from "../../data/Movies.js";
import MovieCard from "../../components/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/context/store.js";
import { increseCountAction } from "@/context/actions/userActions.ts";

const home = () => {
  const [movieList, setMovieList] = React.useState([]);

  const { count, currentUser } = useSelector((state:RootState) => state.user);
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(increseCountAction());
  }

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await getMovies();
      const data = await res.json();
      setMovieList(data.results);
    };
    fetchMovies();
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-slate-950">
      <View className="px-8 flex-1">
        <View className="flex-row items-center gap-4 mt-8 ">
        {/* <AntDesign name="user" size={28} color="white" /> */}
          <View>
            <Text className="text-gray-100">Hello,</Text>
            <Text className="text-white font-bold text-2xl">
              {currentUser.name}
            </Text>
          </View>
        </View>
        <View className="mt-8 flex-1 relative">
          <Text className="text-white font-bold text-5xl">Latest Movies</Text>
          <FlatList
            className="mt-4 "
            showsVerticalScrollIndicator={false}
            data={movieList}
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={handlePress}
                className="flex-1 rounded-2xl mb-4"
                style={[
                  index % 2 === 0
                    ? {
                        paddingRight: 10,
                      }
                    : {
                        paddingLeft: 10,
                      },
                ]}
              >
                <MovieCard name={item.name || item.title} imgUrl={item.poster_path} rating={item.vote_average} description={item.overview} />
              </TouchableOpacity>
            )}
          />
          <View className="absolute bottom-8 right-0 bg-orange-500 size-20 rounded-full justify-center items-center shadow-lg">
            <Text className="text-[0.75rem] font-medium text-white">Clicks</Text>
            <Text className="text-3xl font-medium text-white mb-1">{count}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default home;
