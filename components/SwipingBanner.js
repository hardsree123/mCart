import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function SwipingBanner() {
    return (
        <View style={styles.swipingbanner}>
            <Text>This is the swiping banner screen </Text>
        </View>
    )
}

export default SwipingBanner;



const styles = StyleSheet.create({
    swipingbanner: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });