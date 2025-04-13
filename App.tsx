import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Map from './components/Map';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Map
        region={{
          latitude: -19.005180,
          longitude: -98.198210,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});