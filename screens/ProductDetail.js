import React, {useState,useEffect} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
    Button,
  } from 'react-native';
import {useStateValue} from "../StateProvider";

function ProductDetail() {
    const[{selected}, dispatch]=useStateValue();
    const[product, setProduct]=useState(selected[0]);
    useEffect(() => {
       setProduct(selected[0]);
    }, )
    function clickEventListener() {
        dispatch({
            type:'ADD_TO_CART',
            item:product
        })   
    }
    return (
        <View style={styles.container}>
        <ScrollView>
        <View style={{alignItems:'center', marginHorizontal:30}}>
            <Image style={styles.productImg} source={product.imgurl}/>
            <Text style={styles.name}>{product.itemname}</Text>
            <Text style={styles.price}>{product.price}</Text>
            <Text style={styles.description}>
              {product.itemdesc}
            </Text>
          </View>
          {/* <View style={styles.contentSize}>
            {
            enumr?.map(v=>(
            <TouchableOpacity style={styles.btnSize}><Text>{v}</Text></TouchableOpacity> ))
            }
          </View> */}
          <View style={styles.separator}></View>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity style={styles.shareButton} onPress={()=> clickEventListener()}>
              <Text style={styles.shareButtonText}>Add To Cart</Text>  
            </TouchableOpacity>
          </View> 
          </ScrollView>
      </View>
    )
}

export default ProductDetail


const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:20,
    },
    productImg:{
      width:200,
      height:200,
      resizeMode:'contain'
    },
    name:{
      fontSize:28,
      color:"#696969",
      fontWeight:'bold'
    },
    price:{
      marginTop:10,
      fontSize:18,
      color:"green",
      fontWeight:'bold'
    },
    description:{
      textAlign:'center',
      marginTop:10,
      color:"#696969",
    },
    star:{
      width:40,
      height:40,
    },
    btnColor: {
      height:30,
      width:30,
      borderRadius:30,
      marginHorizontal:3
    },
    btnSize: {
      height:40,
      width:40,
      borderRadius:40,
      borderColor:'#778899',
      borderWidth:1,
      marginHorizontal:3,
      backgroundColor:'white',
  
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    starContainer:{
      justifyContent:'center', 
      marginHorizontal:30, 
      flexDirection:'row', 
      marginTop:20
    },
    contentColors:{ 
      justifyContent:'center', 
      marginHorizontal:30, 
      flexDirection:'row', 
      marginTop:20
    },
    contentSize:{ 
      justifyContent:'center', 
      marginHorizontal:30, 
      flexDirection:'row', 
      marginTop:20
    },
    separator:{
      height:2,
      backgroundColor:"#eeeeee",
      marginTop:20,
      marginHorizontal:30
    },
    shareButton: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:30,
      backgroundColor: "#00BFFF",
    },
    shareButtonText:{
      color: "#FFFFFF",
      fontSize:20,
    },
    addToCarContainer:{
      marginHorizontal:30
    }
  });