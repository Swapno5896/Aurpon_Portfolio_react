import React from 'react';
import './SmallContact.css'
const SmallContact = () => {
    return (
        <div className='container smallContact-container'>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <img className='SmallContact-img' src={require('../../images/contect_creation.webp')} alt="" />
                </div>
                <div className="col-md-5 col-sm-12 SmallContact-text d-flex align-items-center">
                    <div>
                    <h2>Content Creation To Help Other's</h2>
                    <p>University Admissions, Career guidance and a touch of vlogging- I love to help my massive following in every way possible.

                    </p>
                    <button className='btn btn-primary f-btn'>You Tube</button>
                    <button className='btn btn-danger ms-3  f-btn'>Facebook</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SmallContact;