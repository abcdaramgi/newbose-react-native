import React, {FC} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

const TestTabScreen2: FC = () => {
  // @todo flatlist를 사용해서 글들이 리스트로 나오게 만들기
  // <FlatList
  //   data={DATA}
  //   renderItem={({item}) => <Item title={item.title} />}
  //   keyExtractor={item => item.id}
  // />;
  const renderSections = () => {
    return (
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>여기는 제목인데예</Text>
        <Text>
          여기는 아마 내용이 있을기고요 좀 길게 있었으면 좋겠으니까 좀 길게
          블라블라 한번 적어볼게요 아래로 줄이 내려갔으면 좋겠는데 그게 자동으로
          자연스럽게 이루어질까요?
        </Text>
        <Image
          source={require('../../../public/images/vbuOix_cut.jpg')}
          style={styles.postImage}
        />
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.viewStyle}>{renderSections()}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  postTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewStyle: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  postContainer: {
    backgroundColor: 'white',
  },
  postImage: {
    width: width,
    height: height,
  },
});

export default TestTabScreen2;
