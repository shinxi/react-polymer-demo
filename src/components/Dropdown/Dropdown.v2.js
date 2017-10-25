import React from 'react';
import PropTypes from 'prop-types';

const loadedBowerComponents = [];
function loadBowerComponent(bowerPath, componentName) {
  if (loadedBowerComponents.indexOf(componentName) > -1) {
    return;
  }
  const link = document.createElement('link');
  link.rel = 'import';
  link.href = `bower_components/${bowerPath}`;
  document.head.appendChild(link);
  loadedBowerComponents.push(componentName);
}

loadBowerComponent('px-dropdown');

const propTypes = {
  /**
   * Style for the button that invokes the dropdown.
   * One of 'default','bare','bare--primary', 'tertiary', or 'icon'.
   */
  buttonStyle: PropTypes.string,
  /**
   * The placeholder text to display in the dropdown. If the
   * selected value(s) are cleared out, the displayValue will be
   * replaced in the dropdown.
   */
  displayValue: PropTypes.string,
  /**
   * Whether the dropdown should be disabled and non-interactive.
   */
  disabled: PropTypes.bool,
  /**
   * If set to true, users are unable to clear out the dropdown
   * once a selection has been made. Useful for required single-select
   * dropdowns where an empty state would be undesirable. Not recommended
   * for multi-select dropdowns, as it means the user will simply lose the ability
   * to quickly deselect all checked options (there is currently no mechanism
   * which requires a user to select at least one option).
   */
  disableClear: PropTypes.bool,
  /**
   * An array that contains the list of items which show up in the dropdown.
   * Each item can either be a simple string, or an object consisting of:
   * * 'key' - a unique identifier (number or string)
   * * 'val' - the actual text that is displayed
   * * 'disabled' - whether the item should be disabled for selection (optional)
   * * 'selected' - whether the item should be selected at instantiation (optional)
   * * 'icon' - an icon name from the px-icon-set to display next to the item (optional)
   * * 'color' - the color to use for the icon - if not specified, the default 
   * text colors will be used (optional)
   * 
   * Note: if you specify more than one item as `selected`, but `multi` is not enabled,
   * only the *first* selected item will be chosen. See also `clearSelectionsOnChange`.
   */
  items: PropTypes.arrayOf(PropTypes.any),
  onSelectedChanged: PropTypes.func,
};

const defaultProps = {
  displayValue: 'Select',
  disableClear: false,
  items: [],
  buttonStyle: 'default',
  disabled: false,
};

class Dropdown extends React.Component {
  componentDidMount() {
    const { onSelectedChanged } = this.props;
    if (onSelectedChanged) {
      this.polymerElement.addEventListener('selected-changed', onSelectedChanged);
    }
  }

  render() {
    const { items, disabled, displayValue, buttonStyle, disableClear } = this.props;
    const newProps = {
      items: JSON.stringify(items),
      'button-style': buttonStyle,
      'display-value': displayValue,
    };
    if (disabled) {
      newProps.disabled = true;
    }
    if (disableClear) {
      newProps.disableClear = true;
    }
    return <px-dropdown ref={ele => (this.polymerElement = ele)} {...newProps} />;
  }
}

Dropdown.propTypes = propTypes;

Dropdown.defaultProps = defaultProps;
export default Dropdown;
