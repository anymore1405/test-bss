import React, {memo} from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

export interface ButtonUIProps extends TouchableOpacityProps {
  loading?: boolean;
  title: string;
}

function ButtonUI({loading, title, ...props}: ButtonUIProps) {
  return (
    <TouchableOpacity
      className="bg-blue-600 p-4 rounded-xl flex flex-row items-center justify-center"
      {...props}>
      {loading && <ActivityIndicator className="mr-2" />}
      <Text className="text-white font-bold uppercase text-center">
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default memo(ButtonUI);
