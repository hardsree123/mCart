import React,  { useState } from 'react';
import {useStateValue} from "../StateProvider";
import { Image,StyleSheet,View,Text, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

function ImageGrid({item, navigation}, ref) {
  const[{}, dispatch]=useStateValue();
  function viewDetails() 
  {
    dispatch({
      type:'ADD_TO_VIEW',
      item:item
    })
    navigation.navigate('Details');
  }
  const addToCart = ()=>{
       dispatch({
           type:'ADD_TO_CART',
           item:item
       })
   };

    return (
      // <TouchableHighlight onPress={this._onPressButton} onLongPress={this.addToCart} underlayColor="white">
        <TouchableOpacity 
        style={[styles.itemContainer, { backgroundColor: '#1976D2' }]}
        onPress={
          ()=>{viewDetails();}
        }
        onLongPress={
          ()=>{addToCart();}
        }
        >
          <Image
            style={styles.imagegrid__img}
            source={{
                  uri: item.imgurl,
                  //cache: 'only-if-cached'
                }}
          />
           <Text style={styles.itemName}>{item.itemname}</Text>
           <Text style={styles.itemCode}>{item.modelnumber}</Text>
        </TouchableOpacity>
    )
}

export default ImageGrid;

const styles = StyleSheet.create({
    imagegrid: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:"row"
    },
    gridView: {
      marginTop: 10,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 2,
      height: 200,
    },
    imagegrid__img: {
      flex: 1
    },
    itemName: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
})