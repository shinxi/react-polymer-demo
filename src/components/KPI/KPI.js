import React from 'react';
import PropTypes from 'prop-types';
import { withReactWrapper } from 'utils/polymer';

const propTypes = {
  /**
   * Title of KPI.
   */
  title: PropTypes.string,
  /**
   * Value of KPI.
   */
  value: PropTypes.string,
  /**
   * Unit of Measure for KPI (e.g. %, USD, etc).
   */
  uom: PropTypes.string,
  /**
   * Color to display the status icon.
   */
  statusColor: PropTypes.string,
  /**
   * Icon to display for the status. See Predix UI iconography documentation for valid names.
   */
  statusIcon: PropTypes.string,
  /**
   * Supporting text to display next to the status icon (e.g. if the icon is an arrow, "12%" to indicate an increase).
   */
  statusLabel: PropTypes.string,
  /**
   * The chart type to display below the KPI. One of "line", "bar, "winLoss". Spark type is dependent on your data structure; see px-vis-spark for more information.
   */
  sparkType: PropTypes.string,
  /**
   * The data to populate your chart. See px-vis and px-vis-spark for more information.
   */
  sparkData: PropTypes.arrayOf(PropTypes.any),
};

const options = {
  tagname: 'px-kpi',
  bowerPath: 'px-kpi/px-kpi.html',
};

const ReactWrapper = withReactWrapper('px-kpi', options);

class Kpi extends React.Component {
  render() {
    return <ReactWrapper {...this.props} />;
  }
}

Kpi.propTypes = propTypes;

export default Kpi;
