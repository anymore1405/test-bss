import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {memo, useCallback} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {rootRoute} from '../../route/configRoute';
import {RootStackParamList} from '../../route/types';
function HomeScreen() {
  const navigation =
    useNavigation<
      NativeStackScreenProps<RootStackParamList, rootRoute.Home>['navigation']
    >();
  const onPressPart1 = useCallback(() => {
    navigation.navigate(rootRoute.Part1);
  }, [navigation]);
  return (
    <SafeAreaView className="flex-1 bg-white justify-center p-3">
      <TouchableOpacity
        className="p-3 bg-blue-500 rounded-xl flex flex-row items-center"
        onPress={onPressPart1}>
        <Text className="font-bold text-white">Part1</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default memo(HomeScreen);
