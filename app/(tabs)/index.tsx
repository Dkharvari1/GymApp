import { Image, StyleSheet, Platform, Text, SafeAreaView, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>hello world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
