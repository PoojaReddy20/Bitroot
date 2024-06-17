// src/api/posts.js
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};
