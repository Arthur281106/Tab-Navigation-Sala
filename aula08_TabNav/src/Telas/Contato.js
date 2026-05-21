import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>
        Entre em Contato
      </Text>

      <View style={styles.box}>
        <Text>(41) 98765-4321</Text>

        <Text>
          arthur@unicesumar.com
        </Text>

        <Text>
          linkedin.com/arthur
        </Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.textArea}
        placeholder="Digite sua mensagem"
        multiline
        value={mensagem}
        onChangeText={setMensagem}
      />

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>
          Enviar
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f3f4f6",
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },

  box: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    marginBottom: 25,
  },

  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  textArea: {
    backgroundColor: "#fff",
    height: 120,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    textAlignVertical: "top",
  },

  botao: {
    backgroundColor: "#2563eb",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});