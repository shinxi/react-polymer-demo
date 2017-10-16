import React from 'react';
import PropTypes from 'prop-types';
import 'px-view-header/px-view-header.html';
import { withReactWrapper } from 'utils/polymer';

const ReactWrapper = withReactWrapper('px-view-header');

class ViewHeader extends React.Component {
  render() {
    return <ReactWrapper {...this.props} />;
  }
}

ViewHeader.propTypes = {
  /**
   * The title displayed in the center of the header.
   */
  title: PropTypes.string,
  /**
   * The (optional) subtitle displayed in the center of the header.
   */
  subtitle: PropTypes.string,
  /**
   * Whether the deck selector will be passed in between the opening and closing tags of px-view-header.
If true, title and subtitle are ignored.
   */
  useDeckSelector: PropTypes.bool,
};

ViewHeader.defaultProps = {
  useDeckSelector: false,
};
export default ViewHeader;
