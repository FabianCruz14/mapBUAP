import React from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';
import Map from './components/Map';

export default function App() {
  const region = {
    latitude: 19.004724,
    longitude: -98.204391,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Map region ={region} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});