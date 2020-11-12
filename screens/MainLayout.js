import React, { useState } from 'react'
import {Image, StyleSheet,View,Text, TouchableOpacity,Platform, ActivityIndicator} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { MaterialCommunityIcons} from '@expo/vector-icons';
//const LeftContent = () => {<Avatar.Icon {...props} icon="folder" />}


function MainLayout({flea, navigation}) {
    function MoveToStore(){
        console.log(flea.name)
        navigation.navigate('Home',{flea:flea.name, brandname:flea.brandname});
    }
    function Liked(){
        setLike(likes+1);
    }
    const[likes, setLike] = useState(flea.likes);
    return (
            <Card style={{flex:1,flexDirection:"row"}}>
                {/* <Card.title title={flea.brandname} subtitle={flea.description} left={LeftContent}/> */}
                <Card.Content>
                <Title style={{fontWeight:600}}>{flea.brandname}</Title>
                <Paragraph style={{fontWeight:400}} >{flea.description}</Paragraph>
                </Card.Content>
                <TouchableOpacity>
                <Card.Cover source={{ uri: flea.banner }} />
                </TouchableOpacity>
                <Card.Actions>
                    <Button icon={()=><MaterialCommunityIcons name="heart-outline" size={24} color="blue" />} onPress={Liked}>{likes}</Button>
                    <Button icon={()=><MaterialCommunityIcons name="store" size={24} color="white" />} mode="contained" onPress={MoveToStore}>View store</Button>
                </Card.Actions>
                </Card>
    )
}

export default MainLayout
