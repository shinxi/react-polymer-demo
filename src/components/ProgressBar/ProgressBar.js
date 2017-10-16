import React from 'react';
import PropTypes from 'prop-types';
import 'px-progress-bar/px-progress-bar.html';
import { withReactWrapper } from 'utils/polymer';

const ReactWrapper = withReactWrapper('px-progress-bar');

class ProgressBar extends React.Component {
  render() {
    return <ReactWrapper {...this.props} />;
  }
}

ProgressBar.propTypes = {
  /**
   * Represents the value (from 0 to 100) of the percentage progress.
   */
  value: PropTypes.number,
  /**
   * Flag for whether to animate the progress bar. Set to true for an
indeterminate or infinite progress bar.
   */
  infinite: PropTypes.bool,
  /**
   * The minimum value for the progress bar, used to calculate the amount
that is filled in.
   */
  min: PropTypes.number,
  /**
   * The maximum value for the progress bar, used to calculate the amount
that is filled in.
   */
  max: PropTypes.number,
};

ProgressBar.defaultProps = {
  value: 0,
  infinite: false,
  min: 0,
  max: 100,
};
export default ProgressBar;
