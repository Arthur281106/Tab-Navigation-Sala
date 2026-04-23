import React from 'react';
import { View, Text, Image } from 'react-native';
import { estilos } from './stylesheet/estilos';

export default function Rodape() {

  const logo = "https://tse3.mm.bing.net/th/id/OIP.gu1OTpd4vuoavARPoUzr1wHaHa?pid=ImgDet&w=151&h=151&c=7&o=7&rm=3";

  return (
    <View style={estilos.rodape}>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={{ uri: logo }} style={estilos.imgRodape} />
        <Text style={estilos.textoRodape}>Seu Nome</Text>
      </View>

      <Text style={estilos.textoRodape}>2026</Text>

    </View>
  );
}