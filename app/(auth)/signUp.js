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
import PasswordSignUp from '../../components/password/PasswordSignUp';
import { shadowStyle } from '../../components/shadow';



export default function SignUp() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const checkPasswordCriteria = (pwd) => {
    return {
      minimum: pwd.length === 0,
      length: pwd.length >= 8,
      lowercase: /[a-z]/.test(pwd),  
      uppercase: /[A-Z]/.test(pwd),  
      number: /\d/.test(pwd),
      special: /[!@#$%^&*(),.?":{}|<>']/.test(pwd),
    };
  };
  
  const getStrength = (criteria) => {
    // Exige longueur + minuscule + ajuscule
    if (criteria.minimum) return 0; //Couleur rouge 
  
    let score = 0;
  
    if (criteria.length) score += 0.30;
    if (criteria.lowercase) score += 0.15;
    if (criteria.uppercase) score += 0.15;
    if (criteria.number) score += 0.175;
    if (criteria.special) score += 0.175;
  
    return score;
  };

  const criteria = checkPasswordCriteria(password);
  const strength = getStrength(criteria);

  return (
    <Pressable  onPress={Keyboard.dismiss} style={{flex:1}}>
      <ScrollView style={styles.root}>
        <View style={styles.loginIconContainer}>
            <Ionicons name="arrow-back-outline" size={30} color="black" style={{marginBottom:90, marginLeft:15}} onPress={() => router.back()}/>
            <Image source={require('../../assets/images/login.png')} style={styles.loginIcon}/>
        </View>
        <View style={styles.container}>

          <View >
            <Text style={styles.labelText}>Sign up</Text>
          </View>
          <View style={styles.inputContainer}>
            <View>
              <Text style={styles.inputText}>Full Name</Text>
              <TextInput
                style={styles.input}
                autoCorrect={false}    
                spellCheck={false}/>
            </View>
            <View>
              <Text style={styles.inputText}>Email</Text>
              <TextInput
                style={styles.input}
                keyboardType='email-address'
                autoCorrect={false}     // Désactive la correction automatique
                spellCheck={false}      // Désactive la vérification orthographique
              />
            </View>
              <PasswordSignUp
                password={password}
                setPassword={setPassword}
                showPassword={showPassword}
                setShowPassword={setShowPassword} 
                criteria={criteria}
                strength={strength}/>
            <View>
              <Text style={styles.inputText}>Confirm Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={showPassword}
                value={password}
                onChangeText={(text) => {
                  const noSpaces = text.replace(/\s/g, '');
                  setPassword(noSpaces);
                }}/>
            </View>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.signUpButton} onPress={() => console.log('Confirm Sign up!')}>
              <Text style={styles.signUpText}>Confirm</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>OR</Text>
            <TouchableOpacity style={styles.googleButton} onPress={() => console.log('Login with Google')}>
              <Image
                source={require('../../assets/images/logoGoogle.png')}
                style={styles.googleIcon}
              />
            </TouchableOpacity>
            <View style={styles.loginContainer}>
              <Text style={styles.questionText}>Already have an account?</Text>
              <TouchableOpacity onPress={() => {router.back(); router.push('./login');}}>
                <Text style={styles.loginText}>Log in</Text>
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
});
