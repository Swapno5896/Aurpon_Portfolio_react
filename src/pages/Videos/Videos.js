import React from 'react';

const Videos = () => {
    const videoUrls = [
        { link: 'https://www.youtube.com/embed/1WYoVJe4eVU' },
        { link: 'https://www.youtube.com/embed/-BWpPD7Mj34' },
        { link: 'https://www.youtube.com/embed/1WYoVJe4eVU' },
        { link: 'https://www.youtube.com/embed/1WYoVJe4eVU' },
    ]
    return (
        <div className='container mt-5  mb-5 p-5'>
            <div className="row">
                {
                    videoUrls.map(videoUrl => <div className='col-md-6 mt-4'>
                        <iframe width="560" height="315" src={videoUrl.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>)
                }
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

export default Videos;