import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { Tooltip } from 'react-native-elements';

// Composant qui affiche une icône info, et au clic affiche un tooltip avec les critères de mot de passe
export default function PasswordInfo({ criteria }) {
  return (
    <Tooltip
      // Le contenu du tooltip : une liste des critères avec une couleur qui change selon leur validité
      popover={
        <View>
          <Text style={criteria.length ? styles.valid : styles.invalid}>
            • At least 8 characters
          </Text>
          <Text style={(criteria.lowercase && criteria.uppercase) ? styles.valid : styles.invalid}>
            • Contains a letter (a-z and A-Z)
          </Text>
          <Text style={criteria.number ? styles.valid : styles.invalid}>
            • Contains a number (0-9)
          </Text>
          <Text style={criteria.special ? styles.valid : styles.invalid}>
            • Contains a special character (!@#..)
          </Text>
        </View>
      }
      height={100}            
      width={265}             
      backgroundColor='#e7cfb3ff' 
    >
      {/* Icône info cliquable qui déclenche le tooltip */}
      <Ionicons
        name="information-circle-outline"
        size={20}
        color="rgba(96,100,109,0.7)"
        style={{ paddingTop: 9, marginRight: 8 }}
      />
    </Tooltip>
  );
}

// Styles pour afficher les critères en vert si validés, bleu foncé sinon
const styles = {
  valid: { color: 'green' },
  invalid: { color: '#274a65ff' },
};
