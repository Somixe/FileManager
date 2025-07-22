import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import PasswordInfo from './PasswordInfo';
import PasswordProgressBar from './PasswordProgressBar';

const PasswordSignUp = ({password, setPassword, showPassword, setShowPassword, criteria, strength}) => {

  return (
    <View style={styles.container}>
      
      <View style={styles.passwordContainer}>
        <Text style={styles.inputText}>Password</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={showPassword ? "eye-off" : "eye"} size={20} color="rgba(96,100,109,0.7)" style={{ paddingTop: 8, marginRight: 8 }}/>
          </TouchableOpacity>
          <PasswordInfo criteria={criteria}/>
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
