import { StyleSheet, Text, View } from 'react-native';
import { ProgressBar } from 'react-native-paper';

const PasswordProgressBar = ({ strength }) => {
  // Retourne la couleur de la barre en fonction de la force du mot de passe
  const getStrengthColor = () => {
    if (strength >= 0.65) return 'green';   
    if (strength > 0.35) return 'orange';   
    return 'red';                          
  };

  // Retourne un label texte selon la force du mot de passe
  const getStrengthLabel = () => {
    if (strength === 0) return '';           
    if (strength >= 0.65) return 'Strong';  
    if (strength > 0.35) return 'Medium';  
    return 'Weak';                          
  }

  return (
    <View style={styles.progressbarContainer}>
      <ProgressBar
        progress={strength}
        color={getStrengthColor()}
        style={styles.progress}
      />
      <Text style={styles.progressbarText}>{getStrengthLabel()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  progressbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  progress: {
    height: 8,
    width: 220,
    borderRadius: 5,
    marginHorizontal: 12,
  },
  progressbarText: {
    fontSize: 14,
    fontWeight: 'regular',
    fontFamily: 'Gabarito',
    color: 'rgba(96,100,109,70)',
  },
});

export default PasswordProgressBar;
