import React from 'react';
import { StyleSheet, Text, View, ScrollView, Platform } from 'react-native';
import { useStateValue } from '../StateProvider'
import Product from './Product';

function Checkout() {
    const[{basket}] = useStateValue();
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.checkout}>
          {basket?.length === 0 ? (
                <Text>You dont have items to view details of</Text>
            ):(<View style={styles.checkout}>
                {
                    basket.map(item=>(<Product key={item.id} product={item}/>))
                }  
                </View>
              )
            }
        </View>
      </ScrollView>
    )
}

export default Checkout



const styles = StyleSheet.create({
    checkout: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection:'column',
      // alignItems: 'center',
      justifyContent: 'center',
    },
  
  });