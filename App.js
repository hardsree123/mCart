import 'react-native-gesture-handler';
import React,{useState} from 'react';
import {StatusBar, Platform} from 'react-native';
import { Provider as PaperProvider} from 'react-native-paper';
import Headbar from './components/Headbar';
import Main from './Main';

export default function App() {
  const styleTypes = ['default','dark-content', 'light-content'];
  const [styleStatusBar] = useState(styleTypes[0]);

  return (
   
       <PaperProvider>
        {Platform.OS === 'ios' && Platform.OS=='android' && <StatusBar backgroundColor="blue" barStyle={styleStatusBar} />}
          <Main/>
      </PaperProvider>
   
  );
}
