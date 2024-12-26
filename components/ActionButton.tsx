import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

interface ActionButtonProps  {
  text: string;
  handlePress: () => void;
  otherStyle?: string;
  isLoading?: boolean;
}
const ActionButton = ({text, handlePress, otherStyle, isLoading=false}: ActionButtonProps) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={0.75}
    disabled={isLoading}
    className={`relative bg-orange-500 rounded-2xl w-full justify-center items-center p-4 ${otherStyle}`}>
      <Text className='text-lg font-medium text-white'>{text}</Text>
    </TouchableOpacity>
  )
}

export default ActionButton