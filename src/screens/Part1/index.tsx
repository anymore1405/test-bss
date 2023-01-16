import {useNavigation} from '@react-navigation/native';
import React, {memo, useCallback} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {User} from '../../api/part1';
import {useRandomUsers} from '../../store/part1/hooks';
import ItemRandomUser from './components/Item';
function Part1Screen() {
  const navigation = useNavigation();
  const {data, fetchData, isLoading} = useRandomUsers();
  const renderItem = useCallback<ListRenderItem<User>>(
    ({index, item, separators}) => (
      <ItemRandomUser index={index} item={item} separators={separators} />
    ),
    [],
  );
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex flex-row justify-between items-center">
        <TouchableOpacity className="p-3" onPress={navigation.goBack}>
          <Text className="text-blue-500">Back</Text>
        </TouchableOpacity>
        <Text className="font-bold text-2xl">Part1</Text>
        <View />
      </View>
      <View className="flex flex-row justify-center">
        <TouchableOpacity
          className="p-3 bg-blue-500 rounded-xl flex flex-row items-center"
          onPress={fetchData}>
          {isLoading && <ActivityIndicator />}
          <Text className="font-bold text-white">Fetch Another</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        numColumns={2}
        data={data}
        refreshing={isLoading}
        renderItem={renderItem}
        ListEmptyComponent={
          <View>
            <Text>Empty</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

export default memo(Part1Screen);
