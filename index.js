import _logger from 'cuteLogger';
import React from 'react';
import {render} from 'react-dom';
const logger = new _logger('client', 'index');

const App = React.createClass({
  render() {
    return (
      <div>You can modify this content, and see changes in browser in time</div>
    );
  }
});

render(<App />, document.getElementById('root'));

debug('start client app success!');
