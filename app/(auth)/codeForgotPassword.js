import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useRef, useState } from 'react';
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
import { shadowStyle } from '../../components/shadow'; // Style de shadow personnalisé

// Composant pour la saisie du code de vérification (OTP)
export default function codeForgotPassword() {
  const router = useRouter();
  const { email } = useLocalSearchParams(); // Récupère l'e-mail envoyé en paramètre

  // State contenant les 6 chiffres du code OTP
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputs = useRef([]); // Refs pour chaque champ de saisie (Accéder directement à un composant ou un élément pour lui appliquer une méthode (comme .focus()))

  // Gestion du changement de chiffre
  const handleChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Passe automatiquement au champ suivant. On commence par 0
    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }

    // Si tous les chiffres sont remplis
    if (index === 5 && text) {
      Keyboard.dismiss(); // Ferme le clavier
      const otp = newCode.join(''); //transformer le tableau newCode en une chaîne de caractères unique
      console.log("Code OTP saisi :", otp);

      // TODO: envoyer `otp` au backend pour vérification
    }
  };

  return (
    // Ferme le clavier lorsqu'on clique en dehors
    <Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
      <ScrollView scrollEventThrottle={16} style={styles.root}>
        
        {/* Icône de retour et logo */}
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
          {/* Titre */}
          <View>
            <Text style={styles.labelText}>Enter OTP</Text>
          </View>

          {/* Message d'information */}
          <View>
            <Text style={styles.sendText}>
              A 6-digit code has been sent to {'\n'}
              <Text style={{ color: '#5E94D9' }}>{email}</Text>
            </Text>
          </View>

          {/* Saisie des 6 chiffres (code OTP) */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 10,
              marginTop: 45,
              marginBottom: 25,
            }}
          >
            {code.map((digit, index) => ( //transformer chaque élément du tableau code en un composant React
              <TextInput //Ici chaque élement du tableau sera un input
                key={index} //Donne un identifiant unique a chaque composant
                ref={(ref) => (inputs.current[index] = ref)}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                keyboardType="numeric"
                style={styles.otpInput}
                returnKeyType="next"
                autoFocus={false}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === 'Backspace') {
                    if (code[index] === '') {
                      // Si vide, on revient au champ précédent
                      if (index > 0) {
                        const newCode = [...code];
                        newCode[index - 1] = '';
                        setCode(newCode);
                        inputs.current[index - 1].focus();
                      }
                    } else {
                      // Supprime simplement le chiffre courant
                      const newCode = [...code];
                      newCode[index] = '';
                      setCode(newCode);
                    }
                  }
                }}
              />
            ))}
          </View>

          {/* Bas de page : bouton et message de re-envoi */}
          <View style={styles.bottom}>
            <TouchableOpacity
              style={styles.signUpButton}
              onPress={() => router.push('./resetPassword')}
            >
              <Text style={styles.signUpText}>Continue</Text>
            </TouchableOpacity>

            <Text style={styles.resendText}>
              If you don’t find the OTP code, please check {'\n'}
              your <Text style={{ color: '#EEB17E' }}>spam folder</Text> or send <Text style={{ color: '#5E94D9' }}>code again</Text>
            </Text>
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
  sendText: {
    fontSize:20,
    fontWeight:'regular',
    fontFamily:'Freeman',
    textAlign:'center',
    color:'#808080',
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
    signUpText: {
        color:'white',
        fontFamily:'Gabarito',
        fontWeight:'medium',
        fontSize:24,
    },
    resendText: {
      color: "rgba(96,100,109,70)",
      fontWeight:'regular',
      fontFamily: 'Gabarito',
      marginTop:20,
      marginHorizontal:33,
      fontSize:15,
      textAlign:'center',
    },
    otpInput: {
      borderWidth: 2,
      borderColor: '#EACCA7',
      borderRadius: 10,
      width: 45,
      height: 55,
      textAlign: 'center',
      fontSize: 22,
      fontWeight: 'bold',
      color: '#274a65ff',
      fontFamily: 'Gabarito',
      backgroundColor: '#fefaf3',
    }

});
