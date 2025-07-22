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
import PasswordLogin from '../../components/password/PasswordLogin';
import { shadowStyle } from '../../components/shadow';



export default function Login() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);


  return (
    <Pressable  onPress={Keyboard.dismiss} style={{flex:1}}>
      <ScrollView scrollEventThrottle={16} style={styles.root}>
        <View style={styles.loginIconContainer}>
            <Ionicons name="arrow-back-outline" size={30} color="black" style={{marginBottom:90, marginLeft:15}} onPress={() => router.back()}/>
            <Image source={require('../../assets/images/login.png')} style={styles.loginIcon}/>
        </View>
        <View style={styles.container}>

          <View >
            <Text style={styles.labelText}>Log in</Text>
          </View>
          <View style={styles.inputContainer}>
            <View>
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
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.signUpButton} onPress={() => console.log('Confirm Sign up!')}>
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
              <TouchableOpacity onPress={() => {router.back(); router.push('./signUp');}}>
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
  loginIconContainer: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'start',
    gap:110,
    height:145,
    marginTop:60,
  },
  loginIcon: {
    width: 108,
    height: 105,
  },
  container: {
    flex:1,
    flexDirection:'column',
    paddingBottom: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent:'center',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    height:700,
  },
  labelText: {
    fontSize: 35,
    color: '#274a65ff',
    fontWeight: 'bold',
    fontFamily:'Gabarito',
    padding: 25,
    ...shadowStyle,
  },
  inputContainer:{
    flex:1,
    flexDirection:'column',
    gap:5,
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
    paddingHorizontal: 12,
    fontSize:17,
    fontFamily:'Gabarito',
    fontWeight:'400',
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  bottom: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  signUpButton: {
    backgroundColor: '#F18636',
    width: 307,
    height:57,
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
  },
  loginText: {
    color: 'rgba(10,122,255,70)',
    fontWeight:'regular',
    fontFamily: 'Gabarito',
  },
  toolTip: {
    fontWeight:'regular',
    fontFamily: 'Gabarito',
    fontSize:15,
    color: '#274a65ff',
  }
});
