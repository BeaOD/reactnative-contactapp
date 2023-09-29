import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.loginTextContainer}> 
      <Text style={styles.loginText}>Welcome!</Text>
      </View>

      <View> 
        <TextInput style={styles.input} placeholderTextColor='grey' placeholder='Username'/>
        <TextInput style={styles.input} placeholderTextColor='grey'
         placeholder='Password' secureTextEntry={true}/>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Log in </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.noAccountContainer}>
        
          <Text style={styles.noAccountText}>Don't have an account? </Text>
          <Text style={styles.signupText}>Sign up </Text>
      
      </View>
      
      <View style={styles.noAccountContainer}>
      <Text style={styles.letSee}>lets see how it goes now!</Text>
      </View>  
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal:50,
    marginTop:100,
  },
  loginText:{
    color:'#5100ad',
    fontSize:50,
  },
  loginTextContainer:{
    marginBottom:30,
  },
  input:{
    borderBottomColor:'#5100ad',
    borderBottomWidth: 2,
    marginBottom:30,
    fontSize:20,
    height:30,
  },
  forgotPassword:{
    color:'#0853a8',
    alignSelf:'flex-end',
    marginVertical:3,
  },
  buttonContainer:{
    backgroundColor:'#5100ad',
    height: 50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginVertical:50,
  },
  buttonText:{
    color:'white',
    fontSize:25,
  },
  noAccountContainer:{
    flexDirection:'row',
    justifyContent:'center',
  },
  noAccountText:{
    marginRight:10,
    fontSize:16,
  },

  signupText:{
    fontSize:16,
    color:'purple',
  },

  letSee:{
    marginTop:40,
    
  }
});
