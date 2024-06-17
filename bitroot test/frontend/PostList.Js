// src/components/PostsList.js
import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../api/posts';
import './PostsList.scss'; // Styles using SCSS

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPostsData = async () => {
      const postsData = await fetchPosts();
      setPosts(postsData.slice(0, 6)); // Limit to first 6 posts
    };
    fetchPostsData();
  }, []);

  return (
    <div className="posts-list">
      {posts.map(post => (
        <div key={post.id} className="post-card">
          <h2 className="post-title">{post.title}</h2>
          <p className="post-body">{post.body}</p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
