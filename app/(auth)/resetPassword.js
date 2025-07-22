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


export default function forgotPassword() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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
      <ScrollView scrollEventThrottle={16} style={styles.root}>
        <View style={styles.loginIconContainer}>
            <Ionicons name="arrow-back-outline" size={30} color="black" style={{marginBottom:90, marginLeft:15}} onPress={() => router.back()}/>
            <Image source={require('../../assets/images/login.png')} style={styles.loginIcon}/>
        </View>
        <View style={styles.container}>

          <View >
            <Text style={styles.labelText}>Reset password</Text>
          </View>
          <View style={styles.inputContainer}>
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
              value={confirmPassword}
              onChangeText={(text) => {
                const noSpaces = text.replace(/\s/g, '');
                setConfirmPassword(noSpaces);
              }}/>
          </View>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitText}>Submit</Text>
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
