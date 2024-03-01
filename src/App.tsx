import React from 'react';
import {StatusBar} from 'react-native';
import {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {RootStackScreen} from './routes/index';
import {enableScreens} from 'react-native-screens';

enableScreens();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navTheme}>
        <QueryClientProvider client={queryClient}>
          <StatusBar />
          <RootStackScreen />
        </QueryClientProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
