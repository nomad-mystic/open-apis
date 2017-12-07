import React from 'react';
import ReactDOM from 'react-dom';

// Styles 'SCSS'
import 'bootstrap/dist/js/bootstrap';
import './sass/main.scss';

// My Modules
import App from './components/App';


ReactDOM.render(
    <App/>,
    window.document.getElementById('root')
);
