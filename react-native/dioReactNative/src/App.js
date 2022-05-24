import React  from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar, Image, Pressable, Linking} from 'react-native';


const colorGithub = '#010409'
const colorFontGithub = '#C9D1D9'
const colorDarkFontGithub = '#4F565E'
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/70411877?v=4'
const urlToMyGithub = 'https://github.com/luisavitoria'


const App = () => {
    const handlePressGoToGithub = async () => {
        console.log('verificando link')
        const response = await Linking.canOpenURL(urlToMyGithub)
        if(response) {
            console.log('link aprovado')
            await Linking.openURL(urlToMyGithub)
        }
    }

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
            <View style={style.content}>
                
                <Image style={style.avatar} source={{uri: imageProfileGithub}} />
                <Text accessibilityLabel='Nome: Luísa Vitória' style={[style.defaultText, style.name]}>Luísa Vitória </Text>
                <Text style={[style.defaultText, style.nickname]}>luisavitoria</Text>
                <Text style={[style.defaultText, style.description]}>Front-end dev</Text>
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText]}>Open in GitHub</Text>
                    </View>
                </Pressable>
                
            </View>
        </SafeAreaView>
        
    ) 
}

export default App

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1, //expandir para tela inteira
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 150,
        width: 150,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#fff'
    },
    defaultText: {
        color: '#fff',

    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colorFontGithub,

    },
    nickname: {
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colorFontGithub,
    },
    button: {
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,

    }
})

//safeareaview: parte da tela "cortada" (iphone)

//colunas ao inves de linhas (flexDirection: row)

