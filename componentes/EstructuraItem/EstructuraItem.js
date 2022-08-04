import React from 'react'
import {TouchableOpacity, View, Text, StyleSheet} from "react-native"

const EstructuraItem = ({item, onSelected}) => {
  return (
    <TouchableOpacity
            onPress={() => onSelected(item)}
        >
            <View style={styles.estructuraItem}>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.details}>{item.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
  )
}

export default EstructuraItem

const styles = StyleSheet.create({
    estructuraItem:{
        padding: 20,
        margin: 10,
        borderRadius:3,
        backgroundColor:'#ccc'
    },
    title:{
        fontSize:20,
        fontFamily:'PTSansNarrowRegular',
    },
    details:{
        fontSize:18,
    },

})

