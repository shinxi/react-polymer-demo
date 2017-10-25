import React from 'react';
import PropTypes from 'prop-types';
import { withReactWrapper } from 'utils/polymer';

const propTypes = {
  /**
   * (optional:  'px-{datetime}-range-panel')
   * 
   * The preset date/time ranges to be displayed.
   * 
   * ```
   *   [
   *    {
   *      "displayText": "Last 5 Minutes",
   *      "startDateTime": "2013-02-04T22:44:30.652Z",
   *      "endDateTime": "2013-02-04T22:49:30.652Z"
   *    },
   *    {
   *      "displayText": "Last 12 Hours",
   *      "startDateTime": "2013-02-04T10:44:30.652Z",
   *      "endDateTime": "2013-02-04T22:49:30.652Z"
   *    }
   *   ]
   * ```
   */
  presetRanges: PropTypes.objectOf(PropTypes.any),
  /**
   * (required: 'px-{datetime}-range-{picker}')
   * 
   * This is the object you use to instantiate px-datetime components. You can retrieve the object through 2-way data-binding.
   * 
   * Formated as ISO8601 strings
   * ```
   * {
   *    "from": "2013-01-07T22:44:30.652Z",
   *    "to" : "2013-02-04T22:44:30.652Z"
   * }
   * ```
   * 
   * This object which will be changed when the user Submits their new selected range.
   */
  range: PropTypes.objectOf(PropTypes.any),
  /**
   * Moment object used as the base for the calendar (to decide which month to display)
   */
  baseDate: PropTypes.objectOf(PropTypes.any),
  /**
   * What the calendar should display:
   *  - 'day': calendar displays all days of a month
   *  - 'month': calendar displays all months in a year
   *  - 'year': calendar displays a 10 years range
   */
  displayMode: PropTypes.string,
  /**
   * (optional)
   * 
   * By default, the calendar will allow the user to select a date range by clicking on two
   * different dates. If this property is set, the user will only be able to select a single date
   * each time she clicks.
   * 
   * If this property is set, then the 'singleSelectedDate' property will reflect the selected date. Otherwise
   * the 'range' property should be observed and will reflect the selected date range.
   */
  preventRangeSelection: PropTypes.bool,
  /**
   * (optional)
   * 
   * Reflects the selected date in ISO8601 string if the calendar is preventing range selection.
   * Otherwise the 'range' property should be observed.
   */
  singleSelectedDate: PropTypes.string,
  /**
   * (optional)
   * 
   * Hides the 'previous' button on the calendar.
   */
  hidePreviousButton: PropTypes.bool,
  /**
   * (optional)
   * 
   * Hides the 'next' button on the calendar.
   */
  hideNextButton: PropTypes.bool,
  /**
   * (optional)
   * 
   * If set, allows the calendar picker to shrink rather than have a constant size.
   * Typically the height would shrink when choosing months or years
   */
  shrink: PropTypes.bool,
  /**
   * Whether the calendar picker is currently at the selection level: showing days
   * in day mode, choosing month in month mode or showing years in year mode.
   */
  isAtSelectionLevel: PropTypes.bool,
  /**
   * 
   */
  waitToFire: PropTypes.bool,
};

const defaultProps = {
  displayMode: 'day',
  preventRangeSelection: false,
  singleSelectedDate: '',
  hidePreviousButton: false,
  hideNextButton: false,
  shrink: false,
  waitToFire: false,
};

const events = [
  /**
   * px-datetime-range-submitted
   */
  {
    name: 'px-datetime-range-submitted',
    reactPropName: 'onPxDatetimeRangeSubmitted',
  },
  /**
   * Fired when the `range` property changes.
   */
  {
    name: 'range-changed',
    reactPropName: 'onRangeChanged',
  },
  /**
   * px-calendar-range-selected
   */
  {
    name: 'px-calendar-range-selected',
    reactPropName: 'onPxCalendarRangeSelected',
  },
  /**
   * px-calendar-selected
   */
  {
    name: 'px-calendar-selected',
    reactPropName: 'onPxCalendarSelected',
  },
  /**
   * Fired when the `baseDate` property changes.
   */
  {
    name: 'base-date-changed',
    reactPropName: 'onBaseDateChanged',
  },
];

const options = {
  tagname: 'px-calendar-picker',
  bowerPath: 'px-calendar-picker/px-calendar-picker.html',
  events,
};

const ReactWrapper = withReactWrapper('px-calendar-picker', options);

class CalendarPicker extends React.Component {
  render() {
    return <ReactWrapper {...this.props} />;
  }
}

CalendarPicker.propTypes = propTypes;
CalendarPicker.defaultProps = defaultProps;

export default CalendarPicker;
