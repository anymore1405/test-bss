import React, {memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export interface NavigationBarProps {
  title: string;
  onBackPress?: () => void;
  onRightPress?: () => void;
  iconRight?: string;
}

function NavigationBar({
  title,
  iconRight = 'add',
  onBackPress,
  onRightPress,
}: NavigationBarProps) {
  return (
    <View className="flex flex-row items-center justify-between h-14 bg-white">
      <View className="absolute flex justify-center items-center w-full">
        <Text className="font-bold text-lg">{title}</Text>
      </View>
      {onBackPress ? (
        <TouchableOpacity className="p-3" onPress={onBackPress}>
          <Ionicons name="chevron-back" size={25} />
        </TouchableOpacity>
      ) : (
        <View />
      )}
      {onRightPress ? (
        <TouchableOpacity className="p-3" onPress={onRightPress}>
          <Ionicons name={iconRight} size={25} />
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
}

export default memo(NavigationBar);
