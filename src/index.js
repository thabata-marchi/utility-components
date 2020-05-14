import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Slider,
  Switch,
  Modal,
  Button,
  SafeAreaView,
} from 'react-native';

const App = () => {
  const [sliderValue, setSlider] = useState(0);
  const [switchStatus, setSwitchStatus] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const entrar = () => {
    setModalVisible(true);
  };

  const sair = () => {
    setModalVisible(false);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
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
        <View style={styles.box}>
          <Button style={styles.btnModal} title="Entrar" onPress={entrar} />
        </View>

        <Modal animationType="slide" visible={modalVisible}>
          <View style={styles.modal}>
            <Text style={styles.textModal}>Seja Bem-vindo!</Text>
            <Button style={styles.btnModal} title="Sair" onPress={sair} />
          </View>
        </Modal>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  box: {
    margin: 20,
    padding: 20,
    flexDirection: 'column-reverse',
    backgroundColor: '#FFF',
    borderBottomWidth: 0.2,
    shadowColor: '#000000',
    elevation: 2,
  },
  modal: {
    backgroundColor: '#292929',
    flex: 1,
    justifyContent: 'center',
  },
  btnModal: {
    fontSize: 20,
    backgroundColor: '#F1f1f1',
  },
  textModal: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 30,
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
