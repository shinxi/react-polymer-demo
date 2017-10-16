import React from 'react';
import PropTypes from 'prop-types';
import 'px-overlay/px-overlay.html';
import { withReactWrapper } from 'utils/polymer';

const ReactWrapper = withReactWrapper('px-overlay');

class Overlay extends React.Component {
  render() {
    return <ReactWrapper {...this.props} />;
  }
}

Overlay.propTypes = {
};

Overlay.defaultProps = {
};
export default Overlay;
