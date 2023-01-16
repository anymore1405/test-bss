import React, {memo, useCallback} from 'react';
import {
  Image,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {User} from '../../../../api/part1';

export type ItemRandomUserProps = ListRenderItemInfo<User>;

interface FrontProps {
  item: User;
  onPress: TouchableOpacityProps['onPress'];
}

function Front({item, onPress}: FrontProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 rounded-xl p-3 bg-gray-100 m-3">
      <Image
        source={{uri: item.avatar}}
        className={'w-32 h-32 rounded-full mx-auto'}
      />
      <Text className="font-bold text-blue-500 mt-2 text-center">
        {item.username}
      </Text>
    </TouchableOpacity>
  );
}

function Back({item, onPress}: FrontProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 rounded-xl p-3 bg-gray-100 m-3">
      <Text className="font-bold text-blue-500 mt-2 text-center">
        {item.email}
      </Text>
    </TouchableOpacity>
  );
}

function ItemRandomUser({item}: ItemRandomUserProps) {
  const [side, setSide] = React.useState<boolean>(false);
  const changeSide = useCallback(() => {
    setSide(prev => !prev);
  }, []);
  return (
    <View className="flex-1">
      {side === true ? (
        <Back item={item} onPress={changeSide} />
      ) : (
        <Front item={item} onPress={changeSide} />
      )}
    </View>
  );
}

export default memo(ItemRandomUser);
