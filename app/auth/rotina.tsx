import { View, Text, TextInput, ScrollView, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const LoginScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <MaterialIcons name='arrow-back' color='#fff' size={24} />
        </Pressable>
        <Text style={styles.headerText}>Login</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Bem-vindo de volta!</Text>
        <Text style={styles.subtitle}>Faça login para continuar</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Gmail</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry
          />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Pressable style={styles.button} onPress={() => router.push('/(tabs)/home')}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0eafc', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6C63FF', 
    height: 86,
    paddingLeft: 16,
    width: '100%',
    elevation: 5, 
  },
  headerText: {
    marginLeft: 16,
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  scrollView: {
    paddingHorizontal: 25,
    paddingVertical: 18,
    width: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 24,
    color: '#666',
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#C0C0C0',
    borderRadius: 25, 
    height: 50,
    marginBottom: 16,
    paddingHorizontal: 20,
    shadowColor: '#000', 
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  footer: {
    backgroundColor: '#6C63FF', 
    height: 86,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 25, 
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 5, 
  },
  buttonText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
