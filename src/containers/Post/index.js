import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import BlogPost from '../../components/BlogPost';
import Sidebar from '../../components/Sidebar';
import Layout from '../../components/Layout';

/**
* @author
* @function Post
**/

const Post = (props) => {

    console.log(props);


  return(
        <Layout>
          <BlogPost {...props} />
        </Layout>
   )

 }

export default Post;