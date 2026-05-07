import React, { useState } from 'react';
import { SectionList, Text, View, StyleSheet, Modal, Button } from 'react-native';
import data from './data.json';

export default function App() {
  const [selectedAluno, setSelectedAluno] = useState(null);

  return (
    <View style={styles.container}>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item.nome + index}
        renderItem={({ item }) => (
          <Text style={styles.item} onPress={() => setSelectedAluno(item)}>
            {item.nome}
          </Text>
        )}
        renderSectionHeader={({ section: { curso } }) => (
          <Text style={styles.header}>{curso}</Text>
        )}
      />

      {selectedAluno && (
        <Modal
          transparent={true}
          animationType="slide"
          visible={!!selectedAluno}
          onRequestClose={() => setSelectedAluno(null)}
        >
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>{selectedAluno.nome}</Text>
            <Text>CPF: {selectedAluno.cpf}</Text>
            <Text>Nascimento: {selectedAluno.nascimento}</Text>
            <Text>Ingresso: {selectedAluno.ingresso}</Text>
            <Button title="Fechar" onPress={() => setSelectedAluno(null)} />
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 40, paddingHorizontal: 10 },
  header: { fontSize: 20, fontWeight: 'bold', backgroundColor: '#eee', padding: 5 },
  item: { fontSize: 16, padding: 10, borderBottomWidth: 0.5, borderBottomColor: '#ccc' },
  modal: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffffee', padding: 20 },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
});
