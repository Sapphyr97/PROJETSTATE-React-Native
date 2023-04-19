import React, { useState } from 'react';
import { Image, View, Button, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function AvatarPicker({ navigation}) {
  const [avatar, setAvatar] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginVertical:60 }}>
        
          <Button title="Choisis ton image" onPress={pickImage} />
        {avatar && <Image source={{ uri: avatar }} style={{ width: 200, height: 200, borderRadius:150 }} />}
        
      </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        padding: 20,
    }
});