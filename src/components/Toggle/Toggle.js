import React from 'react';
import PropTypes from 'prop-types';
import 'px-toggle/px-toggle.html';
import { withReactWrapper } from 'utils/polymer';

const ReactWrapper = withReactWrapper('px-toggle');

class Toggle extends React.Component {
  render() {
    return <ReactWrapper {...this.props} />;
  }
}

Toggle.propTypes = {
  /**
   * The name of this element.
   */
  name: PropTypes.string,
  /**
   * Overriden from Polymer.IronFormElementBehavior
   */
  value: PropTypes.string,
  /**
   * Set to true to mark the input as required. If used in a form, a
custom element that uses this behavior should also use
Polymer.IronValidatableBehavior and define a custom validation method.
Otherwise, a `required` element will always be considered valid.
It's also strongly recommended to provide a visual style for the element
when its value is invalid.
   */
  required: PropTypes.bool,
  /**
   * Name of the validator to use.
   */
  validator: PropTypes.string,
  /**
   * True if the last call to `validate` is invalid.
   */
  invalid: PropTypes.bool,
  /**
   * Gets or sets the state, `true` is checked and `false` is unchecked.
   */
  checked: PropTypes.bool,
  /**
   * If true, the button toggles the active state with each tap or press
of the spacebar.
   */
  toggles: PropTypes.bool,
  /**
   * 
   */
  size: PropTypes.string,
  /**
   * 
   */
  disabled: PropTypes.bool,
};

Toggle.defaultProps = {
};
export default Toggle;
