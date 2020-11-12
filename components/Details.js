import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useStateValue } from '../StateProvider'
import ProductDetail from '../screens/ProductDetail';


function Details({navigation}) {
    const[{selected}] = useStateValue();
    
    return (
        <View style={styles.details}> 
            {
            selected?.length === 0 ? (
                <Text>You dont have items to view details of</Text>
            ):(
                <ProductDetail navigation={navigation}/>
            )
            }   
            {/* <ProductDetail item={item}/> */}
        </View>
    )
}

export default Details


const styles = StyleSheet.create({
    details: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });