import { Ionicons } from '@expo/vector-icons'; // Pour les icônes
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function index() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>

        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />

        {/* Titre */}
        <Text style={styles.title}>Login</Text>

        {/* Champ Email */}
        <View style = {styles.inputContainer}>
          <View>  
            <Ionicons name="at-outline" size={20} color="#888" />
          </View>
          <View style={styles.inputText}>
            <TextInput
              placeholder="Email ID"
              placeholderTextColor={'#888'}
              style={styles.input}
              keyboardType= "email-address"
            />
          </View>
        </View>

        {/* Champ Password */}
        <View style = {styles.inputContainer}>
          <View>
            <Ionicons name="lock-closed-outline" size={20} color="#888"/>
          </View>
          <View style={styles.inputText}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={'#888'}
              style={styles.input}
              secureTextEntry = {true}
            />
            <TouchableOpacity onPress={() => router.push('/forgotPassword')}>
              <Text style={styles.forgotText}>Forgot?</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bouton Login */}
        <TouchableOpacity style={styles.loginButton} onPress={() => console.log('Login')}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Séparateur OR */}
        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>OR</Text>
          <View style={styles.separatorLine} />
        </View>

        {/* Bouton Google */}
        <TouchableOpacity style={styles.googleButton} onPress={() => console.log('Login with Google')}>
          <Image
            source={require('../../assets/images/logoGoogle.png')}
            style={styles.googleIcon}
          />
        </TouchableOpacity>

        {/* Sign up */}
        <View style={styles.signupContainer}>
          <Text style={styles.anyAccountText}>Don't have an account yet? </Text>
          <TouchableOpacity onPress={() => router.push('/signUp')}>
            <Text style={styles.signupText}>Sign up</Text>
          </TouchableOpacity>
        </View>
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
    marginBottom: 30,
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
  forgotText: {
    color: '#007bff',
    fontSize: 15,
  },
  loginButton: {
    backgroundColor: '#007bff',
    width: '80%',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    ...(Platform.OS === 'ios' ? iosShadow : androidShadow)
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  separatorText: {
    marginHorizontal: 8,
    color: '#888',
  },
  googleButton: {
    borderWidth: 1,
    borderColor: '#A8C5D6',
    borderRadius: 14,
    padding: 8,
    width: "35%",
    alignItems: "center",
    ...(Platform.OS === 'ios' ? iosShadow : androidShadow),
  },
  googleIcon: {
    width: 24,
    height: 24,
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 30,
    gap: 2,
  },
  anyAccountText: {
    color: "#60646D",
  },
  signupText: {
    color: '#007bff',
  },
});

