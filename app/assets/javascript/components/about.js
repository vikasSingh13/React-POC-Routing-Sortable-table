import React, { Component } from 'react';

class about extends Component {
  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1>Technologies and their super-powers</h1>
        </div>

        <div className="row">
          <div className="col-md-4 col-sm-6 col-lg-4">
            <div className="inner-wrap">
              <div className="img-wrap">
                <img src="https://www.amcharts.com/wp-content/uploads/2016/08/react.png" alt="react-logo" />
              </div>
              <div className="desc-wrap">
                <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-lg-4">
            <div className="inner-wrap">
              <div className="img-wrap">
                <img src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-card.png" alt="bootstarp-logo" />
              </div>
              <div className="desc-wrap">
                <p>Bootstrap is a free and open-source front-end web framework for designing websites and web applications. It contains HTML- and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-lg-4">
            <div className="inner-wrap">
              <div className="img-wrap">
                <img src="http://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png" alt="sass-logo" />
              </div>
              <div className="desc-wrap">
                <p>The indented syntax is a metalanguage. SCSS is a nested metalanguage, as valid CSS is valid SCSS with the same semantics. Sass supports integration with the Firefox extension Firebug. SassScript provides the following mechanisms: variables, nesting, mixins, and selector inheritance.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-lg-4">
            <div className="inner-wrap js-inner-wrap">
              <div className="img-wrap">
                <img src="https://www.javatpoint.com/images/javascript/javascript_logo.png" alt="js-logo" />
              </div>
              <div className="desc-wrap">
                <p>JavaScript, often abbreviated as "JS", is a high-level, dynamic, untyped, interpreted run-time language. It has been standardized in the ECMAScript language specification.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-lg-4">
            <div className="inner-wrap js-inner-wrap">
              <div className="img-wrap">
                <img src="https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png" alt="html-logo" />
              </div>
              <div className="desc-wrap">
                <p>HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and current version of the HTML standard.</p>
                <p>Important Features:</p>
                <ul>
                  <li>HTML Geolocation</li>
                  <li>HTML Drag and Drop</li>
                  <li>HTML Local Storage</li>
                  <li>HTML Application Cache</li>
                  <li>HTML Web Workers</li>
                  <li>HTML SSE</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-lg-4">
            <div className="inner-wrap js-inner-wrap">
              <div className="img-wrap">
                <img src="http://www.logotypes101.com/logos/194/830812341256B99B32E1A9F242BB9F5F/css3logo.png" alt="css3-logo" />
              </div>
              <div className="desc-wrap">
                <p>CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1. It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default about;
