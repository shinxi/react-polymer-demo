import React from 'react';
import Tree from 'components/Tree';
import Typeahead from 'components/Typeahead';
import Toggle from 'components/Toggle';
import Dropdown from 'components/Dropdown';
import treeItems from './treeMeta.json';
import dropdownItems from './dropdownItems.json';
import './PolymerDemo.scss';

class PolymerDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeaheadValue: '',
      toggleCheckValue: '',
      dropdownSelectedValue: '',
    };
  }
  onTypeaheadInputChanged = (event) => {
    this.setState({ typeaheadValue: event.detail.value });
  };
  onToggleCheckChanged = (event) => {
    this.setState({ toggleCheckValue: event.detail.value });
  };
  onDropdownSelectedChanged = (event) => {
    this.setState({
      dropdownSelectedValue: event.target.items && event.target.items[event.target.selected].val,
    });
  };
  render() {
    return (
      <div className="polymer-demo">
        <h3>Polymer Demo</h3>
        <div>
          <h3>Predix Tree in React:</h3>
          <Tree items={treeItems} />
        </div>
        <div>
          <h3>Predix Typeahead in React: current value is {this.state.typeaheadValue}</h3>
          <Typeahead onInputValueChanged={this.onTypeaheadInputChanged} />
        </div>
        <div>
          <h3>Predix toggle in React: {`current value is ${this.state.toggleCheckValue}`}</h3>
          <Toggle checked onCheckedChanged={this.onToggleCheckChanged} />
        </div>
        <div>
          <h3>
            Predix dropdown in React: {`current value is ${this.state.dropdownSelectedValue}`}
          </h3>
          <Dropdown items={dropdownItems} onSelectedChanged={this.onDropdownSelectedChanged} />
        </div>
      </div>
    );
  }
}

export default PolymerDemo;
