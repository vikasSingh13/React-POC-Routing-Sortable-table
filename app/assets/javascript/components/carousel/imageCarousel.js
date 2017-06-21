var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;

var DemoCarousel = React.createClass({
    render() {
        return (
            <div className="carousel-wrap">
                <Carousel showArrows={false} autoPlay={true}>
                    <div>
                        <img src="https://maxlibin.com/wp-content/uploads/2017/01/46e215cd-2eb3-4cf0-b699-713977a2b644.png" alt="react-img" />
                        <p className="legend">React is Awesome</p>
                    </div>
                    <div>
                        <img src="http://skeeterz71.com/wp-content/uploads/2014/09/bootstrap.jpg" alt="bootstrap-img" />
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