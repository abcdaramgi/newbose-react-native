import React, {FC} from 'react';
import {TransitionPresets} from '@react-navigation/stack';
import HomeScreen from '../../screens/Home/index';
import FeedScreen from '../../screens/Feed/index';
import MyPageScreen from '../../screens/MyPage/index';
import {routeOverlayOption} from '../routeOptions';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from '../../screens/Search/index';
import MapScreen from '../../screens/Map/index';
// import ModalPage from '../../screens/Modal/index';

// import {customTheme} from '../../theme/index';

const MainStack = createBottomTabNavigator();

//이 코드는 현재 의미가 없음 동작을 안한다
export const MainStackScreen: FC = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
        ...routeOverlayOption,
      }}
      initialRouteName="Home">
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          ...TransitionPresets.SlideFromRightIOS, //IOS 스타일의 오른쪽에서 슬라이드되는 전환 효과를 설정
        }}
      />
      <MainStack.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          // headerLeftContainerStyle: {paddingLeft: customTheme.space[5]},
          // headerRightContainerStyle: {paddingRight: customTheme.space[5]},
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
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
      {/* <MainStack.Screen
        name="Modal"
        component={ModalPage}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          ...TransitionPresets.ModalPresentationIOS,
        }}
      /> */}
    </MainStack.Navigator>
  );
};
