import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ImageGrid from './ImageGrid';
import { FlatGrid } from 'react-native-super-grid';
import db from '../Firebase';
// import {useStateValue} from "../StateProvider";

// Set the default number of images to load for each pagination.
const PAGE_SIZE = 5;

function HomeScreen({route, navigation}) {
  // //this will set the data to be received for a shop (fleas).
   const[products,setProducts] = useState([]);
  // const[{basket}] = useStateValue();
  // //this will load the entire data from the store.
  //const[fleaname] = route.params;
  useEffect(() => {
    //this will fetch all products listed under a flea
    db.collection(route.params.flea).onSnapshot(snapshot=>
      (
        setProducts(snapshot.docs.map(doc=>doc.data()))
      )
      )
  }, [products]);
    
    return (
      <ScrollView showsVerticalScrollIndicator={false}><FlatGrid
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
         </ScrollView>
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