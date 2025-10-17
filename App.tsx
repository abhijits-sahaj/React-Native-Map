import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [status, setStatus] = useState<string>('Ready to install Firebase packages');

  const handleTestPress = () => {
    setStatus('Please install Firebase packages first!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🗺️ React Native Map</Text>
      <Text style={styles.subtitle}>Setup Status:</Text>
      <Text style={styles.status}>{status}</Text>
      
      <TouchableOpacity style={styles.button} onPress={handleTestPress}>
        <Text style={styles.buttonText}>Test Setup</Text>
      </TouchableOpacity>
      
      <View style={styles.info}>
        <Text style={styles.infoText}>Bundle ID: com.abhijits.reactnativemap</Text>
        <Text style={styles.infoText}>Firebase files: ✅ Ready</Text>
        <Text style={styles.infoText}>Next: Install packages 📦</Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#2196F3',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  status: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    minWidth: 280,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  info: {
    alignItems: 'center',
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
});