import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({

  cabecalho: {
    backgroundColor: '#fff',
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  textoCabecalho: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },

  logo: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },

  conteudo: {
    flex: 1,
    padding: 20,
  },

  textoConteudo: {
    fontSize: 14,
    marginBottom: 10,
    color: '#333',
  },

  entradaTextoConteudo: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },

  botaoConteudo: {
    backgroundColor: '#333',
    padding: 10,
    marginTop: 15,
    borderRadius: 8,
  },

  rodape: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    alignItems: 'center',
  },

  textoRodape: {
    fontSize: 12,
    color: '#666',
  },

  imgRodape: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
});