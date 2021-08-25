import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './style'

export default function Cars() {
    return (
        <View style={styles.carcontainer}>
            <ImageBackground 
                source={require('@assets/ModelS.jpeg')}
                style={styles.image}
            ></ImageBackground>
            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>

                <Text style={styles.subtitle}>Starting at $99,990</Text>
            </View>
        </View>
    )
}

