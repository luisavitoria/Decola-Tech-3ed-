import React, { useState } from "react"
import {View, StyleSheet, Image, TouchableOpacity } from 'react-native'

const App = () => {
  const [toggle, setToggle] = useState(false)

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle)

  return (
    <View style={toggle ? style.containerLight : style.container}>
      <TouchableOpacity onPress={handleChangeToggle}>
         
      <Image
      style={toggle ? style.lightinOn : style.lightinOff}
      source={toggle ? require('./assets/icons/eco-light.png') : require('./assets/icons/eco-light-off.png') }>
      </Image>

      <Image 
      style={style.dioLogo}
      source={toggle ? require('./assets/icons/logo-dio.png') : require('./assets/icons/logo-dio-white.png') }>
      </Image>

      </TouchableOpacity>
      

    </View>
  ) 
  
  
}

export default App

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  lightinOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,

  },
  lightinOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white', //muda a cor da imagem
    width: 150,
    height: 150,

  },
  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 180,
    height: 180,
  }

})