import React from 'react';
import { NavigationContainer} from'@react-navigation/native';
import { createStackNavigator} from'@react-navigation/stack';
import CalculatorPage from './CalculatorPage';
import HistoryPage from './HistoryPage';

export default function App({ navigation }) {

const Stack = createStackNavigator();


  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Calculator" component={CalculatorPage} />
          <Stack.Screen name="History" component={HistoryPage}/>
        </Stack.Navigator>
      </NavigationContainer>
  );

}
