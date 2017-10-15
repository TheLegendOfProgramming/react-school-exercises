import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ListDemo from './ListDemo'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <ListDemo numbers={[1, 2, 3, 4, 5]}/>, document.getElementById('root'));
registerServiceWorker();
