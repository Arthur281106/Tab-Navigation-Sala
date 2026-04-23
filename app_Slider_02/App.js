import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {
  const [nome, setNome] = useState('');
  const [filme, setFilme] = useState('Matrix');
  const [nota, setNota] = useState(8);
  const [comentario, setComentario] = useState('');
  const [resultado, setResultado] = useState(null);

  function avaliar() {
    setResultado({ nome, filme, nota: nota.toFixed(1), comentario });
  }

  const getEmoji = () => {
    switch (filme) {
      case 'Matrix': return '🕶️';
      case 'Vingadores': return '🦸';
      case 'Batman': return '🦇';
      default: return '🎬';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.titulo}>🎬 Avaliação de Filmes</Text>

        <TextInput
          placeholder="Seu nome"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />

        <Text style={styles.label}>Escolha o filme:</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={filme}
            onValueChange={(itemValue) => setFilme(itemValue)}
          >
            <Picker.Item label="Matrix" value="Matrix" />
            <Picker.Item label="Vingadores" value="Vingadores" />
            <Picker.Item label="Batman" value="Batman" />
          </Picker>
        </View>

        <Text style={styles.emoji}>{getEmoji()}</Text>

        <Text style={styles.nota}>⭐ Nota: {nota.toFixed(1)}</Text>

        <Slider
          minimumValue={0}
          maximumValue={10}
          step={0.5}
          value={nota}
          onValueChange={setNota}
        />

        <TextInput
          placeholder="Comentário"
          value={comentario}
          onChangeText={setComentario}
          style={styles.input}
        />

        <Pressable style={styles.botao} onPress={avaliar}>
          <Text style={styles.botaoTexto}>Avaliar</Text>
        </Pressable>

        {resultado && (
          <View style={styles.resultadoBox}>
            <Text style={styles.resultadoTitulo}>📋 Resultado</Text>
            <Text>👤 {resultado.nome}</Text>
            <Text>🎥 {resultado.filme}</Text>
            <Text>⭐ {resultado.nota}</Text>
            <Text>💬 {resultado.comentario}</Text>
          </View>
        )}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6ECF5',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: '92%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 20,
    elevation: 8
  },
  titulo: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold'
  },
  label: {
    marginBottom: 5,
    fontWeight: '600'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#F9F9F9'
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
    backgroundColor: '#F9F9F9'
  },
  emoji: {
    textAlign: 'center',
    fontSize: 60,
    marginVertical: 10
  },
  nota: {
    marginBottom: 5,
    fontWeight: '600'
  },
  botao: {
    backgroundColor: '#FF5A2C',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  resultadoBox: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#F1F7FF',
    borderRadius: 12
  },
  resultadoTitulo: {
    fontWeight: 'bold',
    marginBottom: 5
  }
});