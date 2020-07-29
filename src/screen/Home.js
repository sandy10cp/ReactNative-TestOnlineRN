import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'

const App = ({ navigation }) => {

    const [state, setState] = useState({
        message: 'Search Item'
    })
    const [keyword, setKeyword] = useState('')
    const [users, setUsers] = useState([])

    const serchUserRepo = keyword => {
        setKeyword(keyword)
        if (keyword.length >= 3) {
            let url = `https://api.github.com/users/${keyword}/repos`
            fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'Authorization': 'token  480fe65d1ec8152cac535e46b57ee50da3bf7b41',
                }
            })
                .then((resp) => resp.json())
                .then((data) => {
                    // console.log(data);
                    if (data.message == 'Not Found') {
                        setState({ message: 'Not found' })
                        setUsers([])
                    } else {
                        setUsers(data)
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    const detailRepo = (id, name, fullname, desc) => {
        navigation.navigate('DetailRepo', { id, name, fullname, desc })
    }

    function renderUsers() {
        return users.map((item, index) => {
            return (
                <TouchableOpacity key={item.id} style={styles.resultList}
                    onPress={() => detailRepo(item.id, item.name, item.full_name, item.description)}
                >
                    <Text numberOfLines={1} style={{ fontSize: 16, fontWeight: 'bold' }}>{item.id} - {item.name}</Text>
                </TouchableOpacity>
            )
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.txtHeader}>Search User Repositories</Text>
            </View>
            <View style={styles.contentSearch}>
                <TextInput
                    style={styles.inputTextSearch}
                    onChangeText={text => serchUserRepo(text)}
                    value={keyword}
                    placeholder="Search..."
                />
            </View>
            <View style={styles.contentResult}>
                <ScrollView>
                    <View style={styles.result}>
                        {
                            users.length == 0 ?
                                <View>
                                    <Text>{state.message}</Text>
                                </View> :
                                renderUsers()
                        }
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    header: {
        width: '100%',
        height: 50,
        backgroundColor: '#d9d9d9',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtHeader: {
        fontSize: 25,
        color: 'black',
        textTransform: 'capitalize'
    },
    contentSearch: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    inputTextSearch: {
        color: 'gray',
        fontSize: 17,
        width: '75%',
        height: 40,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: "#eee",
        shadowOffset: {
            width: 7,
            height: 7,
        },
        shadowOpacity: 0.5,
        shadowRadius: 6.27,
        elevation: 7,
    },
    contentResult: {
        width: '100%',
    },
    result: {
        width: '100%',
        padding: 10,
        // backgroundColor: '#d9d9d9',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    resultList: {
        width: '98%',
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 3,
        shadowColor: "#eee",
        shadowOffset: {
            width: 7,
            height: 7,
        },
        shadowOpacity: 0.5,
        shadowRadius: 6.27,
        elevation: 7,
        marginBottom: 10,
    }
})
