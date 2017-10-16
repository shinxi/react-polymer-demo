import React from 'react';
import PropTypes from 'prop-types';
import 'px-dropdown/px-dropdown.html';
import { withReactWrapper } from 'utils/polymer';

const propsNeedStrinify = ['items', 'selectedValues', 'selectedItems'];
const ReactWrapper = withReactWrapper('px-dropdown', propsNeedStrinify);

class Dropdown extends React.Component {
  render() {
    return <ReactWrapper {...this.props} />;
  }
}

Dropdown.propTypes = {
  /**
   * A flag which reflects if the dropdown trigger has been clicked or not.
   */
  opened: PropTypes.bool,
  /**
   * A flag which reflects whether the dropdown is being hovered over.
   */
  hover: PropTypes.bool,
  /**
   * Returns the currently focused item in the dropdown list.
   */
  focusedItem: PropTypes.objectOf(PropTypes.any),
  /**
   * Whether or not to hide the chevron icon from the dropdown.
   */
  hideChevron: PropTypes.bool,
  /**
   * A CSS selector which specifies the bounding target the dropdown will be
displayed within. Defaults to `window`.
   */
  boundTarget: PropTypes.string,
  /**
   * Whether the dropdown will close when a user clicks
outside of it. Set to true to prevent dropdown from closing.
   */
  preventCloseOnOutsideClick: PropTypes.bool,
  /**
   * The placeholder text to display in the dropdown. If the
selected value(s) are cleared out, the displayValue will be
replaced in the dropdown.
   */
  displayValue: PropTypes.string,
  /**
   * If set to true, users are unable to clear out the dropdown
once a selection has been made. Useful for required single-select
dropdowns where an empty state would be undesirable. Not recommended
for multi-select dropdowns, as it means the user will simply lose the ability
to quickly deselect all checked options (there is currently no mechanism
which requires a user to select at least one option).
   */
  disableClear: PropTypes.bool,
  /**
   * An array that contains the list of items which show up in the dropdown.
Each item can either be a simple string, or an object consisting of:
* 'key' - a unique identifier (number or string)
* 'val' - the actual text that is displayed
* 'disabled' - whether the item should be disabled for selection (optional)
* 'selected' - whether the item should be selected at instantiation (optional)
* 'icon' - an icon name from the px-icon-set to display next to the item (optional)
* 'color' - the color to use for the icon - if not specified, 
the default text colors will be used (optional)

Note: if you specify more than one item as `selected`, but `multi` is not enabled,
only the *first* selected item will be chosen. See also `clearSelectionsOnChange`.
   */
  items: PropTypes.arrayOf(PropTypes.any),
  /**
   * If set to true, multiple values can be selected in the dropdown.
Selected values are reflected in the `selectedValues` property.
If set to false, a single selected value is reflected in `selected`.
   */
  multi: PropTypes.bool,
  /**
   * Which property of each dropdown item will be used to get/set
the selected items - should be one of "key" or "val".
   */
  selectBy: PropTypes.string,
  /**
   * Gets or sets the selected item when `multi` is false.
Will either be a single key or value based on `selectBy`.
   */
  selected: PropTypes.string,
  /**
   * Gets or sets the selected items when `multi` is true.
Will either be an array of keys or values based on `selectBy`.
   */
  selectedValues: PropTypes.arrayOf(PropTypes.any),
  /**
   * A read-only array of the selected `<div>` elements in the dropdown.
   */
  selectedItems: PropTypes.arrayOf(PropTypes.any),
  /**
   * By default, the dropdown will constrain scrolling on the page to
itself when opened. Set to true in order to allow scrolling of
the page while the dropdown is open.
   */
  allowOutsideScroll: PropTypes.bool,
  /**
   * Style for the button that invokes the dropdown.
One of 'default','bare','bare--primary', 'tertiary', or 'icon'.
   */
  buttonStyle: PropTypes.string,
  /**
   * Whether the dropdown should be disabled and non-interactive.
   */
  disabled: PropTypes.bool,
  /**
   * If true, the dropdown will include a search box, whereby the
dropdown items can be filtered with a search term.
   */
  searchMode: PropTypes.bool,
  /**
   * The value of the search box, used for filtering the dropdown
items when searchMode is true.
   */
  searchTerm: PropTypes.string,
  /**
   * What to sort the dropdown items by - one of "key" or "val".
By default, the items will be displayed in the order they are
passed into the component.
   */
  sortMode: PropTypes.string,
  /**
   * If set to true, the display-value will always show up in the
invoking button of the dropdown. Useful in cases like the
px-data-table, where "Show/Hide Columns" should always appear.
   */
  hideSelected: PropTypes.bool,
  /**
   * If buttonStyle is set to 'icon' this property will dictate
which icon will be displayed inside of the dropdown button.
The `displayValue`, selected values, and chevron will not be displayed.
Perfect for icon-invoked menus. The value of this property should
be a valid px-icon name, e.g. 'px-utl:app-settings'
   */
  icon: PropTypes.string,
  /**
   * Set this property if you would like the `selected` and `selectedValues`
properties to be cleared whenever mutations are made to the `items` array.
   */
  clearSelectionsOnChange: PropTypes.bool,
};

Dropdown.defaultProps = {};
export default Dropdown;
