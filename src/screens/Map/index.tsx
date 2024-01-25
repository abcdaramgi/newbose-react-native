import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

const MapScreen: FC = () => {
  return (
    <View style={styles.viewContainer}>
      <MapView
        style={styles.viewContainer}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
});

export default MapScreen;
