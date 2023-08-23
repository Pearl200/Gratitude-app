import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const FeedScreen = () => {
//Mock Posts 
  const posts = [
    {
      id: '1',
      title: 'Post 1',
      content: 'This is the content of Post 1.',
      author: 'User 1',
    },
    {
      id: '2',
      title: 'Post 2',
      content: 'This is the content of Post 2.',
      author: 'User 2',
    },
    // Add more post objects here
  ];

  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postContent}>{item.content}</Text>
      <Text style={styles.postAuthor}>By {item.author}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  postContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postContent: {
    marginBottom: 10,
  },
  postAuthor: {
    color: '#666',
  },
});

export default FeedScreen;
