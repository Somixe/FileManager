import { useRouter } from 'expo-router'; //Pour pouvoir naviguer entre les pages d'authentification
import {
  Image,
  ScrollView,
  StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { shadowStyle } from '../../components/shadow'; // Style d'ombre réutilisable

export default function IndexScreen() {
  const router = useRouter();

return (
    <View style={styles.root}>
      {/* ScrollView permet de faire défiler le contenu si l'écran est petit */}
      <ScrollView contentContainerStyle={styles.container}>

        {/* Titre de bienvenue */}
        <Text style={styles.welcomeText}>Welcome!</Text>

        {/* Illustration d'accueil */}
        <Image source={require('../../assets/images/welcome.png')} />

        {/* Bouton de connexion - remplace la page actuelle par 'login' */}
        <TouchableOpacity 
          style={styles.signUpButton} 
          onPress={() => router.replace('./login')}
        >
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>

        {/* Lien vers la page d'inscription */}
        <View style={styles.loginContainer}>
          <Text style={styles.questionText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => router.replace('./signUp')}>
            <Text style={styles.signUpText}>Sign up</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#EACCA7',
  },
  container: {
    paddingVertical: 83,
    marginHorizontal: 17,
    marginVertical: 76,
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    borderRadius: 50,
  },
  welcomeText: {
    fontSize: 45,
    color: '#274a65ff',
    fontWeight: 'bold',
    fontFamily:'Gabarito',
    padding: 44,
    ...shadowStyle,
  },
  signUpButton: {
        backgroundColor: '#F18636',
        width: '80%',
        height:70,
        marginTop:80,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent:'center',
        marginBottom: 15,
        ...shadowStyle,
  },
  loginText: {
    color:'white',
    fontFamily:'Gabarito',
    fontWeight:'medium',
    fontSize:24,
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
  signUpText: {
    color: 'rgba(10,122,255,70)',
    fontWeight:'regular',
    fontFamily: 'Gabarito',
  },
});