import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import CarouselTab from './CarouselTab';

interface CarouselProps {
  gap: number;
  offset: number;
  pages: any[];
  pageWidth: number;
}

export default function Carousel({
  pages,
  pageWidth,
  gap,
  offset,
}: CarouselProps) {
  const [page, setPage] = useState(0);

  function renderItem({item}: any) {
    return (
      <CarouselTab
        item={item}
        style={{width: pageWidth, marginHorizontal: gap / 2}}
      />
    );
  }

  const onScroll = (event: any) => {
    const newPage = Math.round(
      event.nativeEvent.contentOffset.x / (pageWidth + gap),
    );
    setPage(newPage);
  };

  return (
    <View style={styles.container}>
      <FlatList
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{
          paddingHorizontal: offset + gap / 2,
        }}
        data={pages}
        decelerationRate={'fast'}
        horizontal
        keyExtractor={(item: any) => `page__${item.color}`}
        onScroll={onScroll}
        pagingEnabled
        renderItem={renderItem}
        snapToInterval={pageWidth + gap}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.indicatorWrapper}>
        {Array.from({length: pages.length}, (_, i) => i).map(i => (
          <View
            style={styles.indicator}
            key={`indicator_${i}`}
            // focused={i === page}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageContainer: {
    width: '100%',
    marginHorizontal: 8,
  },
  indicatorWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  indicator: {
    margin: 4,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: `${(props: {focused: any}) =>
      props.focused ? '#262626' : '#dfdfdf'}`,
  },
});
