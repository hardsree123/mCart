import React,{forwardRef, useState} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';

function removeFromCart(){

}

const Product = forwardRef(({product},ref) => {
    
    return (
         <View  ref={ref}  style={styles.product}>
            <Image
                style={styles.product__img}
                source={{
                    uri: product.imgurl,
                    cache: 'only-if-cached'
                    }}
                />
            <View style={styles.product__info}>
                <Text style={styles.product__itemname}>
                    {product.itemname}
                </Text>
                <Text style={styles.product__itemdesc}>{product.modelnumber}</Text>
            </View>
            <View style={styles.product__attr}>
                <Text style={styles.product__price}><FontAwesome name="rupee" size={18} color="black" />{" " + product.price} </Text>
                 <TouchableOpacity
                    style={styles.product__removecart}
                    onPress={removeFromCart}
                 >
                <MaterialCommunityIcons name="cart-remove" size={18} color="white" style={styles.product__removecrtIcon} />
                <Text style={styles.product__removetxt}>Remove from cart</Text>
              </TouchableOpacity>
                 
            </View>

            
        </View>
    )
}
)
export default Product;


const styles = StyleSheet.create({
    product: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      width:100+'%',
      height:150,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom:10,
        shadowColor:"#000",
        shadowOpacity:0.2,
        shadowRadius:1,
        shadowOffset:{
            width:3,
            height:3
        }
    },
  product__itemname:{
    fontSize:18,
    padding:10
  },
  product__price:{
    marginBottom:40,
    marginLeft:20,
    fontSize:18,
    fontWeight:600
  },  
  product__removecart:{
    fontSize:14,
    height:40,
    width:'90%',
    flexDirection: 'row',
    paddingTop:10,
    paddingLeft:10,
    backgroundColor:"#E94235",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  product__removetxt:{
    fontSize:14,
    height:40,
    color:'white'
  },
  product__removecrtIcon:{
    paddingRight:10,
  },
  product__itemdesc:{
    fontSize:14,
    padding:10
  },
  product__img:{
        flex: 0.25,
        height:100+'%',
        width:100,
        resizeMode:'contain',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
  },
  product__info:{
        flex: 0.40,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
  },
  product__attr:{
    flex: 0.35,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  }

  });