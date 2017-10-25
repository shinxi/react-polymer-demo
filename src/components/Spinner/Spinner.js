import React from 'react';
import PropTypes from 'prop-types';
import { withReactWrapper } from 'utils/polymer';

const propTypes = {
  /**
   * This attribute hides the spinner
   */
  finished: PropTypes.bool,
  /**
   * The size, in pixels, of the spinner.
   * Refers to the inner dimension of the circle - no units necessary.
   */
  size: PropTypes.number,
};

const defaultProps = {
  finished: false,
  size: 80,
};

const events = [
  /**
   * Fired when the `size` property changes.
   */
  {
    name: 'size-changed',
    reactPropName: 'onSizeChanged',
  },
];

const options = {
  tagname: 'px-spinner',
  bowerPath: 'px-spinner/px-spinner.html',
  events,
};

const ReactWrapper = withReactWrapper('px-spinner', options);

class Spinner extends React.Component {
  render() {
    return <ReactWrapper {...this.props} />;
  }
}

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner;
