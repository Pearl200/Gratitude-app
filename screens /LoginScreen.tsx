import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
     if (email === "user@example.com" && password === "password") {
      // Navigate to the next screen upon successful login
      navigation.navigate("HomeScreen");
    } else {
      setError("Invalid email or password");
    }
    // Simulate login logic
    const isLoginSuccessful = true; 

    if (isLoginSuccessful) {
      navigation.navigate("HomeScreen");
    } else {
      setError("Invalid email or username");
    }
  };

  function toggleRememberMe(event: GestureResponderEvent): void {
    throw new Error("Function not implemented.");
  }

  return(

    <><View style={styles.container}>
      {/* Header with Logo */}
      <View style={styles.header}>
        <Image
          source={require(".assets/buzsquare.PNG")} 
          style={styles.logo} />
      </View>

      {/* Image */}
      <Image
        source={require("https://images.pexels.com/photos/3182824/pexels-photo-3182824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")} // Replace with actual image path
        style={styles.image} />

      <TextInput
        placeholder="Email or Username"
        style={styles.input} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input} />
      <View style={styles.checkboxContainer}>
        <Text>Remember Me</Text>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={toggleRememberMe}>


          <View style={[styles.checkboxInner, rememberMe && styles.checked]} />
        </TouchableOpacity>
      </View>
    </View><Button title="Sign In" onPress={handleLogin} /><Text style={styles.errorText}>{error}</Text></>
    
      </View>
  
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  checkboxContainer: {
    width: 10,
    height: 10,
    backgroundColour: "Light Grey",
    borderRadius : 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  errorText: {
    color: "red",
    marginTop: 10,
  },
});

export default LoginScreen;
