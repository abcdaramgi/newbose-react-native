import React, {FC} from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import HomeScreen from '../../screens/Home/index';
import FeedScreen from '../../screens/Feed/index';
import MyPageScreen from '../../screens/MyPage/index';
import {routeOverlayOption} from '../routeOptions';

// import {customTheme} from '../../theme/index';

const MainStack = createStackNavigator();

export const MainStackScreen: FC = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
        ...routeOverlayOption,
      }}
      initialRouteName="Home">
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          ...TransitionPresets.SlideFromRightIOS, //IOS 스타일의 오른쪽에서 슬라이드되는 전환 효과를 설정
        }}
      />
      <MainStack.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          // headerLeftContainerStyle: {paddingLeft: customTheme.space[5]},
          // headerRightContainerStyle: {paddingRight: customTheme.space[5]},
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name="MyPage"
        component={MyPageScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </MainStack.Navigator>
  );
};
