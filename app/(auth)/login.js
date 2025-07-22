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
        <View style={styles.iconContainer}>
            <Image source={require('../../assets/images/login.png')} style={styles.loginIcon}/>
        </View>
        <View style={styles.container}>

          <View >
            <Text style={styles.labelText}>Log in</Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.emailContainer}>
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
            <TouchableOpacity onPress={() => router.push('./forgotPassword')}>
              <Text style={styles.forgotPwd}>Forgot password?</Text>
            </TouchableOpacity> 
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.signUpButton} onPress={() => console.log('Confirm Connect!')}>
              <Text style={styles.signUpText}>Connect</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>OR</Text>
            <TouchableOpacity style={styles.googleButton} onPress={() => console.log('Login with Google')}>
              <Image
                source={require('../../assets/images/logoGoogle.png')}
                style={styles.googleIcon}
              />
            </TouchableOpacity>
            <View style={styles.loginContainer}>
              <Text style={styles.questionText}>Don’t have an account yet?</Text>
              <TouchableOpacity onPress={() => {router.replace('./signUp');}}>
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
  iconContainer: {
    alignItems:'center',
    justifyContent:'center',
    height:145,
    marginTop:60,
  },
  loginIcon: {
    width: 167,
    height: 163,
    marginTop:70,
  },
  container: {
    flex:1,
    flexDirection:'column',
    paddingBottom: 80,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent:'center',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    height:616,
    marginTop:75,
  },
  labelText: {
    fontSize: 35,
    color: '#274a65ff',
    fontWeight: 'bold',
    fontFamily:'Gabarito',
    padding: 25,
    ...shadowStyle,
  },
  emailContainer: {
    marginBottom:10,
  },
  inputContainer:{
    flex:1,
    flexDirection:'column',
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
  forgotPwd: {
    fontSize:15,
    fontFamily:'Gabarito',
    fontWeight:'regular',
    color:'#5D605F',
    textAlign:'right',
    paddingRight:3,
    margin:1,
  },  
  bottom: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:60,
  },
  signUpButton: {
    backgroundColor: '#F18636',
    width: 307,
    height:55,
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
    fontSize:15,
  },
  loginText: {
    color: 'rgba(10,122,255,70)',
    fontWeight:'regular',
    fontFamily: 'Gabarito',
  },
});
