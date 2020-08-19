import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';



function Login() {
    
    return (
        <TouchableOpacity style={style.login} 
            onPress={
                ()=>{this.login();}
            }>
            <Text>Login page</Text>
        </TouchableOpacity>
    )
}

export default Login


const styles = StyleSheet.create({
    login: {
      flex: 1,
      height:100+'%',
      width:100+'%',
      justifyContent: 'center',
      flexDirection:"row",
      alignContent:'center'
    },
)