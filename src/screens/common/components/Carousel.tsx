import React, {useState, useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import CarouselTab from './CarouselTab';

interface ICarousel {
  gap: number;
  offset: number;
  tabs: any[];
  tabWidth: number;
}

const Indicator = ({focused}: {focused: boolean}) => {
  return (
    <View
      style={[
        styles.indicator,
        focused ? styles.focusedIndicator : styles.unfocusedIndicator,
      ]}
    />
  );
};

export default function Carousel({tabs, tabWidth, gap, offset}: ICarousel) {
  const [tab, setTab] = useState(0);

  const tabStyle = useMemo(() => {
    return StyleSheet.create({
      tab: {
        width: tabWidth,
        marginHorizontal: gap / 2,
      },
    });
  }, [tabWidth, gap]);

  // const Indicator = ({focused}) => (
  //   <View
  //     style={{
  //       margin: '0px 4px',
  //       backgroundColor: focused ? '#262626' : '#dfdfdf',
  //       width: 6,
  //       height: 6,
  //       borderRadius: 3,
  //     }}
  //   />
  // );

  function renderItem({item}: any) {
    return <CarouselTab item={item} style={tabStyle.tab} />;
  }

  const onScroll = (e: any) => {
    const newTab = Math.round(e.nativeEvent.contentOffset.x / (tabWidth + gap));
    setTab(newTab);
  };

  return (
    <View style={styles.container}>
      <FlatList
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{paddingHorizontal: offset + gap / 2}}
        data={tabs}
        decelerationRate="fast"
        horizontal
        keyExtractor={(item: any) => `page__${item.color}`}
        onScroll={onScroll}
        pagingEnabled
        renderItem={renderItem}
        snapToInterval={tabWidth + gap}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.indicatorWrapper}>
        {Array.from({length: tabs.length}, (_, i) => i).map(i => (
          <Indicator key={`indicator_${i}`} focused={i === tab} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorWrapper: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  indicator: {
    margin: 2,
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  focusedIndicator: {
    backgroundColor: '#262626',
  },
  unfocusedIndicator: {
    backgroundColor: '#dfdfdf',
  },
});
