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
  View,
} from 'react-native';

import Toast from 'react-native-toast-message';
import Confetti from '../../components/animation/confetti';
import PasswordSignUp from '../../components/password/PasswordSignUp'; // Champ mot de passe avec force visuelle
import { shadowStyle } from '../../components/shadow/shadow';


export default function SignUp() {
  const router = useRouter();

  // États pour les champs du formulaire
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false); //Contrôle l'affichage des confettis


  /* Rafraîchit le formulaire */
  const refreshPage = () => {

      setRefresh(true) //active le chargement

      setTimeout(() => {
        setRefresh(false);
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setShowPassword(false);
      }, 600);
  }

  /**
   * Vérifie les critères de robustesse du mot de passe
   * (longueur, majuscule, chiffre, caractère spécial, etc.)
   */
  const checkPasswordCriteria = (pwd) => {
    return {
      minimum: pwd.length === 0, // utilisé pour détecter un champ vide
      length: pwd.length >= 8,
      lowercase: /[a-z]/.test(pwd),
      uppercase: /[A-Z]/.test(pwd),
      number: /\d/.test(pwd),
      special: /[!@#$%^&*(),.?":{}|<>']/.test(pwd),
    };
  };

  /**
   * Calcule un "score" de force du mot de passe
   * Utilisé pour afficher une jauge visuelle dans le composant PasswordSignUp
   */
  const getStrength = (criteria) => {
    if (criteria.minimum) return 0; // Rouge = gris
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
  
  const checkNameOnSubmit = () => {
    if (name === '') {
      Toast.show({
        type: 'errorMessage',
        text1: 'Please enter your full name',
        visibilityTime: 3000,
      });
      return false;
    }
    return true
  }

  const checkEmailOnSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      Toast.show({
        type: 'errorMessage',
        text1: 'Please enter your email address',
        visibilityTime: 3000,
      });
      return false;
    } 

    if (!emailRegex.test(email)) {
      Toast.show({
        type: 'errorMessage',
        text1: 'Please enter a valid email address',
        visibilityTime: 3000,
      });
      return false;
    }

    //* A METTRE SI IL EXISTE DEJA UN MAIL DANS LA BDD */
    return true;     
  };

  const checkPwdOnSubmit = () => {
  
    if (password === '') {
      Toast.show({
        type: 'errorMessage',
        text1: 'Please enter your password',
        visibilityTime: 3000,
      });
      return false;
    } 

    if (password !== confirmPassword) {
      Toast.show({
        type: 'errorMessage',
        text1: 'Passwords don\' t match',
        visibilityTime: 3000,
      });
      return false;
    }

    if (strength < 0.65){
      Toast.show({
        type: 'errorMessage',
        text1: 'Choose a stronger password',
        visibilityTime: 3000,
      });
      return false;
    };

    return true;
  };

  const checkValidAccount = () => {
    const isValidEmail = checkEmailOnSubmit();
    const isValidPwd = checkPwdOnSubmit();
    const isValidName = checkNameOnSubmit();

    if (isValidEmail && isValidPwd && isValidName) {
      setShowConfetti(true); // Affiche les confettis

      Toast.show({
        type: 'validMessage',
        text1: 'Account created successfully!',
        visibilityTime: 2000,
      });

      setTimeout(() => {
        setShowConfetti(false); 
        Toast.hide(); // Cache manuellement le toast si tu veux
      }, 1800);
    }
  };


  return (
    // Permet de fermer le clavier en appuyant en dehors des champs
    <Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
      {/* Defilement de la page + rafraîchissement avec 'refreshControl. refresh = cacher/montrer le spinner et onRefresh = fonction appelé progressViewOffset = déplace le spinner vers le bas*/}
      <ScrollView style={styles.root} refreshControl={<RefreshControl refreshing={refresh} onRefresh={refreshPage} progressViewOffset={40}/>}>
        
        {/* Logo en haut de l'écran */}
        <View style={styles.iconContainer}>
          {showConfetti && <Confetti style={{ transform: [{ rotate: '15deg' }], alignSelf: 'flex-start' }} />}
          <Image 
            source={require('../../assets/images/login.png')} 
            style={styles.loginIcon}
          />
          {showConfetti && <Confetti style={{ transform: [{ rotate: '30deg' }], alignSelf: 'flex-end' }} />}
        </View>
        <View style={styles.container}>
          
          {/* Titre de la page */}
          <Text style={styles.labelText}>Sign up</Text>

          <View style={styles.inputContainer}>

            {/* Nom complet */}
            <View>
              <Text style={styles.inputText}>Full Name</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                autoCorrect={false} // Désactive la correction automatique
                spellCheck={false} // Désactive la vérification orthographique (les vagues rouges)
              />
            </View>

            {/* Email */}
            <View>
              <Text style={styles.inputText}>Email</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text.toLowerCase())}
                keyboardType="email-address" 
                autoCorrect={false}
                spellCheck={false}
              />
            </View>

            {/* Mot de passe : champ réutilisable avec jauge de force */}
            <PasswordSignUp
              password={password}
              setPassword={setPassword}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              criteria={criteria}
              strength={strength}
            />

            {/* Confirmation du mot de passe */}
            <View>
              <Text style={styles.inputText}>Confirm Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={showPassword}
                value={confirmPassword}
                autoComplete="off"
                onChangeText={(text) => { //Enlève la possibilité d'ajouter des espaces
                  const noSpaces = text.replace(/\s/g, '');
                  setConfirmPassword(noSpaces);
                }}
              />
            </View>

          </View>

          {/* Bas de formulaire : bouton de validation + Google + redirection */}
          <View style={styles.bottom}>

            {/* Bouton de validation (non relié encore à une logique) */}
            <TouchableOpacity 
              style={styles.signUpButton} 
              onPress={checkValidAccount}
            >
              <Text style={styles.signUpText}>Confirm</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>OR</Text>

            {/* Connexion via Google */}
            <TouchableOpacity 
              style={styles.googleButton} 
            >
              <Image
                source={require('../../assets/images/logoGoogle.png')}
                style={styles.googleIcon}
              />
            </TouchableOpacity>

            {/* Lien vers la page de connexion */}
            <View style={styles.loginContainer}>
              <Text style={styles.questionText}>Already have an account?</Text>
              <TouchableOpacity onPress={() => {router.replace('./login'); Toast.hide()}}>
                <Text style={styles.loginText}>Log in</Text>
              </TouchableOpacity>
            </View>

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
  iconContainer: {
    alignItems:'center',
    justifyContent:'center',
    height:145,
    marginTop:60,
  },
  loginIcon: {
    width: 108,
    height: 105,
    position:'absolute',
    zIndex:1,
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
    fontSize:15,
  },
  loginText: {
    color: 'rgba(10,122,255,70)',
    fontWeight:'regular',
    fontFamily: 'Gabarito',
  },
});
