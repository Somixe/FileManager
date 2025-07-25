import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  Keyboard,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Toast from 'react-native-toast-message';
import Confetti from '../../components/animation/confetti';
import PasswordSignUp from '../../components/password/PasswordSignUp';
import { shadowStyle } from '../../components/shadow/shadow';

export default function ResetPassword() {
  // Hook pour gérer la navigation entre les pages
  const router = useRouter();

  // États pour gérer la saisie des mots de passe
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true); // Contrôle l'affichage du mot de passe (masqué ou visible)
  const [refresh, setRefresh] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false); //Contrôle l'affichage des confettis

  /* Rafraîchit le formulaire */
  const refreshPage = () => {

      setRefresh(true) //active le chargement

      setTimeout(() => {
        setRefresh(false);
        setPassword('');
        setConfirmPassword('');
      }, 600);
  }
  
  // Fonction qui vérifie les critères de sécurité du mot de passe
  const checkPasswordCriteria = (pwd) => {
    return {
      minimum: pwd.length === 0,           // Mot de passe vide
      length: pwd.length >= 8,             // Au moins 8 caractères
      lowercase: /[a-z]/.test(pwd),        // Contient une lettre minuscule
      uppercase: /[A-Z]/.test(pwd),        // Contient une lettre majuscule
      number: /\d/.test(pwd),               // Contient un chiffre
      special: /[!@#$%^&*(),.?":{}|<>']/.test(pwd), // Contient un caractère spécial
    };
  };
  
  // Fonction qui calcule la "force" du mot de passe selon les critères validés
  const getStrength = (criteria) => {
    if (criteria.minimum) return 0; // Si vide, force = 0 (rouge)

    let score = 0;
    if (criteria.length) score += 0.30;
    if (criteria.lowercase) score += 0.15;
    if (criteria.uppercase) score += 0.15;
    if (criteria.number) score += 0.175;
    if (criteria.special) score += 0.175;

    return score; // Score entre 0 et 1 pour indiquer la qualité du mot de passe
  };

  // On calcule les critères et la force à chaque rendu
  const criteria = checkPasswordCriteria(password);
  const strength = getStrength(criteria);

  //Vérifie la validité de l'e-mail au moment de la soumission
  const checkPwdOnSubmit = () => {

    if (password === '') {
      Toast.show({
        type: 'errorMessage',
        text1: 'Please enter your password',
        visibilityTime: 3000,
      });
      return;
    } 
    
    if (strength < 0.65){
      Toast.show({
        type: 'errorMessage',
        text1: 'Choose a stronger password',
        visibilityTime: 3200,
      });
      return;
    }

    if (password !== confirmPassword) {
      Toast.show({
        type: 'errorMessage',
        text1: 'Passwords don\' t match',
        visibilityTime: 2500,
      });
      return;
    }

    Toast.show({
      type: 'validMessage',
      text1: 'Password updated successfully!',
      visibilityTime: 2000,
    });

    setShowConfetti(true);

    setTimeout(()=>{
      setShowConfetti(false);
      Toast.hide()}, 1850);


    return 
  };

  return (
    <Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
      <ScrollView scrollEventThrottle={16} style={styles.root} refreshControl={<RefreshControl refreshing={refresh} onRefresh={refreshPage} progressViewOffset={40}/>}>
        {/* Icone de retour + logo */}
        <View style={styles.loginIconContainer}>
          {showConfetti && <Confetti style={{ transform: [{ rotate: '15deg' }], alignSelf:'flex-start' }} />}
          <Ionicons 
            name="arrow-back-outline" 
            size={30} 
            color="black" 
            style={{ position: 'absolute', marginBottom: 90, marginLeft: 15, zIndex:1 }} 
            onPress={() => {router.back(); Toast.hide()}} 
          />
          <Image source={require('../../assets/images/login.png')} style={styles.loginIcon} />
          {showConfetti && <Confetti style={{ transform: [{ rotate: '30deg' }], alignSelf:'flex-end'}} />}
        </View>

        <View style={styles.container}>
          {/* Titre de la page */}
          <View>
            <Text style={styles.labelText}>Reset password</Text>
          </View>

          <View style={styles.inputContainer}>
            {/* Composant PasswordSignUp : champ mot de passe avec validation */}
            <PasswordSignUp
              password={password}
              setPassword={setPassword}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              criteria={criteria}
              strength={strength}
            />

            {/* Champ confirmation mot de passe */}
            <View>
              <Text style={styles.inputText}>Confirm Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={showPassword} // masque ou affiche le texte
                value={confirmPassword}
                onChangeText={(text) => {
                  // Supprime les espaces au cas où
                  const noSpaces = text.replace(/\s/g, '');
                  setConfirmPassword(noSpaces);
                }}
              />
            </View>
          </View>

          {/* Bouton de soumission */}
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.submitButton} onPress={()=>{
            checkPwdOnSubmit();}}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Pressable>
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
    height:145,
    marginTop:60,
  },
  loginIcon: {
    width: 150,
    height: 143,
    marginTop:70,
    position:'absolute',
    zIndex:1,
    left:130,
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
