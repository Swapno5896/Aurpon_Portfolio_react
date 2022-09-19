import React from 'react';
import Blogs from '../../compoonents/Blogs/Blogs';
import Footer from '../../compoonents/Footer/Footer';
import SmallContact from '../../compoonents/SmallContact/SmallContact';
import Topbanner from '../../compoonents/TopBanner/Topbanner';

const Home = () => {
    return (
        <div>
            <Topbanner></Topbanner>
            <Blogs></Blogs>
            <SmallContact></SmallContact>
        </div>
    );
};

export default Home;