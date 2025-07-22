import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { Tooltip } from 'react-native-elements';

export default function PasswordInfo({criteria}) {
    return(
    <Tooltip
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
        backgroundColor='rgba(215, 215, 215, 1)'
    >
        <Ionicons
        name="information-circle-outline"
        size={20}
        color="rgba(96,100,109,0.7)"
        style={{ paddingTop: 9, marginRight: 8 }}
        />
    </Tooltip>
    );
};

const styles = {
  valid: { color: 'green' },
  invalid: { color: 'red' },
};

