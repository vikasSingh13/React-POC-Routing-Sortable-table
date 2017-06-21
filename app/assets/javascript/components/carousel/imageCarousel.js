var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;

var DemoCarousel = React.createClass({
    render() {
        return (
            <div className="carousel-wrap">
                <Carousel showArrows={false} autoPlay={true}>
                    <div>
                        <img src="https://image.ibb.co/cyEOk5/react_slider_img.png" alt="react-img" />
                        <p className="legend">React is Awesome</p>
                    </div>
                    <div>
                        <img src="https://image.ibb.co/nbh4sk/bootstrap_slide_img.jpg" alt="bootstrap-img" />
                        <p className="legend">The best CSS framework to work</p>
                    </div>
                    <div>
                        <img src="https://cdn.scotch.io/scotchy-uploads/2015/03/aesthetic-sass-architecture-style-organization.png" alt="sass" />
                        <p className="legend">Beautify your CSS</p>
                    </div>
                </Carousel>
            </div>
        );
    }
});

export default DemoCarousel;