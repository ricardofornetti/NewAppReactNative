import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import AddItem from '../../componentes/AddItem'

const StructureDetailScreen = ({route}) => {
    const {structure} = route.params
  return (
    <View style={styles.screen}>
        {/*<Text style={styles.title}>{estructura.name}</Text>*/}
        <Text>{structure.description}</Text>
        <AddItem />   
        
    </View>
  )
}

export default StructureDetailScreen;


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
});
