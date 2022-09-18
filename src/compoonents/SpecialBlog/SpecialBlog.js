import React from 'react';
import './SpecialBlog.css'
const SpecialBlog = () => {
  return (
    <div className="container">
      <h2 className='most-famous-blog'>Most Famous Blogs</h2>
      <div className="row">
        <div className="col-md-6 col-sm-12 photo-frame">
         <div className='photo'>
          <img src={require('../../images/invictus.png')} alt="" />
         </div>
         <div className='photo-detail'>
          <h3>Title </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate veniam eligendi sapiente quam expedita alias obcaecati velit eveniet nostrum eos cum eaque repellendus tempore nisi atque quis vitae, est id.</p>
         </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={require('../../images/invictus.png')} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div><div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={require('../../images/invictus.png')} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SpecialBlog;