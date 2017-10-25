import React from 'react';
import PropTypes from 'prop-types';
import { withReactWrapper } from 'utils/polymer';

const propTypes = {
  /**
   * Can be set to show the timezone in the field. Can have 2 values:
   *  'dropdown': shows the time zone as a dropdown which the user can use to
   * select a different time zone. Only contains a subset of all timezones
   *  'extendedDropdown': shows the time zone as a dropdown which the user can use to
   * select a different time zone. Contains all existing timezones (588)
   *  'text': shows the time zone as text, non editable
   *  'abbreviatedText': shows the time zone as an abbreviated text, non editable (such as PST, EST...)
   */
  showTimeZone: PropTypes.string,
  /**
   * Whether this date picker should allow to pick time as well.
   */
  hideTime: PropTypes.bool,
  /**
   * Moment format used for the date
   */
  dateFormat: PropTypes.string,
  /**
   * Moment format used for the time
   */
  timeFormat: PropTypes.string,
  /**
   * List of key/values to be included for translating this component
   */
  resources: PropTypes.objectOf(PropTypes.any),
};

const defaultProps = {
  showTimeZone: "",
  hideTime: false,
  dateFormat: "MM/DD/YYYY",
  timeFormat: "HH:mm A",
  resources: {"en":{"Today":"Today"}},
};

const options = {
  tagname: 'px-datetime-picker',
  bowerPath: 'px-datetime-picker/px-datetime-picker.html',
};

const ReactWrapper = withReactWrapper('px-datetime-picker', options);

class DatetimePicker extends React.Component {
  render() {
    return <ReactWrapper {...this.props} />;
  }
}

DatetimePicker.propTypes = propTypes;
DatetimePicker.defaultProps = defaultProps;

export default DatetimePicker;
