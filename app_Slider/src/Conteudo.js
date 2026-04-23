import React, { useState } from "react";
import { View, Text, TextInput, TouchableHighlight, Alert } from "react-native";
import { estilos } from "./stylesheet/estilos";
import Slider from "@react-native-community/slider";

export default function Conteudo() {

  const [corFundo, setCorFundo] = useState("#ffffff");
  const [corTexto, setCorTexto] = useState("#000");
  const [corInput, setCorInput] = useState("#ffff00");
  const [nome, setNome] = useState("");

  const texto =
    "O Slider permite escolher valores arrastando um botão.";

  function verifica() {
    if (nome !== "") {
      Alert.alert("Olá " + nome, "Teste os sliders!");
    } else {
      Alert.alert("Erro", "Digite seu nome!");
    }
  }

  function foco() {
    setCorInput("orange");
  }

  function blur() {
    setCorInput("#ffff00");
  }

  function slider1() {
    const cor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setCorTexto(cor);
  }

  function slider2() {
    const cor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setCorFundo(cor);
  }

  return (
    <View style={[estilos.conteudo, { backgroundColor: corFundo }]}>

      <Text style={[estilos.textoConteudo, { color: corTexto }]}>
        {texto}
      </Text>

      <TextInput
        style={[estilos.entradaTextoConteudo, { backgroundColor: corInput }]}
        value={nome}
        onChangeText={setNome}
        onFocus={foco}
        onBlur={blur}
      />

      <Text style={estilos.textoConteudo}>Slider 1</Text>

      <Slider
        minimumValue={0}
        maximumValue={100}
        step={5}
        onValueChange={slider1}
      />

      <Text style={estilos.textoConteudo}>Slider 2</Text>

      <Slider
        minimumValue={0}
        maximumValue={100}
        step={10}
        minimumTrackTintColor="white"
        maximumTrackTintColor="red"
        onValueChange={slider2}
      />

      <TouchableHighlight
        style={estilos.botaoConteudo}
        onPress={verifica}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>
          CLIQUE AQUI
        </Text>
      </TouchableHighlight>

    </View>
  );
}