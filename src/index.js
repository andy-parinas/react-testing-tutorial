import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App';
import Root from 'Root'

const app = <Root><App/></Root>

ReactDOM.render(app, document.getElementById("root"));