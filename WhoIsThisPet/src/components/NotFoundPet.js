import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const NotFoundPet = () => {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={require('../../assets/images/pet-not-found-image.png')}
      />
      <Text style={styles.message}>Nenhum PET encontrado.</Text>
      <View style={styles.instructionContainer}>

      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    opacity: 0.5
  },
  image: {
    marginTop: 30,
    width: 200,
    height: 200
  },
  message: {
    marginTop: 10,
    fontSize: 18
  },
  instructionContainer: {
    
  }
});

export default NotFoundPet;