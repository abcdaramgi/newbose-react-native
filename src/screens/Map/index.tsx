import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import {PROVIDER_GOOGLE} from 'react-native-maps';

const MapScreen: FC = () => {
  return (
    <View style={styles.viewContainer}>
      <MapView
        style={styles.mapContainer}
        provider={PROVIDER_GOOGLE}
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
  mapContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default MapScreen;
