
import React from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';


const App = () => {
  return (
    <>
      <Text style={styles.text}>Oi mundo!</Text>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
});

export default App;
