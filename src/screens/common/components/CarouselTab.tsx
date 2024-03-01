import React from 'react';
import {View, Text, StyleSheet, ViewStyle} from 'react-native';

interface Tab {
  item: {num: number; color: string};
  style: ViewStyle;
}

export default function CarouselTab({item, style}: Tab) {
  return (
    <View style={[styles.page, {backgroundColor: item.color}, style]}>
      <Text style={styles.text}>{item.num}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: `${(props: {color: any}) => props.color}`,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  text: {
    fontSize: 30,
  },
});
