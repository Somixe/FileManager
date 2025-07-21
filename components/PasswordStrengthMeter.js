import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Tooltip } from 'react-native-elements';
import { ProgressBar } from 'react-native-paper';

const PasswordStrengthMeter = ({showPassword, setShowPassword, noSpaceText, setNoSpaceText}) => {
  const [password, setPassword] = useState('');

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

const getStrengthColor = () => {
  if (strength >= 0.65) return 'green';     
  if (strength > 0.35) return 'orange';      
  return 'red';                             
};

const getStrengthLabel = () => {
  if (strength === 0) return '';
  if (strength >= 0.65) return 'Strong';     
  if (strength > 0.35) return 'Medium';      
  return 'Weak';                             
};


  return (
    <View style={styles.container}>
      
      <View style={styles.passwordContainer}>
        <Text style={styles.inputText}>Password</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={showPassword ? "eye-off" : "eye"} size={20} color="rgba(96,100,109,0.7)" style={{ paddingTop: 8, marginRight: 8 }}/>
          </TouchableOpacity>
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
        </View>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          secureTextEntry={showPassword}
          value={password}
          onChangeText={(text) => {
            const noSpaces = text.replace(/\s/g, '');
            setPassword(noSpaces);
          }}
        />
      </View>
      <View style={styles.progressbarContainer}>
        <ProgressBar
          progress={strength}
          color={getStrengthColor()}
          style={styles.progress}
        />
        <Text style={styles.progressbarText}>{getStrengthLabel()}</Text>
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

  progress: {
    height: 8,
    width:220,
    borderRadius: 5,
    marginHorizontal:12,
  },

  toolTip: {
    fontWeight: '400',
    fontFamily: 'Gabarito',
    fontSize: 15,
  },

  valid: {
    color: 'green',
  },

  invalid: {
    color: 'red',
  },
  progressbarContainer: {
    flexDirection:'row',
    alignItems:'center',
    marginTop:2,
  },
  progressbarText: {
    fontSize:14,
    fontWeight:'regular',
    fontFamily:'Gabarito',
    color: 'rgba(96,100,109,70)',
  }
});

export default PasswordStrengthMeter;
