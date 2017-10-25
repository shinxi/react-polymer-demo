import React from 'react';
import PropTypes from 'prop-types';
import { withReactWrapper } from 'utils/polymer';

const propTypes = {
};

const options = {
  tagname: 'px-overlay',
  bowerPath: 'px-overlay/px-overlay.html',
};

const ReactWrapper = withReactWrapper('px-overlay', options);

class Overlay extends React.Component {
  render() {
    return <ReactWrapper {...this.props} />;
  }
}

Overlay.propTypes = propTypes;

export default Overlay;
