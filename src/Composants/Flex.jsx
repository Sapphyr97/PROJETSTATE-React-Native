import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';



const flex = () =>{
      return (
        <View style={styles.container}>
            <View style={{flex: 1, backgroundColor: 'red'}} /> 
            <View style={{flex: 2, backgroundColor: 'darkorange'}} />
            <View style={{flex: 3, backgroundColor: 'green'}} />
      </View>
      );
    }
export default flex;

const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        flex: 1,
        padding: 20,
    }
});