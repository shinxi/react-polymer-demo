import React from 'react';
import PropTypes from 'prop-types';
import 'px-branding-bar/px-branding-bar.html';
import { withReactWrapper } from 'utils/polymer';

const ReactWrapper = withReactWrapper('px-branding-bar');

class BrandingBar extends React.Component {
  render() {
    return <ReactWrapper {...this.props} />;
  }
}

BrandingBar.propTypes = {
  /**
   * The application title to display in the lefthand corner of the branding bar.
Defaults to the `document.title` attribute if not specified.
   */
  applicationTitle: PropTypes.string,
};

BrandingBar.defaultProps = {
};
export default BrandingBar;
