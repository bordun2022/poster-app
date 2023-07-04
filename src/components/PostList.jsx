import React from "react";
import { useState, useEffect } from "react";
import style from "../components/PostList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";


const PostList = (props) => {
  const [posts, setPosts] = useState([]);


  // const addPostHandler = (postData) => {
  //   setPosts(prevPosts => {
  //     const updated = [...prevPosts];
  //     updated.push({...postData, id: Math.random().toString()});
  //     console.log(updated)
  //     return updated;
  //   })
  // }

  //   const removePostHandler = (postId) => {
  //   setPosts(prevPosts => {
  //  const updated = prevPosts.filter(post => post.id !== postId)  
  //  console.log('REMOVED', updated)
  //  return updated;
  //   })
      
  // };

const addPostHandler = (postData) => {
    setPosts((prevPosts) => [postData, ...prevPosts]);
    console.log(postData)
  }

  const removePostHandler = postId => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== postId))
    console.log('REMOVED')
  }

  return (
    <React.Fragment>
      {props.isPosting && (
        <Modal onHide={props.onStopPosting}>
          <NewPost
            onCancel={props.onStopPosting}
            onAdd={addPostHandler}
          />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={style.posts}>
          {posts.map((post) => (
            <Post onRemove={removePostHandler} key={post.id} id={post.id} author={post.author} body={post.body} />
          ))}
          
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding something!</p>
        </div>
      )}
    </React.Fragment>
  );
};

export default PostList;
