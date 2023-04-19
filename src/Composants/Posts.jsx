import { Text, StyleSheet, View, Button } from 'react-native'
import * as React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'

export default function Posts() {

    const [posts, setPosts] = useState([]);
    const [currentPostIndex, setCurrentPostIndex] = useState(0);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const currentPost = posts[currentPostIndex];

    const handleNextPost = () => {
        if (currentPostIndex < posts.length - 1) {
            setCurrentPostIndex(currentPostIndex + 1);
        }
    }

    const handlePreviousPost = () => {
        if (currentPostIndex > 0) {
            setCurrentPostIndex(currentPostIndex - 1);
        }
    }


    return (
        <View style={styles.fontText}>
            <Text style={styles.text}>PAGE POSTS</Text>
            <Text style={styles.text}>{currentPost?.title}</Text>
            <Text style={styles.text}>{currentPost?.body}</Text>
            
            <View>
                <Button title="Précédent" onPress={handlePreviousPost} />
                <Button title="Suivant" onPress={handleNextPost} />
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    fontText: {
        backgroundColor: '#000000c0',
    },
    text: {
        paddingBottom: 15,
        color: 'white',
        textAlign: 'center',
    }
})
/* "?" Consulte la base de donnée et je récupère les données dont j'ai besoin */