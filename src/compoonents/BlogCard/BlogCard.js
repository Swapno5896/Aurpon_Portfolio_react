import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BlogCard.css'
const BlogCard = (props) => {
    const {id} = props.blog
    const navigate = useNavigate()
    const showDetailBlog = () =>{
        navigate(`/blog/${id}`)
    }

    return (
        <div onClick={showDetailBlog} className="blog-card-container mt-4 col-md-4">
            <div className="card blog-card">
                <img src={require('../../images/aurpon-top-banner.jpg')} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>

        </div>
    );
};

export default BlogCard;