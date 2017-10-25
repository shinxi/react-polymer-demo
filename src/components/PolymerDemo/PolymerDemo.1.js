import React from 'react';
import Dropdown from 'components/Dropdown';
import dropdownItems from './dropdownItems.json';
import './PolymerDemo.scss';

class PolymerDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownSelectedValue: '',
    };
  }
  onDropdownSelectedChanged = (event) => {
    if (!event.target || !event.target.selected) {
      return;
    }
    const selectedItem = event.target.items.filter(item => item.key === event.target.selected)[0];
    this.setState({
      dropdownSelectedValue: selectedItem.val,
    });
  };
  render() {
    return (
      <div className="polymer-demo">
        <h2>Polymer Demo</h2>
        <div>
          <h3>px-dropdown in React: {`current value is ${this.state.dropdownSelectedValue}`}</h3>
          <Dropdown items={dropdownItems} onSelectedChanged={this.onDropdownSelectedChanged} />
        </div>
      </div>
    );
  }
}

export default PolymerDemo;
