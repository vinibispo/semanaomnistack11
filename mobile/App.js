import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import React from 'react';
import Routes from './src/routes.js'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
  <Routes />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
