require('../stylesheets/base.sass');
require('../stylesheets/carousel.sass');
require('../stylesheets/style.sass');

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './routes';

ReactDOM.render(<Root />, document.getElementById('main'));
