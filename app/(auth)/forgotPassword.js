import { Ionicons } from '@expo/vector-icons'; // Icône flèche de retour
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
import { shadowStyle } from '../../components/shadow'; // Styles d'ombre personnalisés

export default function forgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  /**
   * Vérifie la validité de l'e-mail au moment de la soumission
   * - Vérifie que le champ n'est pas vide
   * - Vérifie que l'e-mail respecte un format classique
   * - (À ajouter : vérifier que l'e-mail existe dans la base de données)
   */
  const checkEmailOnSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    /* À activer en prod :
    if (!email) {
      alert('Email is required');
      return;
    }

    if (!emailRegex.test(email)) {
      alert('Invalid Email');
      return;
    }
    */

    // TODO : Ajouter une vérification côté backend pour s'assurer que l'e-mail existe

    // Redirection vers l'étape suivante avec l'e-mail en paramètre
    router.push({
      pathname: 'codeForgotPassword',
      params: { email: email },
    });
  };

  return (
    // Ferme le clavier lorsqu'on appuie en dehors des champs
    <Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
      <ScrollView scrollEventThrottle={16} style={styles.root}>

        {/* Logo + flèche de retour */}
        <View style={styles.loginIconContainer}>
          <Ionicons
            name="arrow-back-outline"
            size={30}
            color="black"
            style={{ marginBottom: 90, marginLeft: 15 }}
            onPress={() => router.back()}
          />
          <Image 
            source={require('../../assets/images/login.png')} 
            style={styles.loginIcon} 
          />
        </View>

        <View style={styles.container}>
          
          {/* Titre principal */}
          <View>
            <Text style={styles.labelText}>
              Forgot your {'\n'} password?
            </Text>
          </View>

          {/* Texte explicatif */}
          <View>
            <Text style={styles.noWorriesText}>
              No worries! It happens. Please {'\n'}
              enter your account email address.
            </Text>
          </View>

          {/* Champ e-mail */}
          <View style={styles.inputContainer}>
            <View style={styles.emailContainer}>
              <Text style={styles.inputText}>Email</Text>
              <TextInput
                style={styles.input}
                keyboardType="email-address"
                autoCorrect={false}
                spellCheck={false}
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>

          {/* Bouton de soumission */}
          <View style={styles.bottom}>
            <TouchableOpacity 
              style={styles.submitButton} 
              onPress={checkEmailOnSubmit}
            >
              <Text style={styles.submitText}>Continue</Text>
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
