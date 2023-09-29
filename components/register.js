import React,{Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
//import LoginScreen from './LoginScreen'
import ContactsScreen from './ContactsScreen';
//import Contact from './components/Contact'


class Register extends Component {
  constructor(props){
    super(props)
    this.state = {
      email:'',
      password:'',
      names:[]

    }
  }

  render (){
  return (
    <View style={styles.container} showsVerticalScrollIndicator={false}>
      <ContactsScreen/>


     
      <StatusBar style="auto" />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal:50,
    marginTop:100,
  },
 
});

export default Register