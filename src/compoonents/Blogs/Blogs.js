import React from 'react';
import BlogCard from '../BlogCard/BlogCard';
import './Blogs.css'
const Blogs = () => {
    const blogs = [
        { title: ' ksdl lkd slkd', detail: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur maxime obcaecati vitae eligendi commodi corporis necessitatibus. Nulla ratione perspiciatis vel nemo iusto, veniam aspernatur molestiae similique hic. Qui, laudantium", imglink: '../../images/invictus.png' }, { title: ' ksdl lkd slkd', detail: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur maxime obcaecati vitae eligendi commodi corporis necessitatibus. Nulla ratione perspiciatis vel nemo iusto, veniam aspernatur molestiae similique hic. Qui, laudantium", imglink: '../../images/invictus.png' }, { title: ' ksdl lkd slkd', detail: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur maxime obcaecati vitae eligendi commodi corporis necessitatibus. Nulla ratione perspiciatis vel nemo iusto, veniam aspernatur molestiae similique hic. Qui, laudantium", imglink: '../../images/invictus.png' },
    ]
    return (
        <div className=' blog-container'>
            <div className='d-flex justify-content-center'>
                <div className="container row">
                    {
                        blogs.map(blog=><BlogCard></BlogCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;