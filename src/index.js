import React, {useState} from 'react';
import {View, Text, StyleSheet, Slider, Switch} from 'react-native';

const App = () => {
  const [sliderValue, setSlider] = useState(0);
  const [switchStatus, setSwitchStatus] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.box}>
          <Slider
            minimumValue={0}
            maximumValue={100}
            onValueChange={(value) => setSlider(value)}
            value={sliderValue}
            minimumTrackTintColor="#f04e23"
            maximumTrackTintColor="#eee"
            thumbTintColor="#f04e23"
          />
          <Text style={styles.textSlider}>{sliderValue.toFixed(1)}</Text>
        </View>
        <View style={styles.box}>
          <Switch
            value={switchStatus}
            onValueChange={(value) => setSwitchStatus(value)}
            thumbColor="#0c773a"
          />
          <Text style={styles.textSwitch}>
            {switchStatus ? 'Ativo' : 'Inativo'}
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#F3F3F3',
  },
  box: {
    margin: 20,
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  textSlider: {
    textAlign: 'center',
    fontSize: 30,
  },
  textSwitch: {
    textAlign: 'center',
    fontSize: 30,
  },
});

export default App;
