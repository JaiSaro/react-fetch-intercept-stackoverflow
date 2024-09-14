import React from 'react';
import './style.css';
import { AuthInterceptor } from './AuthInterceptor';

export default class App extends React.Component {
  componentDidMount() {
    AuthInterceptor();
    fetch('http://google.com', {
      headers: {
        'Content-type': 'application/json',
      },
    });
  }
  render() {
    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}
