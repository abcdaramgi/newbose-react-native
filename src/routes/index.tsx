import {createStackNavigator} from '@react-navigation/stack';
import ModalPage from '../screens/Modal/index';
import LoginPage from '../screens/Login/index';
// import customTheme from '@theme';
import React, {FC} from 'react';
import {routeOverlayOption} from './routeOptions';
import {MainStack} from './stacks/MainStack';

const RootStack = createStackNavigator();

export const RootStackScreen: FC = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
        ...routeOverlayOption,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <RootStack.Screen
        name="Main"
        component={MainStack}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="MyModal"
        component={ModalPage}
        options={{
          headerShown: false,
          // headerTitleAlign: 'center',
          headerLeft: () => null,
          // headerLeftContainerStyle: {
          //   // paddingLeft: customTheme.space[5],
          // },
          // headerRightContainerStyle: {
          //   // paddingRight: customTheme.space[5],
          // },
          // ...TransitionPresets.ModalPresentationIOS,
        }}
      />
      {/* @todo 회원가입 및 로그인 스크린 만들기 */}
      <RootStack.Screen
        name="Login"
        component={LoginPage}
        options={{headerShown: true}}
      />
      {/* <RootStack.Screen name="Register" component={RegisterScreen} /> */}
    </RootStack.Navigator>
  );
};
