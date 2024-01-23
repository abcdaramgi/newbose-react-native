import React, {FC} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
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
        <Button
          title="<"
          onPress={() => navigation.navigate('Home' as never)}
        />
        <TextInput style={styles.input} placeholder="검색어를 입력하세요" />
      </View>
      <View style={styles.recentSearchContainer}>
        <Text>최근 검색어</Text>
        <View style={styles.recemeSearchWordContainer}>
          {recentSearchWords.map((word, index) => (
            <RecentSearchItem key={index} title={word} />
          ))}
        </View>
      </View>
      <View style={styles.hotKeywordContainer}>
        <Text>인기 검색어</Text>
        <View style={styles.hotKeywordItemContainer}>
          <Item title="1위" />
          <Item title="2위" />
          <Item title="3위" />
          <Item title="4위" />
          <Item title="5위" />
          <Item title="6위" />
          <Item title="7위" />
          <Item title="8위" />
          <Item title="9위" />
          <Item title="10위" />
        </View>
      </View>

      <View style={styles.hotListContainer}>
        <Text>사진들어오ㅓㄴ다</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'red',
  },
  recentSearchContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: 'blue',
    marginHorizontal: 10,
  },
  recentSearchItem: {
    backgroundColor: 'yellow',
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
    width: 300,
    margin: 6,
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 20,
  },
  hotKeywordContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: 'green',
    marginHorizontal: 10,
  },
  hotKeywordItemContainer: {
    backgroundColor: 'orange',
    flexWrap: 'wrap',
    height: 100,
    minWidth: '100%',
  },
  hotListContainer: {flexDirection: 'row', flexWrap: 'wrap'},
  item: {
    backgroundColor: 'red',
    width: 150,
    height: 20,
  },
});

export default SearchScreen;
