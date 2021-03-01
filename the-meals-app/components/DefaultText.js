import { StyleSheet, Text } from 'react-native'

import React from 'react'

const DefaultText = props => {
    return <Text style = {styles.text}>{props.children}</Text>
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight:'bold',
    }
})
export default DefaultText
