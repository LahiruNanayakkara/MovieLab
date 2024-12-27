import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  StyleSheet,
  Alert,
  Button,
} from "react-native";
import React, { useState } from "react";
import images from "@/constants/images";
import FormField from "@/components/FormField";
import ActionButton from "@/components/ActionButton";
import { Link, useRouter } from "expo-router";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { changeUserAction, loginAction } from "@/context/actions/userActions";
import { RootState } from "@/context/store";
import { User } from "@/context/types/user";

const loginSchema = yup.object().shape({
  fullname: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const SignUp = () => {
  const {currentUser} = useSelector((state:RootState) => state.user)
  const [isSignInFailed, setIsSignInFailed] = useState(false)
  const [loginError, setSignUpError] = useState("")

  const dispatch = useDispatch();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });


  const submit = (data: any) => {
    if (currentUser && currentUser.email === data.email) {
      setSignUpError("User account already exist")
      return setIsSignInFailed(true)
    }
    setSignUpError("")
    const user:User = {
      name:data.fullname,
      email:data.email,
      password:data.password
    }
    dispatch(loginAction());
    dispatch(changeUserAction(user))
    router.push("/home");
  };
  return (
    <View className="flex-1">
      <ImageBackground
        source={images.bgImage}
        style={styles.background}
        resizeMode="cover"
      >
        <View className="justify-center h-full w-full px-8">
          <Text className="text-[2.75rem] font-bold text-white">
            Create account
          </Text>
          <Text className="text-[1.15rem] text-white opacity-80 my-1">
          Please fill the details below
          </Text>
          <Controller
            control={control}
            name="fullname"
            render={({ field: { onChange, value } }) => (
              <FormField
                title="FullName"
                value={value}
                placeholder={"Full name"}
                handleChangeText={onChange}
                otherStyles="mt-7"
                keyboardType=""
              />
            )}
          />
          {errors.fullname && (
            <Text style={styles.error}>{errors.fullname.message}</Text>
          )}
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <FormField
                title="Email"
                value={value}
                placeholder={"Email"}
                handleChangeText={onChange}
                otherStyles="mt-7"
                keyboardType="email-address"
              />
            )}
          />
          {errors.email && (
            <Text style={styles.error}>{errors.email.message}</Text>
          )}
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <FormField
                title="Password"
                value={value}
                placeholder={"Password"}
                handleChangeText={onChange}
                otherStyles="mt-7"
              />
            )}
          />
          {errors.password && (
            <Text style={styles.error}>{errors.password.message}</Text>
          )}
          <ActionButton
            text={"Sign in"}
            otherStyle={"mt-7"}
            handlePress={handleSubmit(submit)}
          />
          {isSignInFailed && (
            <Text className="text-center" style={styles.error}>
              {loginError}
            </Text>
          )}
          <View className="flex-row item-center mt-5">
            <Text className="text-[1.15rem] text-white opacity-80">
              Already have an account?
            </Text>
            <Link
              href="/sign-in"
              className="text-[1.15rem] text-white opacity-80 ps-1 underline"
            >
              Sign in
            </Link>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

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

export default SignUp;
