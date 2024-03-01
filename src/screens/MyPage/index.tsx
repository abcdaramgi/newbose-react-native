import React, {FC} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import TestTabScreen from '../common/components/testTabScreen';
import TestTabScreen2 from '../common/components/testTabScreen2';
import TestTabScreen3 from '../common/components/testTabScreen3';
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
      {/* <View style={styles.headContainer}>
        <Text>id</Text>
      </View> */}
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
            <TouchableOpacity style={styles.followbutton}>
              <Text>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>♡</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.username}>NewBose</Text>
        <Text>대구광역시 중구 ******</Text>
        <Text>www.*****.com</Text>
      </View>
      {/* <View style={styles.tapButtonContainer}>
        <Button onPress={() => {}} title="profile" />
        <Button onPress={() => {}} title="image" />
        <Button onPress={() => {}} title="blog" />
      </View> */}

      {/* 렌더링 위치 (웹에서는 컴포넌트화 시켰는데 이렇게 깡으로 렌더링 해줘도 되나?) */}
      {/* {this.renderSection()} */}
      <Tab.Navigator>
        <Tab.Screen name="피드" component={TestTabScreen} />
        <Tab.Screen name="게시글" component={TestTabScreen2} />
        <Tab.Screen name="매거진" component={TestTabScreen3} />
      </Tab.Navigator>
    </>
  );
};

// @todo: tailwind css 적용
const styles = StyleSheet.create({
  followbutton: {
    width: 200,
    height: 25,
    backgroundColor: 'white',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  button: {
    width: 80,
    height: 25,
    backgroundColor: 'deepskyblue',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'gray',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  headContainer: {},
  profileContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    backgroundColor: 'white',
  },
  avatarContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
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
    backgroundColor: 'white',
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
    backgroundColor: 'white',
    // width: 200,
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
    backgroundColor: 'white',
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
