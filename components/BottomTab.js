import React , {useState,useEffect}  from 'react'
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SwipingBanner from './SwipingBanner';
import Details from './Details';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Checkout from './Checkout';
import Account from './Account';
import db from '../Firebase';

const Tab = createBottomTabNavigator();

function BottomTab({account}) {

  //this will set the data to be received for a shop (fleas).
  const[products,setProducts] = useState([]);
  
  //this will load the entire data from the store.
  useEffect(() => {
    db.collection('h2o').onSnapshot(snapshot=>
      (
        setProducts(snapshot.docs.map(doc=>doc.data()))
      )
      )
  }, [products]);

    return (
        <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
            activeTintColor: '#e91e63',
          }}
        >
            <Tab.Screen name="Home"
           
            // component={()=> <HomeScreen products={products}/>}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
              }}
            >
              {props => <HomeScreen {...props} products={products} />}
            </Tab.Screen>
            <Tab.Screen name="Details" component={Details} 
            options={{
                tabBarLabel: 'Details',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="view-list" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen name="Checkout" component={Checkout} 
            options={{
                tabBarLabel: 'Checkout',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="cart-outline" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen name="Account" component={Account} 
            options={{
                tabBarLabel: 'Account',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
              }}
            />
        </Tab.Navigator>
    )
}

export default BottomTab
