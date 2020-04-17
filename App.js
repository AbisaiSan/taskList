import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

class App extends Component{
  render() {
    return(
      <View style={styles.container}>

        <View style={styles.navBar}>
          <Text style={styles.textLogo}>ListTask</Text>

        </View>

        <View style={styles.card}>

          <View style={styles.cardTask}>
              <Text style={styles.textTask}>Titulo da tarefa</Text>

              <TextInput
              style={styles.input}
              />

              <Text style={styles.textTask}>Data limite para entrega</Text>

              <TextInput
              style={styles.input}
              />

              <Text style={styles.textTask}>Descrição da tarefa</Text>

              <TextInput
              style={styles.input}
              />
          </View>

          <View style={styles.btn}>
          <TouchableOpacity style={styles.btnConcluir}>
            <View>
              <Text>Concluir</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnEditar}>
            <View>
              <Text>Editar</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnExcluir}>
            <View>
              <Text>Excluir</Text>
            </View>
          </TouchableOpacity>
        </View>
          
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#8ed294'
  },
  navBar:{
   height:50,
    backgroundColor:'#8ed294'
  },
  textLogo:{
    margin:15,
    fontSize:20,
    fontWeight:'bold',
    fontFamily:'Roboto',
    fontStyle:'italic',
    textAlign:'center',
    alignItems:'center',
    color:'#FFF'
  },
  card:{
    flex:1,
    backgroundColor:'#FFF',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-start',
  },
  textTask:{
    fontSize:15,
    textAlign:'right',
    fontWeight:'bold'
  },
  input:{
    
    width:250,
    height:45,
    borderWidth:1,
    borderRadius:7,
    borderColor:'#222',
    margin:10,
    fontSize:20,
    padding:10,
  },
  cardTask:{
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
  },
  btn:{
    flexDirection:'row',
    
    alignItems:'center'
  },
  btnConcluir:{
    width:60,
    height:30,
    borderWidth:2,
    borderColor:'#1e7e34',
    borderRadius:5,
    margin:10,
    backgroundColor:'#1e7e34'
    
  },
  btnEditar:{
    width:60,
    height:30,
    borderWidth:2,
    borderColor:'#007bff',
    borderRadius:5,
    margin:10,
    backgroundColor:'#007bff'
    
  },
  btnExcluir:{
    width:60,
    height:30,
    borderWidth:2,
    borderColor:'#dc3545',
    borderRadius:5,
    margin:10,
    backgroundColor:'#dc3545'
    
  }
})


export default App;
