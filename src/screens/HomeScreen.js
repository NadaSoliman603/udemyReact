import React from "react";
import { Text, StyleSheet, View, Button ,TouchableOpacity} from "react-native";

const HomeScreen = (props) => {
  return (
    console.log(props),
    <View  style = {{height: 9000}} >
      <Text style={styles.text } >HomeScreen</Text>
      <Button
        onPress={() =>props.navigation.navigate('list') }
        title="Go To List Screen"
       />

       <Text style={styles.buttonStyl}></Text>
       <Button
        onPress={()=> props.navigation.navigate("component")}
        title="Go to component Screen"
       />

      <Text style={styles.buttonStyl}></Text>
       <Button
        onPress={()=> props.navigation.navigate("imag")}
        title="Go To Image Screen"
       />
      
      <Text style={styles.buttonStyl}></Text>
      <Button
         onPress={()=> props.navigation.navigate("counter")}
        title="Go To Counter Screen"
      />
      <Text style={styles.buttonStyl}></Text>
      <Button 
        onPress={()=>props.navigation.navigate("color")}
        title="Go to Color Screen"
      />

      <Text style={styles.buttonStyl}></Text>
      <Button
        onPress={() =>props.navigation.navigate("squar")}
        title="Go to Squar Screen"
      />

      <Text style={styles.buttonStyl}></Text>
      <Button 
        title="Go To Text Screen"
        onPress = { () =>props.navigation.navigate('inputScreen')}
      />

      <Text style={styles.buttonStyl}></Text>
      <Button 
        title="Go To Password Screen"
        onPress = { () =>props.navigation.navigate('pass')}
      />


      <Text style={styles.buttonStyl}></Text>
      <Button 
        title="Go To Box Screen"
        onPress = { () =>props.navigation.navigate('box')}
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
    marginVertical: 0
  }
});

export default HomeScreen;
