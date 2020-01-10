import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Sidebar from '../../components/Sidebar';
import RecentPosts from './RecentPosts';

import blogData from '../../data/blog.json';

const SideImage = props => {
    return (
        <div style={{ height: `${props.height}px`  }}>
            <img src={props.src} alt="" />
        </div>
    );
}

const ImageGallary = props => (<div className="gallaryPost" style={props.gallaryStyle}>

                    
<section style={{ width: '70%' }}>
    <div className="mainImageWrapper">
        <img src={require('../../blogPostImages/' + props.imagesArray[2])} alt="" />
    </div>
</section>
<section className={"sideImageWrapper"} style={{ width: '30%' }}>
    <SideImage 
        height={props.sideImageHeight}
        src={require('../../blogPostImages/' + props.imagesArray[1])}
        alt="" />
    <SideImage 
        height={props.sideImageHeight}
        src={require('../../blogPostImages/' + props.imagesArray[0])}
        alt=""
        />
    <SideImage 
        height={props.sideImageHeight}
        src={require('../../blogPostImages/' + props.imagesArray[3])}
        alt=""
    />
    
    
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

   console.log(blogData)

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

            <section className="HomeContainer">
                
                <RecentPosts style={{width: '70%'}}/>
                <Sidebar />
                
            </section>

            
        </div>
    );
}

export default Home;