import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardContainer = (props) => {
  return (
    <View style={styles.container}>
      { props.children }
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: -50,
    marginHorizontal: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 15,
    backgroundColor: '#FFF',

    // Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default CardContainer;