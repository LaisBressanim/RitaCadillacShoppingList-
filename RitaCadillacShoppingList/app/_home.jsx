import React from 'react'
import {Alert, ImageBackground, StyleSheet, Text, YextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Ionicons } from '@expo/vector-icons';

export default function Home() {

    function addProduto() {
        Alert.alert("Adicionar produto")
    }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:'#000,'}}>
      <ImageBackground
      source={require('../assets/background.jpg')}
      resizeMode='repeat'
      style={{flex: 1, justifyContent: 'flex-start'}}
      >

        <View style={styles.header}>
            <Text style={styles.title}>Lista de Compras</Text>
            <Ionicons name='trash' size={32} color='#fff'> </Ionicons>
            
                
        </View>
        {/*Lista de Compras*/}

        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            </View>  
        </View>

      </ImageBackground>
      </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  header: {
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00000c0',
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
  },
  title: {
    fontSize: 26,
    fontWeight:'bold',
    color: '#ffffff' 
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      width: ''

    }
    flexDirection: 'row',
    elevation: 40,
    flex: 1,
    height: 50,
    marginVertical: 20,
    borderRadius: 30,
    justifyContent: 'center',
  },
  inputContainer: {
    borderRadius: 25,
    height: 50,
    width: 50,
    backgroundColor
  }
})