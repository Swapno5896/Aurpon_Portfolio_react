import React from 'react';
import BlogCard from '../../compoonents/BlogCard/BlogCard';
import SmallContact from '../../compoonents/SmallContact/SmallContact';
import Topbanner from '../../compoonents/TopBanner/Topbanner';
import './Home.css'
const Home = () => {
    const blogs = [
        { name: '', id: 1 },
        { name: '', id: 2 },
        { name: '', id: 3 },
      
    ]
    return (
        <div>
            <Topbanner></Topbanner>
            <div className="container">
            <p className='recent-blogs'>Recent Blogs</p>
                <div className="row">
                    {
                        blogs.map(blog => <BlogCard
                            key={blog.id}   
                            blog={blog}     
                        ></BlogCard>)
                    }
                </div>
            </div>
            
            <SmallContact></SmallContact>
        </div>
    );
};

export default Home;