import React from 'react';
import './topbanner.css'
const Topbanner = () => {
    return (
        <div class="topbanner-container pt-4 row justify-content-center container">
            <div class="col-md-4 col-sm-12 topbanner-text-start">
                <h2 className='topbanner-gretting'>Hello, Welcome to <br />
                    Aurpon World</h2>
                <p className='pt-4 topbanner-sub-dis' >International Student, Volunteer To RABAC
                </p>
                {/* <p className='topbanner-dis'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga optio, dolores error voluptates recusandae eaque soluta rem, architecto nobis porro asperiores hic, at rerum a non! Libero quod quos illum!</p> */}
            </div>
            <div class="col-md-4 col-sm-12">
               <img  class="topbanner-image" src={require("../../images/aurpon-removebg-preview.png")} alt="" />
            </div>
        </div>
    );
};

export default Topbanner;