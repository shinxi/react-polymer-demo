import React from 'react';
import PropTypes from 'prop-types';
import { withReactWrapper } from 'utils/polymer';

const propTypes = {
  /**
   * Modal id string.
   */
  modalId: PropTypes.string,
  /**
   * Header text for the modal window.
   */
  modalHeading: PropTypes.string,
  /**
   * Text for button with positive action on modal.
   */
  btnModalPositive: PropTypes.string,
  /**
   * Text for button with negative action on modal.
   */
  btnModalNegative: PropTypes.string,
  /**
   * Name of the event that will be raised when the positive modal button is clicked.
   */
  btnModalPositiveClickedEventName: PropTypes.string,
  /**
   * Name of the event that will be raised when the negative modal button is clicked.
   */
  btnModalNegativeClickedEventName: PropTypes.string,
  /**
   * Flag to indicate if the positive button should be disabled within the modal.
   */
  btnModalPositiveDisabled: PropTypes.bool,
};

const defaultProps = {
  modalId: "myModal",
  btnModalPositiveClickedEventName: "btnModalPositiveClicked",
  btnModalNegativeClickedEventName: "btnModalNegativeClicked",
  btnModalPositiveDisabled: false,
};

const options = {
  tagname: 'px-modal',
  bowerPath: 'px-modal/px-modal.html',
};

const ReactWrapper = withReactWrapper('px-modal', options);

class Modal extends React.Component {
  render() {
    return <ReactWrapper {...this.props} />;
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
