import React from 'react';
import PropTypes from 'prop-types';
import 'px-typeahead/px-typeahead.html';
import { withReactWrapper } from 'utils/polymer';

const propsNeedStrinify = ['localCandidates'];
const ReactWrapper = withReactWrapper('px-typeahead', propsNeedStrinify);

class Typeahead extends React.Component {
  render() {
    return <ReactWrapper {...this.props} />;
  }
}

Typeahead.propTypes = {
  /**
   * Sets diabled on the input element.
   */
  disabled: PropTypes.objectOf(PropTypes.any),
  /**
   * The placeholder for the input element.
   */
  placeholder: PropTypes.string,
  /**
   * The search candidates from local data model.
   */
  localCandidates: PropTypes.arrayOf(PropTypes.any),
  /**
   * Url for a prefectched list in json format for the list of suggestion candidates.
The response should be an array - for example: ["a","b"]
   */
  prefetchUrl: PropTypes.string,
  /**
   * Maximum number of suggestions for remote urls
   */
  maxSuggestions: PropTypes.number,
  /**
   * Remote url to perform a search using the value in the input. 
   * The input value will be passed in as url parameter. The placeholder should be %QUERY.
   */
  remoteUrl: PropTypes.string,
  /**
   * A boolean property to indicate if a search happens with a remote Url.
Must be used together with remoteUrl.
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

Typeahead.defaultProps = {};
export default Typeahead;
