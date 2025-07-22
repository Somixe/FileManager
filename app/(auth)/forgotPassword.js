import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { shadowStyle } from '../../components/shadow';


export default function forgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const checkEmailOnSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    /*if (!email) {
      alert('Email is required');
      return;
    }

    if (!emailRegex.test(email)){
      alert('Invalid Email')
      return;
    }*/                     //A ACTIVER !!!!!!!

    //Rajouter une autre alert dans le cas, ou l'email passé n'est pas dans la BDD

    router.push({
      pathname:'codeForgotPassword',
      params: {email: email},
    });
  };

  return (
    <Pressable  onPress={Keyboard.dismiss} style={{flex:1}}>
      <ScrollView scrollEventThrottle={16} style={styles.root}>
        <View style={styles.loginIconContainer}>
            <Ionicons name="arrow-back-outline" size={30} color="black" style={{marginBottom:90, marginLeft:15}} onPress={() => router.back()}/>
            <Image source={require('../../assets/images/login.png')} style={styles.loginIcon}/>
        </View>
        <View style={styles.container}>

          <View >
            <Text style={styles.labelText}>Forgot your {'\n'} password?</Text>
          </View>
          <View>
            <Text style={styles.noWorriesText}>No worries! It happens. Please {'\n'}enter your account email address.</Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.emailContainer}>
              <Text style={styles.inputText}>Email</Text>
              <TextInput
                style={styles.input}
                keyboardType='email-address'
                autoCorrect={false}     // Désactive la correction automatique
                spellCheck={false}      // Désactive la vérification orthographique
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.submitButton} onPress={checkEmailOnSubmit}>
              <Text style={styles.submitText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Pressable >
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#EACCA7',
  },
  loginIconContainer: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'start',
    gap:90,
    height:145,
    marginTop:60,
  },
  loginIcon: {
    width: 150,
    height: 143,
    marginTop:70,
  },
  container: {
    flex:1,
    flexDirection:'column',
    paddingBottom: 56,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent:'space-between',
    borderRadius: 50,
    height:457,
    marginVertical:65,
    marginHorizontal:18,
  },
  labelText: {
    fontSize: 35,
    color: '#274a65ff',
    fontWeight: 'bold',
    fontFamily:'Gabarito',
    paddingTop: 25,
    paddingBottom:14,
    ...shadowStyle,
  },
  noWorriesText: {
    fontSize:20,
    fontWeight:'regular',
    fontFamily:'Freeman',
    textAlign:'center',
    color:'#808080',
    marginBottom:20,
  },
  emailContainer: {
    marginBottom:10,
  },
  inputContainer:{
    flex:1,
    flexDirection:'column',
    gap:10,
  },
  inputText: {
    fontWeight: 'regular',
    fontFamily:'Gabarito',
    fontSize:19,
    color: '#676767ff',
    margin:5,
    paddingLeft:5,
  },
  input:{
    height:37,
    width: 297,
    backgroundColor: '#EFF1F3',
    borderRadius:8,
    borderWidth:1,
    borderColor: '#BFBFBF',
    fontSize:17,
    fontFamily:'Gabarito',
    fontWeight:'400',
    paddingHorizontal: 12,
  }, 
  bottom: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  submitButton: {
    backgroundColor: '#F18636',
    width: 307,
    height:57,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent:'center',
    ...shadowStyle,
  },
  submitText: {
    color:'white',
    fontFamily:'Gabarito',
    fontWeight:'medium',
    fontSize:24,
  },
});
