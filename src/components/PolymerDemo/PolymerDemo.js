import React from 'react';
import Tree from 'components/Tree';
import Typeahead from 'components/Typeahead';
import Toggle from 'components/Toggle';
import Dropdown from 'components/Dropdown';
import AlertLabel from 'components/AlertLabel';
import BrandingBar from 'components/BrandingBar';
import Modal from 'components/Modal';
import Popover from 'components/Popover';
import ProgressBar from 'components/ProgressBar';
import Tile from 'components/Tile';
import ViewHeader from 'components/ViewHeader';
import typeaheadData from './typeahead.json';
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
  onTypeaheadInputChanged = event => {
    this.setState({ typeaheadValue: event.detail.value });
  };
  onToggleCheckChanged = event => {
    this.setState({ toggleCheckValue: event.detail.value });
  };
  onDropdownSelectedChanged = event => {
    if (!event.target.selected) {
      return;
    }
    this.setState({
      dropdownSelectedValue: event.target.items && event.target.items[event.target.selected].val,
    });
  };
  render() {
    return (
      <div className="polymer-demo">
        <h2>Polymer in React Demo</h2>
        <div>
          <h3>px-tree in React:</h3>
          <Tree items={treeItems} />
        </div>
        <div>
          <h3>px-typeahead in React: current value is {this.state.typeaheadValue}</h3>
          <Typeahead
            onInputValueChanged={this.onTypeaheadInputChanged}
            localCandidates={typeaheadData}
          />
        </div>
        <div>
          <h3>px-toggle in React: {`current value is ${this.state.toggleCheckValue}`}</h3>
          <Toggle checked onCheckedChanged={this.onToggleCheckChanged} />
        </div>
        <div>
          <h3>px-dropdown in React: {`current value is ${this.state.dropdownSelectedValue}`}</h3>
          <Dropdown items={dropdownItems} onSelectedChanged={this.onDropdownSelectedChanged} />
        </div>

        <div>
          <h3>px-alert-label in React:</h3>
          <AlertLabel label="Label text" type="important" />
          <AlertLabel type="warning" label="2" badge />
        </div>
        <div>
          <h3>px-branding-bar in React:</h3>
          <BrandingBar applicationTitle="Predix Design System" />
        </div>
        <div>
          <h3>px-modal in React:</h3>
          <Modal
            btnModalPositive="Submit"
            btnModalNegative="Cancel"
            modalHeading="Magna Adipiscing"
          >
            <button className="btn btn--primary modal-trigger">Open Modal</button>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </Modal>
        </div>
        <div>
          <h3>px-progress-bar in React:</h3>
          <ProgressBar value={20} min={0} max={100} />
        </div>
        <div>
          <h3>px-title in React:</h3>
          <Tile
            title="Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna."
            hoverable
          >
            <div slot="thumbnail" />
            <div slot="footer">Footer Content Here</div>
          </Tile>
        </div>

        <div>
          <h3>px-view-header in React:</h3>
          <ViewHeader title="Current View Title" subtitle="A subtitle describing the view.">
            <div id="left" className="actionable">
              Back
            </div>
            <div id="right" className="actionable">
              Next
            </div>
          </ViewHeader>
        </div>
        <div>
          <h3>px-popover in React:</h3>
          <Popover
            orientation="right"
            for="btn1"
            popoverTitle="This is a px-popover"
            popoverBody="Capable of displaying a longer body text than a tootip."
          />
          <button className="btn btn--tertiary" id="btn1" type="button" name="button">
            Click here
          </button>
        </div>
      </div>
    );
  }
}

export default PolymerDemo;
