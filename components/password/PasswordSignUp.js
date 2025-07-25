import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import PasswordInfo from './PasswordInfo'; // Tooltip avec critères de mot de passe
import PasswordProgressBar from './PasswordProgressBar'; // Barre de progression de la force

const PasswordSignUp = ({ password, setPassword, showPassword, setShowPassword, criteria, strength }) => {
  return (
    <View style={styles.container}>
      
      {/* Ligne contenant le label "Password", l'icône pour afficher/cacher le mot de passe, et l'icône d'info */}
      <View style={styles.passwordContainer}>
        <Text style={styles.inputText}>Password</Text>
        <View style={styles.iconContainer}>

          {/* Bouton pour basculer entre afficher/cacher le mot de passe */}
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons 
              name={showPassword ? "eye-off" : "eye"} 
              size={20} 
              color="rgba(96,100,109,0.7)" 
              style={{ paddingTop: 8, marginRight: 8 }} 
            />
          </TouchableOpacity>

          {/* Composant Tooltip qui affiche les critères du mot de passe au survol/clic */}
          <PasswordInfo criteria={criteria} />
        </View>
      </View>

      {/* Zone de saisie du mot de passe + barre de progression de la force */}
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          secureTextEntry={showPassword}         // Affiche les points ou texte selon showPassword
          value={password}                       // Valeur du mot de passe contrôlée par le parent
          onChangeText={(text) => {
            const noSpaces = text.replace(/\s/g, ''); // On retire les espaces dans la saisie
            setPassword(noSpaces);                     // Mise à jour de l'état password
          }}
          //Empêche les appareils ios de nous proposer un mdp
          textContentType='oneTimeCode'
        />
        
        {/* Barre indiquant visuellement la force du mot de passe */}
        <PasswordProgressBar strength={strength} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  inputText: {
    fontWeight: 'regular',
    fontFamily:'Gabarito',
    fontSize:19,
    color: '#676767ff',
    margin:5,
    paddingLeft:5,
  },
  iconContainer: {
    flexDirection:'row',
  },
  input: {
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
});

export default PasswordSignUp;
