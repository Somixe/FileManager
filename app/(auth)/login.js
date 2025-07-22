<<<<<<< HEAD
=======
import { Ionicons } from '@expo/vector-icons';
>>>>>>> ced0e7bf4425a9c854b2a96da8f9ac05db4d2fe8
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
import PasswordLogin from '../../components/password/PasswordLogin';
import { shadowStyle } from '../../components/shadow';



export default function Login() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);


  return (
    <Pressable  onPress={Keyboard.dismiss} style={{flex:1}}>
      <ScrollView scrollEventThrottle={16} style={styles.root}>
<<<<<<< HEAD
        <View style={styles.iconContainer}>
=======
        <View style={styles.loginIconContainer}>
            <Ionicons name="arrow-back-outline" size={30} color="black" style={{marginBottom:90, marginLeft:15}} onPress={() => router.back()}/>
>>>>>>> ced0e7bf4425a9c854b2a96da8f9ac05db4d2fe8
            <Image source={require('../../assets/images/login.png')} style={styles.loginIcon}/>
        </View>
        <View style={styles.container}>

          <View >
            <Text style={styles.labelText}>Log in</Text>
          </View>
          <View style={styles.inputContainer}>
<<<<<<< HEAD
            <View style={styles.emailContainer}>
=======
            <View>
>>>>>>> ced0e7bf4425a9c854b2a96da8f9ac05db4d2fe8
              <Text style={styles.inputText}>Email</Text>
              <TextInput
                style={styles.input}
                keyboardType='email-address'
                autoCorrect={false}     // Désactive la correction automatique
                spellCheck={false}      // Désactive la vérification orthographique
              />
            </View>
            <PasswordLogin
              password={password}
              setPassword={setPassword}
              showPassword={showPassword}
              setShowPassword={setShowPassword}/>
<<<<<<< HEAD
            <TouchableOpacity onPress={() => router.push('./forgotPassword')}>
              <Text style={styles.forgotPwd}>Forgot password?</Text>
            </TouchableOpacity> 
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.signUpButton} onPress={() => console.log('Confirm Connect!')}>
              <Text style={styles.signUpText}>Connect</Text>
            </TouchableOpacity>
=======
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.signUpButton} onPress={() => console.log('Confirm Sign up!')}>
              <Text style={styles.signUpText}>Connect</Text>
            </TouchableOpacity>

>>>>>>> ced0e7bf4425a9c854b2a96da8f9ac05db4d2fe8
            <Text style={styles.orText}>OR</Text>
            <TouchableOpacity style={styles.googleButton} onPress={() => console.log('Login with Google')}>
              <Image
                source={require('../../assets/images/logoGoogle.png')}
                style={styles.googleIcon}
              />
            </TouchableOpacity>
            <View style={styles.loginContainer}>
              <Text style={styles.questionText}>Don’t have an account yet?</Text>
<<<<<<< HEAD
              <TouchableOpacity onPress={() => {router.replace('./signUp');}}>
=======
              <TouchableOpacity onPress={() => {router.back(); router.push('./signUp');}}>
>>>>>>> ced0e7bf4425a9c854b2a96da8f9ac05db4d2fe8
                <Text style={styles.loginText}>Sign up</Text>
              </TouchableOpacity>
            </View>
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
<<<<<<< HEAD
  iconContainer: {
    alignItems:'center',
    justifyContent:'center',
=======
  loginIconContainer: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'start',
    gap:110,
>>>>>>> ced0e7bf4425a9c854b2a96da8f9ac05db4d2fe8
    height:145,
    marginTop:60,
  },
  loginIcon: {
<<<<<<< HEAD
    width: 167,
    height: 163,
    marginTop:70,
=======
    width: 108,
    height: 105,
>>>>>>> ced0e7bf4425a9c854b2a96da8f9ac05db4d2fe8
  },
  container: {
    flex:1,
    flexDirection:'column',
<<<<<<< HEAD
    paddingBottom: 80,
=======
    paddingBottom: 25,
>>>>>>> ced0e7bf4425a9c854b2a96da8f9ac05db4d2fe8
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent:'center',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
<<<<<<< HEAD
    height:616,
    marginTop:75,
=======
    height:700,
>>>>>>> ced0e7bf4425a9c854b2a96da8f9ac05db4d2fe8
  },
  labelText: {
    fontSize: 35,
    color: '#274a65ff',
    fontWeight: 'bold',
    fontFamily:'Gabarito',
    padding: 25,
    ...shadowStyle,
  },
<<<<<<< HEAD
  emailContainer: {
    marginBottom:10,
  },
  inputContainer:{
    flex:1,
    flexDirection:'column',
=======
  inputContainer:{
    flex:1,
    flexDirection:'column',
    gap:5,
>>>>>>> ced0e7bf4425a9c854b2a96da8f9ac05db4d2fe8
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
<<<<<<< HEAD
    fontSize:17,
    fontFamily:'Gabarito',
    fontWeight:'400',
    paddingHorizontal: 12,
  },
  forgotPwd: {
    fontSize:15,
    fontFamily:'Gabarito',
    fontWeight:'regular',
    color:'#5D605F',
    textAlign:'right',
    paddingRight:3,
    margin:1,
  },  
=======
    paddingHorizontal: 12,
    fontSize:17,
    fontFamily:'Gabarito',
    fontWeight:'400',
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
  },
>>>>>>> ced0e7bf4425a9c854b2a96da8f9ac05db4d2fe8
  bottom: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
<<<<<<< HEAD
    paddingBottom:60,
=======
>>>>>>> ced0e7bf4425a9c854b2a96da8f9ac05db4d2fe8
  },
  signUpButton: {
    backgroundColor: '#F18636',
    width: 307,
<<<<<<< HEAD
    height:55,
=======
    height:57,
>>>>>>> ced0e7bf4425a9c854b2a96da8f9ac05db4d2fe8
    borderRadius: 20,
    alignItems: 'center',
    justifyContent:'center',
    ...shadowStyle,
  },
  orText: {
    margin: 10,
    color: 'rgba(96,100,109,70)',
  },
  googleButton: {
    borderWidth: 3,
    borderColor: '#A8C5D6',
    borderRadius: 20,
    width: 110,
    padding: 8,
    alignItems: "center",
    marginBottom: 20,
    ...shadowStyle,
  },
  signUpText: {
    color:'white',
    fontFamily:'Gabarito',
    fontWeight:'medium',
    fontSize:24,
  },
  googleIcon: {
    width: 24,
    height: 24,
  },
  loginContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  questionText: {
    color: "rgba(96,100,109,70)",
    fontWeight:'regular',
    fontFamily: 'Gabarito',
<<<<<<< HEAD
    fontSize:15,
=======
>>>>>>> ced0e7bf4425a9c854b2a96da8f9ac05db4d2fe8
  },
  loginText: {
    color: 'rgba(10,122,255,70)',
    fontWeight:'regular',
    fontFamily: 'Gabarito',
  },
<<<<<<< HEAD
=======
  toolTip: {
    fontWeight:'regular',
    fontFamily: 'Gabarito',
    fontSize:15,
    color: '#274a65ff',
  }
>>>>>>> ced0e7bf4425a9c854b2a96da8f9ac05db4d2fe8
});
