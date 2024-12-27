import Welcome from "@/components/Welcome";
import { store } from "@/context/store";
import { Link, useRouter } from "expo-router";
import {
  View,
  Text,
} from "react-native";
import { Provider } from "react-redux";

export default function App() {
  const rounter = useRouter();
  return (
    <Welcome />
  );
}

