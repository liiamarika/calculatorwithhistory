import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function CalculatorPage({ navigation }) {

const [result, setResult] = useState(0);
const [num1, setNum1] = useState('');
const [num2, setNum2] = useState('');
const [text, setText] = useState('');
const [data, setData] = useState([]);

// pitää käyttää välimuuttujaa koska setresult on asynkroninen ja result ei ole vielä ehtinyt muuttua kun sitä jo tarvitaan dataa tallennettaessa

const checkPlusResult = () => {
    const plus = parseFloat(num1) + parseFloat(num2);
    setResult(plus)
    setData([...data, {key: `${num1} - ${num2} = ${plus}` }]);
    setNum1('');
    setNum2('');
}

const checkMinusResult = () => {
    const minus = (num1 - num2);
    setResult(minus)
    setData([...data, {key: `${num1} - ${num2} = ${minus}` }]);
    setNum1('');
    setNum2('');
}

  return (
    <View style={styles.container}>
     <View style={styles.inputContainer}> 
       <Text>Result: {result}</Text>
       <TextInput style={{width:200, borderColor:'gray', borderWidth:1}}
        keyboardType='numeric'
        value={num1}
        onChangeText={num1 => setNum1(num1)} 
       />
       <TextInput style={{width:200, borderColor:'gray', borderWidth:1}}
        keyboardType='numeric'
        value={num2}
        onChangeText={num2 => setNum2(num2)} 
       />
     </View>
     <View style={styles.buttonContainer}>
        <Button onPress={checkPlusResult} 
          title="+"/>
       <Button onPress={checkMinusResult} 
          title="-"/>
        <Button
        title="History"
        onPress={ () => navigation.navigate('History', {data} ) } />
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flex: 2,
    width: 150,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
});
