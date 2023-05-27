import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button , Input , Image } from 'react-native-elements';

export default function App() {
  return (
     <View style={styles.container}> 
        <Image
            source={require('./assets/figura1.jpg')}
        />  
        <View style={styles.topBar}>
            <Text style={styles.title}>ChatGPT Responde:</Text>
            <StatusBar style="auto" />
        </View>

        <View>
          <Input 
               placeholder="Digite aqui a sua frase para o ChatGPT!" 
               style={styles.frase}
          />
        </View>
        <Button 
        title="Enviar"
        style={styles.botao}
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
    textAlign: "center"
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
