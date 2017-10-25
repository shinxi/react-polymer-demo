import React from 'react';
import PropTypes from 'prop-types';
import { withReactWrapper } from 'utils/polymer';

const propTypes = {
  /**
   * Defines an colors in order that will be used for series.
   */
  seriesColorList: PropTypes.arrayOf(PropTypes.any),
  /**
   * Boolean switching when the domain(s) has(have) changed
   * 
   * Serves as a trigger for many elements to redraw
   */
  domainChanged: PropTypes.bool,
  /**
   * Type of spark - one of "line", "bar" or "winLoss".
   */
  type: PropTypes.string,
  /**
   * A JSON array of data that will be drawn in the spark.
   * Spark type 'line' requires data in the format `[{"x":0, "y":0},...]`.
   * Spark type 'bar' requires a single series of positive values in the format `[1,2,3]`.
   * Spark type 'winLoss' requires a single series of positive/negative values in the format `[1,-2,3]`.
   */
  data: PropTypes.arrayOf(PropTypes.any),
  /**
   * Whether the vis-spark should resize as window size is adjusted.
   */
  preventResize: PropTypes.bool,
  /**
   * Width of the spark.
   */
  width: PropTypes.string,
  /**
   * Height of the spark.
   */
  height: PropTypes.string,
  /**
   * 
   */
  disableGradient: PropTypes.bool,
};

const defaultProps = {
  seriesColorList: ["rgb(0,0,0)","rgb(75,75,75)","rgb(125,125,125)","rgb(200,200,200)"],
  domainChanged: null,
  type: "line",
  preventResize: false,
  width: "300",
  height: "50",
  disableGradient: false,
};

const events = [
  /**
   * Fired when the `domainChanged` property changes.
   */
  {
    name: 'domain-changed-changed',
    reactPropName: 'onDomainChangedChanged',
  },
];

const options = {
  tagname: 'px-vis-spark',
  bowerPath: 'px-vis-spark/px-vis-spark.html',
  events,
};

const ReactWrapper = withReactWrapper('px-vis-spark', options);

class VisSpark extends React.Component {
  render() {
    return <ReactWrapper {...this.props} />;
  }
}

VisSpark.propTypes = propTypes;
VisSpark.defaultProps = defaultProps;

export default VisSpark;
