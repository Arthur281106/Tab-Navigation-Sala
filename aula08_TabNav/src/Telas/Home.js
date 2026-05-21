import React from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>
          Página Home
        </Text>

        <Text style={styles.subtitulo}>
          Bem-vindo(a)
        </Text>

        <Text style={styles.texto}>
          COMPONENTE
        </Text>

        <Text style={styles.destaque}>
          Tab Navigation
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
  },

  card: {
    width: 320,
    backgroundColor: "#dbeafe",
    padding: 40,
    borderRadius: 25,
    alignItems: "center",
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1f2937",
  },

  subtitulo: {
    marginTop: 10,
    fontSize: 18,
    color: "#6b7280",
  },

  texto: {
    marginTop: 25,
    color: "#9ca3af",
  },

  destaque: {
    fontSize: 28,
    color: "#2563eb",
    fontWeight: "bold",
  },
});