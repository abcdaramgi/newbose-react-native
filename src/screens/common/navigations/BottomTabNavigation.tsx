import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Home/index';
import FeedScreen from '../../Feed/index';
import MyPageScreen from '../../MyPage/index';
// import ModalPage from '../../screens/Modal/index';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Feed" component={FeedScreen} />
      <BottomTab.Screen name="MyPage" component={MyPageScreen} />
      {/* <BottomTab.Screen name="Modal" component={ModalPage} /> */}
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigation;
