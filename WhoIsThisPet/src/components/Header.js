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
    backgroundColor: "#E66B7C",
    paddingTop: 30,
    paddingBottom: 80,
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
});

export default Header;