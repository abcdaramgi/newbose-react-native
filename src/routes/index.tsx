import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import ModalPage from '../screens/Modal/index';
// import customTheme from '@theme';
import React, {FC} from 'react';
import {routeOverlayOption} from './routeOptions';
import {MainStackScreen} from './stacks/MainStack';
import BottomTabNavigation from '../components/navigations/BottomTabNavigation';

const RootStack = createStackNavigator();

export const RootStackScreen: FC = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
        ...routeOverlayOption,
      }}>
      <RootStack.Screen name="BottomTab" component={BottomTabNavigation} />
      <RootStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="MyModal"
        component={ModalPage}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerLeft: () => null,
          headerLeftContainerStyle: {
            // paddingLeft: customTheme.space[5],
          },
          headerRightContainerStyle: {
            // paddingRight: customTheme.space[5],
          },
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
      {/* @todo 회원가입 및 로그인 스크린 만들기 */}
      {/* <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen name="Register" component={RegisterScreen} /> */}
    </RootStack.Navigator>
  );
};
