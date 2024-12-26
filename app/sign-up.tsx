import { View, Text, SafeAreaView, ScrollView, ImageBackground, Image, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import images from '@/constants/images'
import FormField from '@/components/FormField'
import ActionButton from '@/components/ActionButton'
import { Link } from 'expo-router'

const SignUp = () => {
  const [form, setForm] = useState({
    fullName:"",
    email:"",
    password:""
  })

  const submit = () => {
    if (!form.email || !form.password || !form.fullName) {
      return Alert.alert("Please fill in all fields");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      return Alert.alert("Invalid email format");	
    }
    if (form.password.length < 8) {
      return Alert.alert("Password must be at least 8 characters");
    }
    Alert.alert("Email: "+ form.email + "\nPassword: " + form.password);
  }
  return (
    <ScrollView contentContainerClassName='h-full'>
        <ImageBackground 
          source={images.bgImage} 
          style={styles.background}
          resizeMode='cover'
        >
          <View className='justify-center h-full w-full px-8 pb-12'>
          <Text className='text-[2.75rem] font-bold text-white'>Create account</Text>
          <Text className='text-[1.15rem] text-white opacity-80 my-1'>Please fill the details below.</Text>
          <FormField title="Email" value={form.email} placeholder={"Email"} handleChangeText={(e) => setForm({...form, email:e})}
          otherStyles="mt-7"
          keyboardType="email-address" />
          <FormField title="Password" value={form.password} placeholder={"Password"} handleChangeText={(e) => setForm({...form, password:e})}
          otherStyles="mt-7" />
          <ActionButton text={"Register"} otherStyle={"mt-7"} handlePress={() => {submit()}} />
          <View className='flex-row item-center mt-5'>
          <Text className='text-[1.15rem] text-white opacity-80'>Already have an account?</Text>
                <Link href="/sign-in" className='text-[1.15rem] text-white opacity-80 ps-1 underline'>Sign in</Link>

          </View>
          </View>
        </ImageBackground>
        
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SignUp
