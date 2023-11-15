import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { useState } from 'react';
import Homepage from './Homepage';
import { Navigation } from 'react-native-navigation';

export default function App() {

  const [on, setOn] = useState(false);

  const handleClick = () => {
    setOn(!on);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={on ? styles.pressOne : styles.pressTwo} onPress={handleClick} ref={Homepage}>
        <Text style={styles.text}>This is homepage</Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: "#FAFAFA",
    display: 'flex',
    paddingTop: Platform.OS === 'android' && 10,
    backgroundColor: "#f7f7f0",
  },
  text: {
    color: 'white'
  },
  pressOne: {
    backgroundColor: 'red'
  },
  pressTwo: {
    backgroundColor: 'blue',
  }
});