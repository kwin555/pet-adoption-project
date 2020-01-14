import React from 'react';

class Carousel extends React.Component {
    state = {
        photos: [],
        active: 0
    };

    render () {
        const {photos, active} = this.state;

        return (
            <div className = "carousel">
                <img src={photos[active]} alt="animal" />
                <div className="carousel-smaller">
                    {photos.map((photo, idx) => (
                       <img
                        key={photo}
                        data-index = {index}
                        src={photo}
                        className={active ==}
                       /> 
                    ))}
                </div>                
            </div>
        );
    }
}