import React from 'react';
import PropTypes from 'prop-types';
import { withReactWrapper } from 'utils/polymer';

const propTypes = {
  /**
   * The type of alert label defines the visual styling.
   * Should be one of important, warning, error, information, healthy, or unknown.
   */
  type: PropTypes.string,
  /**
   * The text to display inside of the label. When the 'badge' configuration is used,
   * only one digit should be used for the label to indicate severity.
   */
  label: PropTypes.string,
  /**
   * If set to true, the label will appear as a triangle, diamond, square, pentagon, or circle
   * to indicate the severity of an alert, for instance.
   */
  badge: PropTypes.bool,
};

const defaultProps = {
  badge: false,
};

const options = {
  tagname: 'px-alert-label',
  bowerPath: 'px-alert-label/px-alert-label.html',
};

const ReactWrapper = withReactWrapper('px-alert-label', options);

class AlertLabel extends React.Component {
  render() {
    return <ReactWrapper {...this.props} />;
  }
}

AlertLabel.propTypes = propTypes;
AlertLabel.defaultProps = defaultProps;

export default AlertLabel;
