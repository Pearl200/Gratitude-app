import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Simulate login logic
    const isLoginSuccessful = true; 

    if (isLoginSuccessful) {
      navigation.navigate("HomeScreen");
    } else {
      setError("Invalid email or username");
    }
  };

  return (
    <View style={styles.container}>
      {/* Header with Logo */}
      <View style={styles.header}>
        <Image
          source={require("./path/to/logo.png")} // Replace with actual logo path
          style={styles.logo}
        />
      </View>

      {/* Image */}
      <Image
        source={require("./path/to/image.png")} // Replace with actual image path
        style={styles.image}
      />

      <TextInput
        placeholder="Email or Username"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />
      <View style={styles.checkboxContainer}>
        <Text>Remember Me</Text>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={toggleRememberMe}


           <View style={[styles.checkboxInner, rememberMe && styles.checked]} />
        </TouchableOpacity>
      </View>
      </View>

      <Button title="Sign In" onPress={handleLogin} />

      <Text style={styles.errorText}>{error}</Text>
    </View>
  );
};

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
