import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './components/BottomTab';
import { StateProvider } from './StateProvider';
import reducer, {initialState} from './reducer';

export default function App() {
  //const[user, dispatch] = useStateValue();

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <NavigationContainer>
        {/* The below tab shall only be accessible post login. */}
        {/* We may have to add the reducer logic to have the session implemented */}
        <BottomTab account={'h2o'} />
      </NavigationContainer>
    </StateProvider>
    
  );
}
