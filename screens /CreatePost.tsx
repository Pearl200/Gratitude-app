import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Switch,
  ScrollView,
  StyleSheet,
} from "react-native";

const CreatePostScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [name, setName] = useState("");
  const [biography, setBiography] = useState("");
  const [impact, setImpact] = useState("");
  const [addMedia, setAddMedia] = useState(false);
  const [notifyCelebrant, setNotifyCelebrant] = useState(false);

  const handleCreatePost = () => {
    // Perform logic to create the post with the entered information
    // For simplicity, we'll just log the data here
    console.log("Selected Category:", selectedCategory);
    console.log("Name:", name);
    console.log("Biography:", biography);
    console.log("Impact:", impact);
    console.log("Add Media:", addMedia);
    console.log("Notify Celebrant:", notifyCelebrant);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.categoryContainer}>
        <Text>Select Category:</Text>
        {/* Assuming you have a list of categories */}
        {/* Replace 'Category' with the actual category names */}
        <Button
          title="Category"
          onPress={() => {
            // Open a modal or navigate to a category selection screen
            // and set the selected category
            setSelectedCategory("Category");
          }}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Celebrants Biography"
        multiline
        onChangeText={(text) => setBiography(text)}
        value={biography}
      />
      <TextInput
        style={styles.input}
        placeholder="Celebrants Impact"
        multiline
        onChangeText={(text) => setImpact(text)}
        value={impact}
      />
      <View style={styles.optionContainer}>
        <Text>Add Media:</Text>
        <Switch
          value={addMedia}
          onValueChange={(value) => setAddMedia(value)}
        />
      </View>
      <View style={styles.optionContainer}>
        <Text>Notify Celebrant:</Text>
        <Switch
          value={notifyCelebrant}
          onValueChange={(value) => setNotifyCelebrant(value)}
        />
      </View>
      <Button title="Create Post" onPress={handleCreatePost} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default CreatePostScreen;
