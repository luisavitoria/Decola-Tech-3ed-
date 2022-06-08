import React from 'react'
import { StyleSheet, View, Image, Text, SafeAreaView, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import foto from './assets/perfil.jpeg'



const App = () => {

  function handleRedeSocial(rede_social) {
    switch(rede_social) {
      case 'linkedin':
        alert('https://www.linkedin.com/in/lu%C3%ADsa-vit%C3%B3ria-anjos')
        break
      case 'instagram':
        alert('https://instagram.com/luisavitoria')
        break
      case 'github': 
        alert('https://github.com/luisavitoria')
        break
    }
  }

  return (
  
    <View style={style.page}>
      <View style={style.container_cabecalho}>
        <Image source={foto} style={style.foto} />
        <Text style={style.nome}>Luísa Vitória</Text>
        <Text style={style.funcao}>Desenvolvedora Front-end</Text>

        <View style={style.redes_sociais}>
          <TouchableOpacity onPress={() => handleRedeSocial('github')}>
            <Icon name='github' size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRedeSocial('instagram')}>
            <Icon name='instagram' size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
            <Icon name='linkedin' size={30} />
          </TouchableOpacity>
        </View>

      </View>

      <View style={style.card_container}>
        <View style={style.card}>
          <View style={style.card_header}>
            <Text>Experiência Profissional</Text>
          </View>
          <View style={style.card_content}>
          <Text style={style.card_content_text}>Exemplo Experiência Profissional</Text>
          <Text style={style.card_content_text}>Exemplo Experiência Profissional</Text>
          <Text style={style.card_content_text}>Exemplo Experiência Profissional</Text>
          </View>
        </View>
      </View>

      <View style={style.card_container}>
        <View style={style.card}>
          <View style={style.card_header}>
            <Text>Formação acadêmica</Text>
          </View>
          <View style={style.card_content}>
          <Text style={style.card_content_text}>Exemplo formação</Text>
          <Text style={style.card_content_text}>Exemplo </Text>
          <Text style={style.card_content_text}>Exemplo </Text>
          </View>
        </View>
      </View>

    </View>
    
  )
}

export default App;

const style = StyleSheet.create({
  page: {
    backgroundColor: '#e0e1dd',
    flex: 1,

  }, 
  container_cabecalho: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto: {
    width: 170,
    height: 170,
    borderRadius: 125
  }, 
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    color: '#1b263b',
    fontSize: 18,
    marginBottom: 10,
  },
  redes_sociais: {
    flexDirection: 'row',
    width: '40%',
    justifyContent:'space-between',
    marginTop: 20,
  
  }, 
  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  card: {
    width: '60%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#415a77',
   
    padding: 8,
    backgroundColor: '#f5f3f4',
  }, 
  card_header: {
    alignItems: 'center'
  },
  card_content: {
    marginTop: 10
  }, 
  card_content_text: {
    marginBottom: 10
  }

})

