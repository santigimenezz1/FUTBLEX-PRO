import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './NavBarStyles';
import SelectorIdioma from '../SelectorIdioma/SelectorIdioma.jsx';

const NavBar = () => {

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container__navBar}>
                <View style={styles.container__navBar__titulo}>
                    <Image width={250} height={65} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1749657398/by_futblex_pro_12_dy9xpw.png"}}>        
                    </Image>
                </View>
                <View style={styles.container__navBar__menu}>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default NavBar;
