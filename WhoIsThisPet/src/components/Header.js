import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{ title }</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    backgroundColor: "#E66B7C"
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    textTransform: 'uppercase'
  }
});

export default Header;