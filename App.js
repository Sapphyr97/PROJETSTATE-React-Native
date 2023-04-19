import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1, flexDirection:'column'}}>
        <View style={{flex: 1, backgroundColor: 'red'}} /> 
        <View style={{flex: 1, backgroundColor: 'darkorange'}} />
        <View style={{flex: 1, backgroundColor: 'green'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column'
  },
});
