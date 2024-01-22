import FirstButton from '../../components/FirstButton';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {FC} from 'react';
import {Text, View, TextInput, StyleSheet, Button, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text>{title}</Text>
  </View>
);

const Tab = createMaterialTopTabNavigator();

const HomeScreen: FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <TextInput style={styles.input} placeholder="검색어" />
      <View style={styles.viewContainer}>
        <Item title="ddd" />
        <Item title="zzz" />
        <Item title="zzz" />
        <Item title="zzz" />
        <Item title="zzz" />
        <Item title="zzz" />
        <Item title="zzz" />
        <Item title="zzz" />
        <Button
          title="go to first"
          onPress={() => navigation.navigate('MyModal' as never)} //as never을 붙여서 되긴하는데 이게 맞는건지는 모르겠음
        />
        <Tab.Navigator>
          <Tab.Screen name="FirstButton" component={FirstButton} />
        </Tab.Navigator>

        {/* <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      /> */}
      </View>
      <View style={styles.viewContainer2}>
        <View style={styles.item2} />
      </View>

      <View style={styles.viewContainer3}>
        <Text>근처가게or룩북</Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../public/images/전신샷1.jpg')}
            style={styles.wholeImage}
          />
          <Image
            source={require('../../public/images/전신샷2.jpg')}
            style={styles.wholeImage}
          />
          <Image
            source={require('../../public/images/전신샷3.jpg')}
            style={styles.wholeImage}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 32,
  },
  viewContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 10,
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
  viewContainer2: {
    marginHorizontal: 10,
    backgroundColor: 'green',
  },
  item2: {
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 50,
    marginVertical: 10,
    marginHorizontal: 45,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
  },
  viewContainer3: {
    marginHorizontal: 10,
    backgroundColor: 'pink',
    flexDirection: 'column',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wholeImage: {
    width: 120,
    height: 200,
    // marginHorizontal: 5,
  },
});

export default HomeScreen;
