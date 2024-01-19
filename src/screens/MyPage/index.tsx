import React, {FC} from 'react';
import {Text, View, Button, StyleSheet, Image} from 'react-native';
import profile from '../../components/testTabScreen';
import image from '../../components/testTabScreen2';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const MyPageScreen: FC = () => {
  // const renderSection = () => {
  //   return (
  //     <View>
  //       <Text>this is first</Text>
  //     </View>
  //   );
  // };

  const Tab = createMaterialTopTabNavigator();

  return (
    <>
      <View style={styles.profileContainer}>
        <View style={styles.avatarContainer}>
          <Image
            // source={{uri: '../public/images/vbuOix_cut.jpg'}}
            source={require('../../public/images/vbuOix_cut.jpg')}
            style={styles.avatar}
          />
        </View>
        <View style={styles.stats3}>
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text>999</Text>
              <Text style={styles.statLabel}>posts</Text>
            </View>
            <View style={styles.statItem}>
              <Text>999</Text>
              <Text style={styles.statLabel}>followers</Text>
            </View>
            <View style={styles.statItem}>
              <Text>999</Text>
              <Text style={styles.statLabel}>following</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => {}}
              title="즐겨찾기"
              accessibilityLabel="learn more about this purple button"
            />
            <Button
              // bordered
              // dark
              // small
              // icon
              onPress={() => {}}
              title="안즐겨찾기"
              accessibilityLabel="learn more about this purple button"
            />
          </View>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.username}>싸우자 귀신아</Text>
        <Text>대구광역시 중구 서성로 20길 25</Text>
        <Text>www.naver.com</Text>
      </View>
      <View style={styles.tapButtonContainer}>
        <Button onPress={() => {}} title="profile" />
        <Button onPress={() => {}} title="image" />
        <Button onPress={() => {}} title="blog" />
      </View>

      {/* 렌더링 위치 (웹에서는 컴포넌트화 시켰는데 이렇게 깡으로 렌더링 해줘도 되나?) */}
      {/* {this.renderSection()} */}
      <Tab.Navigator>
        <Tab.Screen name="profile" component={profile} />
        <Tab.Screen name="image" component={image} />
        {/* <Tab.Screen name="blog" component={blog} /> */}
      </Tab.Navigator>
    </>
  );
};

// @todo: tailwind css 적용
const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    backgroundColor: 'red',
  },
  avatarContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
  },
  stats3: {
    flex: 3,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'green',
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 10,
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: 'yellow',
  },
  editProfileButton: {
    flex: 4,
    marginLeft: 10,
    justifyContent: 'center',
    height: 30,
  },
  settingsButton: {
    flex: 1,
    marginRight: 10,
    marginLeft: 5,
    justifyContent: 'center',
    height: 30,
  },
  infoContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  tapButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default MyPageScreen;
