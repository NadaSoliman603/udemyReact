import React from "react";
import { Text, StyleSheet, View, Button ,TouchableOpacity} from "react-native";

const HomeScreen = (props) => {
  return (
    console.log(props),
    <View>
      <Text style={styles.text } >HomeScreen</Text>
      <Button
        onPress={() =>props.navigation.navigate('list') }
        title="Go To List Screen"
        
       />
       <Text style={styles.buttonStyl}></Text>
       <Button
       onPress={()=> props.navigation.navigate("component")}
        title="Go to componentScreen"
       />
      <Text style={styles.buttonStyl}></Text>
       <Button
       onPress={()=> props.navigation.navigate("imag")}
        title="Go To ImageScreen"
       />

       <TouchableOpacity style={styles.text} /*onPress={() =>props.navigation.navigate('list')}*/ >
         <Text>hello woeld</Text>
         <Text>hello woeld</Text>
         <Text>hello woeld</Text>
         <Text>hello woeld</Text>
       </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginVertical: 30
  },
  buttonStyl: {
    marginVertical: 10
  }
});

export default HomeScreen;
