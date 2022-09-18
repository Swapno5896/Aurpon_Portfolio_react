import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className=" footer-container">
            <div className="row">
                <div className="col-md-4">
                    <h2>Aurpon Chowdhury</h2>
                    <p className='pt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur amet quisquam rem. Nulla eaque soluta voluptate, maiores, quia magni totam numquam, explicabo quibusdam accusamus porro suscipit tenetur rerum non reprehenderit?</p>

                    <button className='btn btn-primary f-btn'>You Tube</button>
                    <button className='btn btn-danger ms-3  f-btn'>Facebook</button>
                </div>
                <div className="col-md-2 footer-links">
                    <a href='/'>Home</a>
                    <a href='/'>Blogs</a>
                    <a href='/'>About</a>
                    <a href='/'>Video</a>
                    <a href='/'>Contact Me</a>
                </div>
                <div className="col-md-3 footer-img-container">
                    <img src={require('../../images/dada-1.jpg')} alt="" /><img src={require('../../images/dada-2.jpg')} alt="" /><img src={require('../../images/dada-1.jpg')} alt="" /><img src={require('../../images/dada-2.jpg')} alt="" /><img src={require('../../images/dada-1.jpg')} alt="" /><img src={require('../../images/dada-2.jpg')} alt="" />
                </div>
                <div className="col-md-3 footer-location ">
                    <p>Momtaz Plaza (3rd Floor) House #07, Road #04,</p>
                    <p>Dhanmondi, Dhaka, Bangladesh</p>
                    <p>0175454545</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;