import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import PetAddScreen from './src/screens/PetAddScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    PetAdd: PetAddScreen 
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

export default createAppContainer(navigator);
