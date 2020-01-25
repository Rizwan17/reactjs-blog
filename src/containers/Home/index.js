import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Sidebar from '../../components/Sidebar';
import RecentPosts from './RecentPosts';

import blogData from '../../data/blog.json';
import Layout from '../../components/Layout';

const SideImage = props => {
    return (
        <div style={{ height: `${props.height}px`  }}>
            <img src={props.src} alt="" />
        </div>
    );
}

const ImageGallary = props => (
        <div className="gallaryPost" style={props.gallaryStyle}>
                <section style={{ width: props.largeWidth }}>
                    <div className="mainImageWrapper">
                        <img src={require('../../blogPostImages/' + props.imagesArray[1])} alt="" />
                    </div>
                </section>
                <section className={"sideImageWrapper"} style={{ width: props.smallWidth }}>
                    {
                        props.imagesArray.map(image => 
                            <SideImage 
                                height={props.sideImageHeight}
                                src={require('../../blogPostImages/' + image)}
                                alt="" />
                        )
                    }
                </section>
        </div>
);

const Home  = props => {
    const gallaryHeight = 450;
    const gallaryStyle = {
        height: gallaryHeight+'px',
        overflow: 'hidden'
    }
    const sideImageHeight = gallaryHeight / 3;
   const imgAr = blogData.data.map(post => post.blogImage)
    return (
        <div>
            <Card>
                <ImageGallary 
                            largeWidth="70%"
                            smallWidth="30%"
                            sideImageHeight={sideImageHeight}
                            gallaryStyle={gallaryStyle}
                            imagesArray={imgAr}
                        />
            </Card>
                <Layout>
                    <RecentPosts style={{width: '70%'}}/>
                </Layout>
        </div>
    );
}

export default Home;