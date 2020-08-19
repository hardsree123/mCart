import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useStateValue } from '../StateProvider'
import Product from './Product';
import FlipMove from 'react-flip-move'; 

function Checkout() {
    const[{basket}] = useStateValue();

    return (
        <View style={styles.checkout}>
          {basket?.length === 0 ? (
                <Text>You dont have items to view details of</Text>
            ):(<FlipMove>
                {
                    basket.map(item=>(<Product key={item.id} product={item}/>))
                }  
                </FlipMove>
              )
            }
        </View>
    )
}

export default Checkout



const styles = StyleSheet.create({
    checkout: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });