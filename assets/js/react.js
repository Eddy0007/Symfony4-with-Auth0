require('../css/main.scss');

import React from 'react';

import ReactDom from 'react-dom';

class TestComponent extends React.Component {
    render(){
        return <p> Keep calm and code away </p>;
    }
}

ReactDom.render(<TestComponent/>, document.getElementById('app'));

