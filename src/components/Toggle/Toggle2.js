import React from 'react';
import PropTypes from 'prop-types';
import 'px-toggle/px-toggle.html';
import { withReactWrapper } from 'utils/polymer';

const PredixToggle = withReactWrapper('px-toggle');

class Toggle extends React.Component {
  render() {
    return <PredixToggle {...this.props} />;
  }
}

Toggle.propTypes = {
  size: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onCheckedChanged: PropTypes.func,
  onValueChanged: PropTypes.func,
};

Toggle.defaultProps = {
  size: '', // regular/small/large/huge
  disabled: false,
  checked: false,
};
export default Toggle;
