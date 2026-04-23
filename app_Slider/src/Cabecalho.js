import React from 'react';
import { View, Text, Image } from 'react-native';
import { estilos } from './stylesheet/estilos';

export default function Cabecalho() {

  return (
    <View style={estilos.cabecalho}>

      <Image
        source={{
          uri: "https://tse3.mm.bing.net/th/id/OIP.gu1OTpd4vuoavARPoUzr1wHaHa?pid=ImgDet&w=151&h=151&c=7&o=7&rm=3"
        }}
        style={estilos.logo}
      />

      <Text style={estilos.textoCabecalho}>
        Componente Slider
      </Text>

    </View>
  );
}