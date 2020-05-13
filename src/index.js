import React, {useState} from 'react';
import {View, Text, StyleSheet, Slider} from 'react-native';

const App = () => {
  const [sliderValue, setSlider] = useState(0);

  return (
    <View style={styles.container}>
      <Slider
        minimumValue={0}
        maximumValue={100}
        onValueChange={(value) => setSlider(value)}
        value={sliderValue}
        minimumTrackTintColor="#f04e23"
        maximumTrackTintColor="#eee"
      />
      <Text style={styles.textSlider}>{sliderValue.toFixed(1)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  textSlider: {
    textAlign: 'center',
    fontSize: 30,
  },
});

export default App;
