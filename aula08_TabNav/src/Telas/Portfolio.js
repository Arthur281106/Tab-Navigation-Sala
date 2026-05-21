import React from "react";

import {
  View,
  Text,
  SectionList,
  StyleSheet,
} from "react-native";

const dados = [
  {
    title: "Acadêmicos",

    data: [
      {
        titulo: "Engenharia Eletrônica",
        descricao: "UTFPR - Graduação",
      },

      {
        titulo: "Administração de TI",
        descricao: "FAE - Especialização",
      },

      {
        titulo: "Educação e Novas Tecnologias",
        descricao: "UNINTER - Mestrado",
      },
    ],
  },

  {
    title: "Idiomas",

    data: [
      {
        titulo: "Português",
        descricao: "Nativo",
      },

      {
        titulo: "Inglês",
        descricao: "Avançado",
      },

      {
        titulo: "Espanhol",
        descricao: "Intermediário",
      },
    ],
  },

  {
    title: "Experiência Profissional",

    data: [
      {
        titulo: "Professor Universitário",
        descricao: "8 anos de experiência",
      },

      {
        titulo: "Desenvolvedor Web",
        descricao: "React Native e PHP",
      },

      {
        titulo: "Consultor de TI",
        descricao: "Infraestrutura e Redes",
      },
    ],
  },

  {
    title: "Tecnologias",

    data: [
      {
        titulo: "React Native",
        descricao: "Desenvolvimento Mobile/Web",
      },

      {
        titulo: "PHP",
        descricao: "Backend",
      },

      {
        titulo: "MySQL",
        descricao: "Banco de Dados",
      },

      {
        titulo: "Power BI",
        descricao: "Dashboards e Relatórios",
      },
    ],
  },
];

export default function Portfolio() {
  return (
    <View style={styles.container}>
      <Text style={styles.avatar}>
        👨‍💼
      </Text>

      <Text style={styles.titulo}>
        Meu Portfólio
      </Text>

      <SectionList
        sections={dados}

        keyExtractor={(item, index) =>
          index.toString()
        }

        showsVerticalScrollIndicator={false}

        renderSectionHeader={({ section }) => (
          <Text style={styles.section}>
            {section.title}
          </Text>
        )}

        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitulo}>
              {item.titulo}
            </Text>

            <Text style={styles.cardDescricao}>
              {item.descricao}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dbeafe",
    padding: 20,
  },

  avatar: {
    fontSize: 70,
    textAlign: "center",
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#1f2937",
  },

  section: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2563eb",
    marginTop: 20,
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,

    elevation: 3,
  },

  cardTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
  },

  cardDescricao: {
    marginTop: 5,
    color: "#6b7280",
    fontSize: 15,
  },
});