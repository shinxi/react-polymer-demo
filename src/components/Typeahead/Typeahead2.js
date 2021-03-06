// import reactPolymer from 'react-polymer';
import React from 'react';
import PropTypes from 'prop-types';
import 'px-typeahead/px-typeahead.html';

import { withReactWrapper } from 'utils/polymer';

const PredixTypeahead = withReactWrapper('px-typeahead');
class Typeahead extends React.Component {
  render() {
    const {
      placeholder,
      'local-candidates': localCandidates,
      'prefetch-url': prefetchURL,
      ...rest
    } = this.props;
    return (
      <div>
        <PredixTypeahead
          placeholder={placeholder}
          local-candidates={JSON.stringify(localCandidates)}
          prefetch-url={JSON.stringify(prefetchURL)}
          {...rest}
        />
      </div>
    );
  }
}

Typeahead.propTypes = {
  placeholder: PropTypes.string,
  'local-candidates': PropTypes.arrayOf(PropTypes.any),
  'prefetch-url': PropTypes.string,
  onInputValueChanged: PropTypes.func,
  onValueChanged: PropTypes.func,
};

Typeahead.defaultProps = {
  placeholder: 'Enter your search query',
  'local-candidates': [
    'Alabama',
    'Alaska',
    'American Samoa',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District Of Columbia',
    'Federated States Of Micronesia',
    'Florida',
    'Georgia',
    'Guam',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Marshall Islands',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Northern Mariana Islands',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Palau',
    'Pennsylvania',
    'Puerto Rico',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virgin Islands',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ],
  'prefetch-url': 'https://www.predix-ui.com/px-typeahead/px-typeahead/countries.json',
};
export default Typeahead;
