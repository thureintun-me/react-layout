import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from './components/Header.js';
import GameScreen from './screen/GameScree.js';

export default function App() {
  return (
    <View >
      <Header></Header>
      <GameScreen></GameScreen>


    </View>
  );
}


