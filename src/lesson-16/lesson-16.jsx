import * as React from 'react';
import { render } from 'react-dom';

class AppComponent extends React.Component{
  render() {
    return <div>Hello world!</div>
  }
}

render(<AppComponent />, document.getElementById('root'));