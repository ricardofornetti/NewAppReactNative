import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EstructuraDetalle = ({route}) => {
    const {estructura} = route.params

  return (
    <View style={styles.screen}>
        <Text style={styles.title}>{estructura.name}</Text>
        <Text>{estructura.description}</Text>
    </View>
  )
}

export default EstructuraDetalle;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontFamily:'PTSansNarrowBold',
        marginBottom: 10
    }
})


