import React , {useState,useEffect}  from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import SwipingBanner from './SwipingBanner';
import Details from './Details';
import { MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';
import Checkout from './Checkout';
import Account from './Account';
import db from '../Firebase';
import { useStateValue } from '../StateProvider';
import MainScreen from './MainScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


// function DetailStack({products}){
//   return (
//     (products?.length > 0)?
//     (<Stack.Navigator 
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: '#2196f3',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//     }}
//     >
//     <Stack.Screen name="Home" options={{ title: 'H2O' }}>
//         {props => <HomeScreen {...props} products={products} />}
//     </Stack.Screen>
//     <Stack.Screen name="Details" component={Details} />
//   </Stack.Navigator>):(<Text>didnt select the flea to look out for</Text>)
//   );
// }


function HomeStack(){
  return (
    <Stack.Navigator screenOptions={{
                headerStyle: {
                  backgroundColor: '#2196f3',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
            }}
      >
      <Stack.Screen name="Main" options={{ title: 'mflea' ,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        }}>
          {props => <MainScreen {...props} />}
      </Stack.Screen>
      {/* <Stack.Screen name="Home" options={{ title: 'H2O' }}>
        {props => <HomeScreen {...props} products={products} />}
      </Stack.Screen> */}
      <Stack.Screen name="Home" component={HomeScreen} options={({ route }) => ({ title: route.params.brandname })}/>
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}



function BottomTab(account) {
  //const[products,setProducts] = useState([]);
  const[{basket}] = useStateValue();
  //this will load the entire data from the store for an account..
  // useEffect(() => {
  //     db.collection(account.name).onSnapshot(snapshot=>
  //       (
  //         setProducts(snapshot.docs.map(doc=>doc.data()))
  //       )
  //       )
  //   }, [products]);

    return (
        <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
            activeTintColor: '#e91e63',
            keyboardHidesTabBar:true,
          }}
        >
            {/* HOME SCREEN WILL DISPLAY ALL Nearby/Registered FLEAS */}
            <Tab.Screen name="Home"
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
              }}
            >
              {props => <HomeStack />}
            </Tab.Screen>

            <Tab.Screen name="Search"  component={Details} 
            options={{
                tabBarLabel: 'Search',
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="search" size={size} color={color} />
                  // <MaterialCommunityIcons name="view-list" size={size} color={color} />
                ),
              }}
            >
              {/* {props => <DetailStack {...props} products={products} />} */}
            </Tab.Screen>
            <Tab.Screen name="Checkout" component={Checkout} 
            options={{
                tabBarLabel: 'Checkout',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="cart-outline" color={color} size={size} />
                ),
                tabBarBadge: basket?.length
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
