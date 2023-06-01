import { StatusBar } from 'expo-status-bar';
import React , { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button , Input } from 'react-native-elements';
import axios from 'axios';

export default function App() {

    const [texto, setTexto] = useState('')
              
       async function buscarFrase(){
      
        try{

          const response =  await axios
          .post('http://localhost:4000/sentimentos', {texto})
          setTexto(response.data.sentimento);
                    
          }catch(error){
             console.log('ERRO', error);
           };
        }
          
    return (
     <View style={styles.container}> 
        <View style={styles.topBar}>
            <Text style={styles.title}>ChatGPT Responde:</Text>
            <StatusBar style="auto" />
        </View>

        <View>
          <Input 
               placeholder="Digite aqui a sua frase para o ChatGPT!" 
               style={styles.frase}
               onChangeText={(texto) => setTexto(texto)}
               value={texto} 
          />
        </View>
        <Button 
        title="Enviar"
        style={styles.botao}
        onPress={buscarFrase}
        />
       
    </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#D8E5E9',
    },
  topBar: {
    flexDirection: "row",
    backgroundColor: "#328096",
    height: 70,
    justifyContent: "center"
     },
  title: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
    margin: 15
    },
  frase: {
    marginTop: 60,
    textAlign: "center",
    outlineStyle: 'none'
    },
  botao: {
    height: 100,
    width: 300,
    alignSelf: "center",
    borderRadius: 5,
    marginTop: 50,
    fontsize: 50,
    color: "#0000FF"
    } 
});
