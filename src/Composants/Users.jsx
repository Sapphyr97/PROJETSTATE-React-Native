
import { Text, StyleSheet, View, Button, FlatList } from 'react-native'
import { useState, useEffect } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <View style={styles.container}>
            <FlatList data={users} renderItem={({ item }) => <View style={[styles.container, styles.fontText]}>
                <Text style={[styles.text, styles.title]}>{item?.name}</Text>
                <Text style={styles.text}>{item?.email}</Text>
                <Text style={styles.text}>{item?.address?.city}</Text>
                <Text style={styles.text}>{item?.address?.zipcode}</Text>
            </View>

            } />
        </View>
    )
}

export default Users

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    fontText: {
        backgroundColor: '#000000c0',
        marginBottom:10,
        padding:10,
        borderRadius:8
    },
    text: {
        paddingBottom: 10,
        color: 'white',
        textAlign: 'center',
        fontSize:10
    },
    title:{
        fontSize:15,
        fontWeight:'bold'
    }
})
