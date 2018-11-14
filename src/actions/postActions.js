import dataSet from '../dataSet.json';
const FETCH_POSTS = 'FETCH_POSTS';
const NEW_POST = 'NEW_POST';


export const fetchPosts = () => dispatch => {
  posts = dataSet;
  dispatch({
    type: FETCH_POSTS,
    payload: posts
  })
} 
