const PasswordLogin = ({ password, setPassword, showPassword, setShowPassword }) => {
  return (
    <View style={styles.container}>
      
      {/* Ligne du label "Password" avec l'icône pour afficher/masquer le mot de passe */}
      <View style={styles.passwordContainer}>
        <Text style={styles.inputText}>Password</Text>

        <View style={styles.iconContainer}>
          {/* Bouton pour basculer entre afficher/masquer le mot de passe */}
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons 
              name={showPassword ? "eye-off" : "eye"} 
              size={20} 
              color="rgba(96,100,109,0.7)" 
              style={{ paddingTop: 8, marginRight: 8 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Champ de saisie du mot de passe */}
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          secureTextEntry={showPassword} // Masque ou affiche le texte selon showPassword
          value={password}
          onChangeText={(text) => {
            // Enlève les espaces du texte saisi avant de le stocker
            const noSpaces = text.replace(/\s/g, '');
            setPassword(noSpaces);
          }}
        />
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

export default PasswordLogin;
