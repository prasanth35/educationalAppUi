
import React from 'react';
import {
  View,
} from 'react-native';

import Index from './src';


function App(): JSX.Element {
  return (
    <View style={{backgroundColor:'white',flex:1,padding:2}}>
    <Index/>
    </View>
  );
}

export default App;