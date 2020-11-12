import React from 'react'
import { Header } from 'react-native-elements';
import { Appbar } from 'react-native-paper';
function Headbar() {
    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');

    return (
        // <Header
        //     placement="left"
        //     leftComponent={{ icon: 'home', color: '#fff' }}
        //     centerComponent={{ text: 'mflea', style: { color: '#fff' } }}
        //     rightComponent={{ icon: 'menu', color: '#fff' }}
        // />

        <Appbar.Header>
            <Appbar.BackAction onPress={_goBack} />
            <Appbar.Content title="Title" subtitle="Subtitle" />
            <Appbar.Action icon="magnify" onPress={_handleSearch} />
            <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        </Appbar.Header>
    )
}

export default Header
