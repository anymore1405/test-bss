/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {NavigationContainer} from '@react-navigation/native';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
import React, {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {clientPersister, queryClient} from './src/configs/mmkv';

import RootRoute from './src/route';
import {store} from './src/store';
// YellowBox.ignoreWarnings(['']);
// LogBox.ignoreAllLogs();
dayjs.extend(relativeTime);
dayjs.locale('vi');
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Ho_Chi_Minh');
const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{persister: clientPersister}}>
        <SafeAreaProvider>
          <NavigationContainer>
            <BottomSheetModalProvider>
              <RootRoute />
            </BottomSheetModalProvider>
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistQueryClientProvider>
    </Provider>
  );
};

export default App;
