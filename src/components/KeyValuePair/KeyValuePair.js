import React from 'react';
import PropTypes from 'prop-types';
import { withReactWrapper } from 'utils/polymer';

const propTypes = {
  /**
   * The `key` of the key-value pair
   */
  key: PropTypes.string,
  /**
   * The `value` of the key-value pair
   */
  value: PropTypes.string,
  /**
   * The `unit of measure` for the value
   */
  uom: PropTypes.string,
  /**
   * The display size of the `value` in the key-value pair
   */
  size: PropTypes.string,
};

const options = {
  tagname: 'px-key-value-pair',
  bowerPath: 'px-key-value-pair/px-key-value-pair.html',
};

const ReactWrapper = withReactWrapper('px-key-value-pair', options);

class KeyValuePair extends React.Component {
  render() {
    return <ReactWrapper {...this.props} />;
  }
}

KeyValuePair.propTypes = propTypes;

export default KeyValuePair;
