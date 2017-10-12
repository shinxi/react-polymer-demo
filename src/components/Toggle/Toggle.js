import React from 'react';
import PropTypes from 'prop-types';
import 'px-toggle/px-toggle.html';

class Toggle extends React.Component {
  componentDidMount() {
    const { onCheckedChanged, onValueChanged } = this.props;
    if (onCheckedChanged) {
      this.polymerElement.addEventListener('checked-changed', onCheckedChanged);
    }
    if (onValueChanged) {
      this.polymerElement.addEventListener('value-changed', onValueChanged);
    }
  }

  render() {
    const { size, disabled, checked } = this.props;
    return (
      <px-toggle
        ref={ele => (this.polymerElement = ele)}
        size={size}
        checked={checked}
        disabled={disabled}
      />
    );
  }
}

Toggle.propTypes = {
  size: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onCheckedChanged: PropTypes.func,
  onValueChanged: PropTypes.func,
};

Toggle.defaultProps = {
  size: '', // regular/small/large/huge
  disabled: false,
  checked: false,
};
export default Toggle;
