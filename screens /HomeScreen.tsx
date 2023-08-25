import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios"; // Import the Axios library

const HomeScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Function to fetch posts using Axios
    const fetchPosts = async () => {
      try {
        const bearerToken = await AsyncStorage.getItem('bearerToken');
        const apiBaseUrl = 'https://your-api-url.com'; // Replace with your API URL
        const response = await axios.get(`${apiBaseUrl}/posts`, {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        });

        if (response.status === 200) {
          setPosts(response.data);
        } else {
          console.error('Failed to fetch posts');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchPosts();
  }, []);

  // ... rest of the component code
};

const styles = StyleSheet.create({
  // ... styles
});

export default HomeScreen;
