import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
 
 export default class App extends Component {
   constructor(){
     super();
     this.state={word:" ",countcons:0,countvow:0,totalchar:0}
   }

 
 analyze= () =>{
    var countcons=0,countvow=0,totalchar=0;
    var word=this.state.word;
    
    totalchar=word.length;
    for(var i=0;i<word.length;i++){
      var x=word[i].toLowerCase();
      if(x=='a' || x=='e' || x=='i' || x=='o' || x=='u')
        countvow++;
      else
        countcons++;
    }
    this.setState({countcons:countcons,countvow:countvow,totalchar:totalchar});

 }
 
   render() {
     return (
       <View style={styles.container}>
         <TextInput onChangeText={(word) => this.setState({word})} placeholder='word'/>
         <Button color="#DCDCDC"  onPress={this.analyze}  title='Analyse'/>
         <Text>Word: {this.state.word}</Text>
         <Text>No of consonant: {this.state.countcons}</Text>
         <Text>No of vowel: {this.state.countvow}</Text>
         <Text>No of characters: {this.state.totalchar}</Text>
       </View>
     );
   }
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: 'lightgreen',
     alignItems: 'center',
     justifyContent: 'center',
   },
 });
 

 /*the constructor, analyze function and styling was done by Jubaer,
 the render function was done by Syed Zafrul*/