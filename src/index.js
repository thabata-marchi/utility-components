import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Slider,
  Switch,
  Modal,
  Button,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const App = () => {
  const [sliderValue, setSlider] = useState(0);
  const [switchStatus, setSwitchStatus] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [inputAsync, setInputAsync] = useState('');
  const [nomeInput, setNomeInput] = useState('');

  useEffect(() => {
    guardaDados();
  }, []);

  //ComponentDidMount - Quando o componente é montado em tela
  const guardaDados = async () => {
    await AsyncStorage.getItem('nome').then((value) => {
      setNomeInput(value);
    });
  };

  useEffect(() => {
    nomeInput !== '' ? setNome() : null;
  }, [nomeInput]);

  const setNome = async () => {
    await AsyncStorage.setItem('nome', nomeInput);
  };

  const entrar = () => {
    setModalVisible(true);
  };

  const sair = () => {
    setModalVisible(false);
  };

  const gravaNome = () => {
    setNomeInput(inputAsync);
    Keyboard.dismiss();
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* Exemplo de Slider */}
        <ScrollView>
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

          {/* Exemplo de Switch */}
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

          {/* Exemplo de Modal */}
          <View style={styles.box}>
            <Button style={styles.btnModal} title="Entrar" onPress={entrar} />
          </View>
          <Modal
            transparent={true}
            animationType="slide"
            visible={modalVisible}>
            <View style={styles.modalCentered}>
              <View style={styles.modal}>
                <Text style={styles.textModal}>Seja Bem-vindo!</Text>
                <Button style={styles.btnModal} title="Sair" onPress={sair} />
              </View>
            </View>
          </Modal>

          {/* Exemplo de AsyncStorage */}
          <View style={styles.box}>
            <View style={styles.viewInput}>
              <TextInput
                style={styles.input}
                value={inputAsync}
                onChangeText={(text) => setInputAsync(text)}
                underlineColorAndroid="transparent"
              />
              <TouchableOpacity onPress={gravaNome}>
                <Text style={styles.botao}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.nome}>{nomeInput}</Text>
        </ScrollView>
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
  modalCentered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modal: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnModal: {
    fontSize: 20,
    backgroundColor: '#F1f1f1',
  },
  textModal: {
    color: '#333',
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 30,
  },
  textSlider: {
    textAlign: 'center',
    fontSize: 30,
  },
  textSwitch: {
    textAlign: 'center',
    fontSize: 30,
  },

  viewInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
  },
  botao: {
    backgroundColor: '#222',
    color: '#FFF',
    height: 40,
    padding: 10,
    marginLeft: 4,
  },
  nome: {
    marginTop: 5,
    fontSize: 30,
    textAlign: 'center',
    flex: 1,
  },
});

export default App;
