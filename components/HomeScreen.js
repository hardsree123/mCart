import React, { useState } from 'react'
import { StyleSheet, Text, View, LayoutAnimation, RefreshControl  } from 'react-native';
import ImageGrid from './ImageGrid';
import { FlatGrid } from 'react-native-super-grid';
import FlipMove from 'react-flip-move';
// import {useStateValue} from "../StateProvider";

// Set the default number of images to load for each pagination.
const PAGE_SIZE = 5;

function HomeScreen({products, navigation}) {
    // const[{}, dispatch]=useStateValue();
    return (
      <FlipMove> 
        <FlatGrid
          itemDimension={130}
          data={products}
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          spacing={10}
          renderItem={({ item }) => (
            <ImageGrid key={item.id} item={item} navigation={navigation}/>
          )}
        />
    </FlipMove>
        
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    homescreen: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:"row"
    },
    
  });