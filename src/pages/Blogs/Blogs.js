import React from 'react';
import BlogCard from '../../compoonents/BlogCard/BlogCard';
import BlogSearch from '../../compoonents/BlogSearch/BlogSearch';
import SpecialBlog from '../../compoonents/SpecialBlog/SpecialBlog';
import './blogs.css'
const Blogs = () => {
    const blogs = [
    { name: '', id: 1 },
    { name: '', id: 2 },
    { name: '', id: 3 },
    { name: '', id: 4 },
    { name: '', id: 5 },
    { name: '', id: 6 },
]
    const specialBlog = [
    { title: 'blog title', id: 1 },
    { title: 'blog title', id: 2 },
    { title: 'blog title', id: 3 },
    { name: '', id: 4 },
    { name: '', id: 5 },
    { name: '', id: 6 },
]
    return (
        <div>
            <SpecialBlog specialBlog={specialBlog} ></SpecialBlog>
            <BlogSearch></BlogSearch>
            <div className="container">
                <div className="row">
                    {
                        blogs.map(blog => <BlogCard
                            key={blog.id}

                            blog={blog}
                        ></BlogCard>)
                    }
                </div>
            </div>
            <nav className='mt-5' aria-label="...">
                <ul className="pagination d-flex justify-content-center">
                    <li className="page-item disabled">
                        <a className="page-link">Previous</a>
                    </li>
                    <li className="page-item"><a class="page-link" href="#">1</a></li>
                    <li className="page-item active" aria-current="page">
                        <a className="page-link" href="#">2</a>
                    </li>
                    <li className="page-item"><a class="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>

            </nav>

        </div>
    );
};

export default Blogs;