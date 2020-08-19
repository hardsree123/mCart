import React,{forwardRef} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
const Product = forwardRef(({product},ref) => {
//function Product({item},ref) {
    return (
        <View ref={ref} style={styles.product}>
            {/* Image */}
            {/* Volume, specs   */}
            {/* Qty */}
            {/* Item name on right */}
            {/* Price */}
            {/* Description  */}
            
            <Text>Item list 1 {product.itemname}</Text>
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
      justifyContent: 'center',
      width:100+'%',
      height:150,
    },
  
  });