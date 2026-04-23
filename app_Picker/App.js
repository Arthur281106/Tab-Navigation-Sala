import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [nome, setNome] = useState('');
  const [linguagem, setLinguagem] = useState('JavaScript');
  const [mensagem, setMensagem] = useState('');

  function verificar() {
    if (nome.trim() === '') {
      setMensagem('⚠️ Por favor, digite seu nome');
    } else {
      setMensagem(`👋 Olá ${nome}!\n💻 Linguagem escolhida: ${linguagem}`);
    }
  }

  const getEmoji = () => {
    switch (linguagem) {
      case 'JavaScript': return '🟨';
      case 'Python': return '🐍';
      case 'Java': return '☕';
      case 'C#': return '🎯';
      default: return '💻';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.titulo}>💻 Escolha sua linguagem</Text>

        <TextInput
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />

        <Text style={styles.label}>Selecione:</Text>

        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={linguagem}
            onValueChange={(itemValue) => setLinguagem(itemValue)}
          >
            <Picker.Item label="JavaScript" value="JavaScript" />
            <Picker.Item label="Python" value="Python" />
            <Picker.Item label="Java" value="Java" />
            <Picker.Item label="C#" value="C#" />
          </Picker>
        </View>

        <Text style={styles.emoji}>{getEmoji()}</Text>

        <Pressable style={styles.botao} onPress={verificar}>
          <Text style={styles.botaoTexto}>Verificar</Text>
        </Pressable>

        {mensagem !== '' && (
          <View style={styles.resultadoBox}>
            <Text style={styles.resultado}>{mensagem}</Text>
          </View>
        )}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F0FE',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: '90%',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 20,
    elevation: 5
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  label: {
    marginBottom: 5,
    fontWeight: '600'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9'
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden'
  },
  emoji: {
    textAlign: 'center',
    fontSize: 50,
    marginBottom: 15
  },
  botao: {
    backgroundColor: '#4A90E2',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center'
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  resultadoBox: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#EEF4FF',
    borderRadius: 10
  },
  resultado: {
    textAlign: 'center',
    fontSize: 16
  }
});