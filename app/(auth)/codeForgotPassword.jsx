import { Ionicons } from '@expo/vector-icons'; // Pour les icônes
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



//user textContentType="oneTimeCode"

export default function codeForgotPassword() {
    const router = useRouter();
    const {email} = useLocalSearchParams();

    return (
    <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
              {/* Flèche en haut à gauche */}
              <View>
                  <Ionicons 
                  name="arrow-back-outline" 
                  size={30} 
                  color="black" 
                  onPress={() => router.back()} 
                  />
              </View>

              <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
            </View>

            <Text style={styles.title}>Enter OTP</Text>
              <Text style={styles.subtitles}>An 4 digits code has been sent to{' '}
              <Text style={styles.emailText}>{email}</Text>
            </Text>
        
            {/* OTP */}
            <Text>Mettre le code </Text>

            {/* Bouton Login */}
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>

        </ScrollView>
    </SafeAreaView>
  );
}

const iosShadow = {
  shadowColor: '#000',
  shadowOffset: { width: 4, height: 4 },
  shadowOpacity: 0.20,
  shadowRadius: 4,
};

const androidShadow = {
  elevation: 5,
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap:97,
        width: '100%',
    },
    safeArea: {
        flex: 1,
        backgroundColor: 'white', 
    },
    container: {
        alignItems: 'center',
        padding: 50,
    },
    logo: {
        width: 60,
        height: 60,
        marginBottom: 100,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'left',
        width: '100%',
        marginBottom: 28,
    },
    subtitles: {
        textAlign: 'flex-start',
        justifyContent: 'center',
        fontSize: 21,
        marginBottom: 28,
        color: 'grey',
    },
    emailText: {
      fontWeight: 400,
      color: '#007bff',
      fontSize:18,
    },
    inputContainer: {
        flex:1,
        flexDirection:'row',
        gap:6,
        marginHorizontal:20,
        marginVertical: 7,
    },
    inputText: {
        flexDirection: 'row',
        alignItems: 'center',
        gap:3,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginBottom: 20,
        width: '100%',
        justifyContent: 'space-between'
    },
    input: {
        flex: 1,
        height: 20,
        fontSize:18,
    },
    submitButton: {
        backgroundColor: '#007bff',
        width: '80%',
        height: 50,
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
        ...(Platform.OS === 'ios' ? iosShadow : androidShadow)
    },
    submitText: {
        color: '#fff',
        fontSize: 18,
    },
    loginContainer: {
        flexDirection: 'row',
        marginTop: 30,
        gap: 5,
    },
    orText: {
        color: "#60646D",
    },
    loginText: {
        color: '#007bff',
    },

});

