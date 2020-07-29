import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DetailRepo = ({ route }) => {

    const [state, setState] = useState({
        id: route.params.id,
        name: route.params.name,
        fullname: route.params.fullname,
        desc: route.params.desc,
    })

    return (
        <View style={styles.container}>
            <View style={{ padding: 20 }}>
                <Text style={{ fontWeight: '900', fontSize: 20, marginBottom: 10 }}>{state.id}</Text>
                <Text style={{ fontWeight: '900', fontSize: 20, marginBottom: 10 }}>{state.name}</Text>
                <Text style={{ fontWeight: '900', fontSize: 20, marginBottom: 10 }}>{state.fullname}</Text>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>Description : </Text>
                    <Text style={{ fontWeight: '900', fontSize: 20, marginTop: 5 }}>{state.desc}</Text>
                </View>
            </View>
        </View>
    )
}

export default DetailRepo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    }
})
