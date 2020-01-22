import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from '../components/Header';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Who is this pet" />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default HomeScreen;