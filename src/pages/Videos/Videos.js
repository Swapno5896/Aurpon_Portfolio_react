import React from 'react';

const Videos = () => {
    const videoUrls = [
        {link:'https://www.youtube.com/embed/1WYoVJe4eVU'},
        {link:'https://www.youtube.com/embed/-BWpPD7Mj34'},
        {link:'https://www.youtube.com/embed/1WYoVJe4eVU'},
        {link:'https://www.youtube.com/embed/1WYoVJe4eVU'},
    ]
    return (
        <div className='container mt-5  mb-5 p-5'>
            <div className="row">
                {
                    videoUrls.map(videoUrl=> <div className='col-md-6 mt-4'>
                         <iframe width="560" height="315" src={videoUrl.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>)
                }
            </div>
         
           
        </div>
    );
};

export default Videos;