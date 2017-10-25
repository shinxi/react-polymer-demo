import React from 'react';
import PropTypes from 'prop-types';
import { withReactWrapper } from 'utils/polymer';

const propTypes = {
  /**
   * Sets disabled on the input element.
   */
  disabled: PropTypes.bool,
  /**
   * The placeholder for the input element.
   */
  placeholder: PropTypes.string,
  /**
   * The search candidates from local data model.
   */
  localCandidates: PropTypes.arrayOf(PropTypes.any),
  /**
   * Url for a pre-fetched list in json format for the list of suggestion candidates.
   * The response should be an array - for example: ["a","b"]
   */
  prefetchUrl: PropTypes.string,
  /**
   * Maximum number of suggestions for remote urls
   */
  maxSuggestions: PropTypes.number,
  /**
   * Remote url to perform a search using the value in the input. The input value will be passed in as url parameter. The placeholder should be %QUERY.
   */
  remoteUrl: PropTypes.string,
  /**
   * A boolean property to indicate if a search happens with a remote Url.
   * Must be used together with remoteUrl.
   */
  remoteUrlSearching: PropTypes.bool,
  /**
   * The currently selected value of the input.
   */
  value: PropTypes.string,
  /**
   * The current value of the input while the user is searching.
   */
  inputValue: PropTypes.string,
};

const defaultProps = {
  disabled: false,
  placeholder: "Enter Your Search Query",
  localCandidates: [],
  prefetchUrl: "",
  maxSuggestions: 5,
  remoteUrl: "",
  remoteUrlSearching: false,
};

const events = [
  /**
   * px-typeahead-item-selected
   */
  {
    name: 'px-typeahead-item-selected',
    reactPropName: 'onPxTypeaheadItemSelected',
  },
  /**
   * px-typeahead-remote-searching-end
   */
  {
    name: 'px-typeahead-remote-searching-end',
    reactPropName: 'onPxTypeaheadRemoteSearchingEnd',
  },
  /**
   * px-typeahead-remote-searching-start
   */
  {
    name: 'px-typeahead-remote-searching-start',
    reactPropName: 'onPxTypeaheadRemoteSearchingStart',
  },
  /**
   * px-typeahead-search-input-change
   */
  {
    name: 'px-typeahead-search-input-change',
    reactPropName: 'onPxTypeaheadSearchInputChange',
  },
  /**
   * Fired when the `maxSuggestions` property changes.
   */
  {
    name: 'max-suggestions-changed',
    reactPropName: 'onMaxSuggestionsChanged',
  },
  /**
   * Fired when the `remoteUrlSearching` property changes.
   */
  {
    name: 'remote-url-searching-changed',
    reactPropName: 'onRemoteUrlSearchingChanged',
  },
  /**
   * Fired when the `value` property changes.
   */
  {
    name: 'value-changed',
    reactPropName: 'onValueChanged',
  },
  /**
   * Fired when the `inputValue` property changes.
   */
  {
    name: 'input-value-changed',
    reactPropName: 'onInputValueChanged',
  },
];

const options = {
  tagname: 'px-typeahead',
  bowerPath: 'px-typeahead/px-typeahead.html',
  events,
};

const ReactWrapper = withReactWrapper('px-typeahead', options);

class Typeahead extends React.Component {
  render() {
    return <ReactWrapper {...this.props} />;
  }
}

Typeahead.propTypes = propTypes;
Typeahead.defaultProps = defaultProps;

export default Typeahead;
