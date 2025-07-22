import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  Image,
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { shadowStyle } from '../../components/shadow';



export default function codeForgotPassword() {
    const router = useRouter();
    const {email} = useLocalSearchParams();

    return (
        <Pressable  onPress={Keyboard.dismiss} style={{flex:1}}>
        <ScrollView scrollEventThrottle={16} style={styles.root}>
            <View style={styles.loginIconContainer}>
                <Ionicons name="arrow-back-outline" size={30} color="black" style={{marginBottom:90, marginLeft:15}} onPress={() => router.back()}/>
                <Image source={require('../../assets/images/login.png')} style={styles.loginIcon}/>
            </View>
            <View style={styles.container}>
              <View >
                  <Text style={styles.labelText}>Enter OTP</Text>
              </View>
              <View>
                  <Text style={styles.sendText}>An 6 digits code has been sent to {'\n'} <Text style={{color:'#5E94D9'}}>{email}</Text></Text>
              </View>
              <Text>METTRE LES CASES ICI </Text>
              <View style={styles.bottom}>
                  <TouchableOpacity style={styles.signUpButton} onPress={() => router.push('./resetPassword')}>
                  <Text style={styles.signUpText}>Continue</Text>
                  </TouchableOpacity>
                  <Text style={styles.resendText}>If you don’t find the OTP code, please check {'\n'} your <Text style={{color:'#EEB17E'}}>spam folder</Text> or send <Text style={{color:'#5E94D9'}}>code again</Text></Text>

              </View>
            </View>
        </ScrollView>
        </Pressable >
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
    marginBottom:20,
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
});
