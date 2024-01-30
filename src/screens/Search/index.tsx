import React, {FC} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

type ItemProps = {title: string};
type RecentSearchItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text>{title}</Text>
  </View>
);

const recentSearchWords = ['apple', 'banana', 'cat', 'dog', 'egg'];

const RecentSearchItem = ({title}: RecentSearchItemProps) => (
  <View style={styles.recentSearchItem}>
    <Text>{title}</Text>
  </View>
);

const SearchScreen: FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.topContainer}>
        {/* <Button
          title="<"
          onPress={() => navigation.navigate('Home' as never)}
        /> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home' as never)}>
          <Text>◀</Text>
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder="검색어를 입력하세요" />
      </View>
      <View style={styles.recentSearchContainer}>
        <Text style={styles.textStyles}>최근 검색어</Text>
        <View style={styles.recemeSearchWordContainer}>
          {recentSearchWords.map((word, index) => (
            <RecentSearchItem key={index} title={word} />
          ))}
        </View>
      </View>
      <View style={styles.hotKeywordContainer}>
        <Text style={styles.textStyles}>인기 검색어</Text>
        <View style={styles.hotKeywordItemContainer}>
          <Item title="1위 상의" />
          <Item title="2위 하의" />
          <Item title="3위 셔츠" />
          <Item title="4위 바지" />
          <Item title="5위 패딩" />
          <Item title="6위 신발" />
          <Item title="7위 양말" />
          <Item title="8위 저지" />
          <Item title="9위 슈트" />
          <Item title="10위 고트" />
        </View>
      </View>
      <View style={styles.hotKeywordContainer}>
        <Text style={styles.textStyles}>사진들어오ㅓㄴ다</Text>
        <View style={styles.hotListContainer}>
          <Image
            source={require('../../public/images/상의1.jpg')}
            style={styles.hotListImage}
          />
          <Image
            source={require('../../public/images/하의1.jpg')}
            style={styles.hotListImage}
          />
          <Image
            source={require('../../public/images/전신샷4.jpg')}
            style={styles.hotListImage}
          />
        </View>
      </View>
      <View style={styles.adContainer}>
        <Text>여기부터는 광고가 접수하겠습니다</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textStyles: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    // borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  topContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
  recentSearchContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    marginHorizontal: 10,
  },
  recentSearchItem: {
    // backgroundColor: 'yellow',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 45,
    padding: 5,
    marginVertical: 10,
    marginHorizontal: 5,
    paddingHorizontal: 10,
  },
  recemeSearchWordContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  input: {
    height: 40,
    width: 345,
    margin: 6,
    borderWidth: 1,
    borderRadius: 10,
    // marginLeft: 50,
    backgroundColor: 'whitesmoke',
  },
  hotKeywordContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginTop: 40,
  },
  hotKeywordItemContainer: {
    // backgroundColor: 'orange',
    flexWrap: 'wrap',
    height: 100,
    minWidth: '100%',
  },
  hotListContainer: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    paddingVertical: 10,
    marginTop: 20,
    // backgroundColor: 'pink',
  },
  hotListImage: {
    width: 150,
    height: 150,
    marginHorizontal: 10,
  },
  item: {
    // backgroundColor: 'red',
    width: 150,
    height: 20,
  },
  adContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    marginHorizontal: 10,
    paddingVertical: 40,
  },
});

export default SearchScreen;
