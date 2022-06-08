import React, {useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet, View} from 'react-native'

const App = () => {

  const [numero, setNumero] = useState(0)

  function handleNumero() {
    const novoNumero = Math.floor((Math.random() * 100))

    setNumero(novoNumero)
  }

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.numero}>{numero}</Text>
      <TouchableOpacity onPress={handleNumero} style={style.botao} >
        <Text>Gerar número</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#6d6875',
    fontSize: 28,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numero: {
    fontSize: 30,
    color: '#fff',
  },
  botao: {
    backgroundColor: '#fff',
    width: '50%',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
})




export default App;