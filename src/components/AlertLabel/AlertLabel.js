import React from 'react';
import PropTypes from 'prop-types';
import 'px-alert-label/px-alert-label.html';
import { withReactWrapper } from 'utils/polymer';

const ReactWrapper = withReactWrapper('px-alert-label');

class AlertLabel extends React.Component {
  render() {
    return <ReactWrapper {...this.props} />;
  }
}

AlertLabel.propTypes = {
  /**
   * The type of alert label defines the visual styling.
Should be one of important, warning, error, information, healthy, or unknown.
   */
  type: PropTypes.string,
  /**
   * The text to display inside of the label. When the 'badge' configuration is used,
only one digit should be used for the label to indicate severity.
   */
  label: PropTypes.string,
  /**
   * If set to true, the label will appear as a triangle, diamond, square, pentagon, or circle
to indicate the severity of an alert, for instance.
   */
  badge: PropTypes.bool,
};

AlertLabel.defaultProps = {
};
export default AlertLabel;
