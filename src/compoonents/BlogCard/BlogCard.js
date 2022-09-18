import React from 'react';

const BlogCard = (props) => {

    return (
        <div class="col-md-4">
            <div class="card">
                <img src={require('../../images/aurpon-top-banner.jpg')} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>

        </div>
    );
};

export default BlogCard;