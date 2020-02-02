import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import PetCreateScreen from './src/screens/PetCreateScreen';
import PetAddPhotoScreen from './src/screens/PetAddPhotoScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    PetCreate: PetCreateScreen,
    PetAddPhoto: PetAddPhotoScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

export default createAppContainer(navigator);
