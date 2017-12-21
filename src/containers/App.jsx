import React from 'react';

import AsyncSelect from '../components/AsyncSelect';

import '../assets/style.scss';

export default class App extends React.Component {
  render() {

    return (
        <div>
            <h1>Hello World 2</h1>
            <AsyncSelect />
            <AsyncSelect />
        </div>
    );
  }
}