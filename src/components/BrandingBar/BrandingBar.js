import React from 'react';
import PropTypes from 'prop-types';
import { withReactWrapper } from 'utils/polymer';

const propTypes = {
  /**
   * The application title to display in the lefthand corner of the branding bar.
   * Defaults to the `document.title` attribute if not specified.
   */
  applicationTitle: PropTypes.string,
};

const options = {
  tagname: 'px-branding-bar',
  bowerPath: 'px-branding-bar/px-branding-bar.html',
};

const ReactWrapper = withReactWrapper('px-branding-bar', options);

class BrandingBar extends React.Component {
  render() {
    return <ReactWrapper {...this.props} />;
  }
}

BrandingBar.propTypes = propTypes;

export default BrandingBar;
