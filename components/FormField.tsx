import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      {/* <Text className='text-base text-gray-100 font-medium'>{title}</Text> */}
      <View className='w-full flex-row items-center h-16 px-4 border-2 border-slate-900 focus:border-slate-800 bg-slate-900 rounded-2xl'>
        <TextInput className='flex-1 text-white focus:border-red-500' 
        value={value}
        placeholder={placeholder}
        placeholderTextColor={"#f4f4f4"}
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}/>

        {title === "Password" && (
            <TouchableOpacity onPress={()=>setShowPassword(!showPassword)} className=''>
                <Text className='text-white'>{showPassword ? "Hide" : "Show"}</Text>
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField