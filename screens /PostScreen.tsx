import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Switch,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import ImagePicker, { ImagePickerResponse, MediaTypeOptions } from 'react-native-image-picker';


const CreatePostScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [name, setName] = useState("");
  const [biography, setBiography] = useState("");
  const [impact, setImpact] = useState("");
  const [addMedia, setAddMedia] = useState(false);
  const [notifyCelebrant, setNotifyCelebrant] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [addProject, setAddProject] = useState(false);

  const handleCreatePost = () => {
    console.log("Selected Category:", selectedCategory);
    console.log("Name:", name);
    console.log("Biography:", biography);
    console.log("Impact:", impact);
    console.log("Add Media:", addMedia);
    console.log("Add Project", addProject);

    if (selectedImage) {
      console.log("Selected Image URI:", selectedImage);
    }
  };

  //Image Picker Logic 
  const openImagePicker = () => {
  const options = {
    mediaType: ,      // Specify the media type as 'photo'
    includeBase64: false,   // Set to true if you want to include base64 data
    maxHeight: 200,          // Maximum height of the selected image
    maxWidth: 200,           // Maximum width of the selected image
  };

  ImagePicker.launchImageLibrary(options, (response: ImagePickerResponse) => {
    if (!response.didCancel) {
      if (response.error) {
        console.error("ImagePicker Error:", response.error);
      } else {
        setSelectedImage(response.uri);  // Set the selected image URI
      }
    }
  });
};
  }


  return
    <ScrollView contentContainerStyle={styles.container}>
      {/* ... */}
      {/* Place the ImagePicker logic inside JSX tags */}
      <TouchableOpacity onPress={openImagePicker} style={styles.imagePickerButton}>
        <Text>Select Image</Text>
    
      </TouchableOpacity>
      <Button title="Create Post" onPress={handleCreatePost} />
      {/* ... */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  imagePickerButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    alignItems: "center",
  },
  container: {const styles = StyleSheet.create({
    categoryContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 10,
      marginBottom: 10,
    },
    optionContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    // Comment should be correctly formatted, not "/"
    imagePickerButton: {
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 10,
      alignItems: "center",
    },
  });
    // Add your container styles here
  },
});

export default CreatePostScreen;
