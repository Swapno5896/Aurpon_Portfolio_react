import React from 'react';
import { useParams } from 'react-router-dom';

const DetailBlog = () => {
    const {blogId} = useParams()
    return (
        <div>
            <h2>This is detail of {blogId} blog</h2>
        </div>
    );
};

export default DetailBlog;