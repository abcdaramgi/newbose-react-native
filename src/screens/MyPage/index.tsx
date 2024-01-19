import React, {FC} from 'react';
import {Text, View, Button, StyleSheet, Image} from 'react-native';

const MyPageScreen: FC = () => {
  return (
    <>
      <View style={styles.profileContainer}>
        <View style={styles.avatarContainer}>
          <Image
            source={{uri: 'https://steemitimages.com/u/anpigon/avatar'}}
            style={styles.avatar}
          />
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text>167</Text>
            <Text style={styles.statLabel}>posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text>346</Text>
            <Text style={styles.statLabel}>followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text>192</Text>
            <Text style={styles.statLabel}>following</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {}}
            title=""
            accessibilityLabel="learn more about this purple button"
          />
          <Text>Edit Profile</Text>
          <Button
            // bordered
            // dark
            // small
            // icon
            onPress={() => {}}
            title=""
            accessibilityLabel="learn more about this purple button"
          />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.username}>안피곤</Text>
        <Text>Lark | Computer Jock | Commercial Pilot</Text>
        <Text>www.steemit.com/@anpigon</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  avatarContainer: {
    flex: 1,
    alignItems: 'center',
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
  },
  statsContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
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
});

export default MyPageScreen;
