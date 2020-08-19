import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function Account() {
    return (
        <View style={styles.account}>
             <Text>This is the account screen </Text>
        </View>
    )
}

export default Account;


const styles = StyleSheet.create({
    account: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });