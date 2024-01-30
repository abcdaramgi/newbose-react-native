import FirstButton from '../../components/FirstButton';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {FC} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  Image,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Carousel from '../../components/common/Carousel';

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

const screenWidth = Math.round(Dimensions.get('window').width);
const PAGES = [
  {
    num: 1,
    color: '#86E3CE',
  },
  {
    num: 2,
    color: '#D0E6A5',
  },
  {
    num: 3,
    color: '#FFDD94',
  },
  {
    num: 4,
    color: '#FA897B',
  },
  {
    num: 5,
    color: '#CCABD8',
  },
];

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
        <Item title="배송" />
        <Item title="예약" />
        <Item title="기능" />
        <Item title="기능" />
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
        {/* <View style={styles.item2} /> */}
        <Carousel
          gap={16}
          offset={36}
          pages={[PAGES]}
          pageWidth={screenWidth - (16 + 36) * 2}
        />
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
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 10,
    width: 70,
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
    // backgroundColor: 'green',
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
