import React from 'react';
import './BlogSearch.css'
const BlogSearch = () => {
    return (
        <div className='container blogSearch-container'>
            <input className='blogSearch-input form-control ' se type="text" placeholder="Search Blog" aria-label="default input example"></input>
            <div className="serch-options">
                <span>All(10)</span>
                <span>IELTS(3)</span>
                <span>SAT(2)</span>
                <span>University(3)</span>
                <span>Visa(1)</span>
                <span>Pasport(0)</span>
                <br />
                <br />
                <span>Carrier In Canada(0)</span>
            </div>
        </div>
    );
};

export default BlogSearch;