import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ImageGrid from './ImageGrid';
import { FlatGrid } from 'react-native-super-grid';
import MainLayout from '../screens/MainLayout';
import {useStateValue} from "../StateProvider";
import db from '../Firebase';

// Set the default number of images to load for each pagination.
const PAGE_SIZE = 5;

function MainScreen({navigation}) {
  // //this will set the data to be received for a shop (fleas).
  const[fleas,setFleas] = useState([]);
  //this will load the entire flea from the store for an account..
  useEffect(() => {
      db.collection('fleas').onSnapshot(snapshot=>
        (
          setFleas(snapshot.docs.map(doc=>doc.data()))
        )
        )
    }, [fleas]);
  
  return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {
        fleas.map((item)=>(
                <MainLayout key={item.id} flea={item} navigation={navigation}/>
            )
          )
        }
        </ScrollView>
   
        
    )
}

export default MainScreen;

const styles = StyleSheet.create({
    mainscreen: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:"row"
    },
    
  });