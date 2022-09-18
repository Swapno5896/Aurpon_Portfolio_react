import React from 'react';
import BlogCard from '../../compoonents/BlogCard/BlogCard';
import BlogSearch from '../../compoonents/BlogSearch/BlogSearch';
import SpecialBlog from '../../compoonents/SpecialBlog/SpecialBlog';
import './blogs.css'
const Blogs = () => {
    const blogs = [{ name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' },]
    return (
        <div>
            <SpecialBlog></SpecialBlog>
            <BlogSearch></BlogSearch>
            <div className="container">
                <div className="row">
                    {
                        blogs.map(blog => <BlogCard></BlogCard>)
                    }
                </div>
            </div>
            <nav className='mt-5' aria-label="...">
                <ul class="pagination d-flex justify-content-center">
                    <li class="page-item disabled">
                        <a class="page-link">Previous</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item active" aria-current="page">
                        <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>

            </nav>

        </div>
    );
};

export default Blogs;