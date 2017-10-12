import React from 'react';
import PropTypes from 'prop-types';
import 'px-dropdown/px-dropdown.html';

class Dropdown extends React.Component {
  componentDidMount() {
    const { onSelectedChanged } = this.props;
    if (onSelectedChanged) {
      this.polymerElement.addEventListener('selected-changed', onSelectedChanged);
    }
  }

  render() {
    const { items, disabled } = this.props;
    return (
      <px-dropdown
        ref={ele => (this.polymerElement = ele)}
        items={JSON.stringify(items)}
        disabled={disabled}
        sort-mode="key"
        button-style="default"
        display-value="Select"
        disable-clear
      />
    );
  }
}

Dropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any),
  disabled: PropTypes.bool,
  onSelectedChanged: PropTypes.func,
};

Dropdown.defaultProps = {
  items: [],
  disabled: false,
};
export default Dropdown;
