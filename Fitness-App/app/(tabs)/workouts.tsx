import { Text, View, StyleSheet } from "react-native";

export default function WorkoutsScreen() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Workouts Screen</Text>  
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#fff',
  },
});
