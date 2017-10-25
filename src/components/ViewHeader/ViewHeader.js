import React from 'react';
import PropTypes from 'prop-types';
import { withReactWrapper } from 'utils/polymer';

const propTypes = {
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
   * If true, title and subtitle are ignored.
   */
  useDeckSelector: PropTypes.bool,
};

const defaultProps = {
  useDeckSelector: false,
};

const options = {
  tagname: 'px-view-header',
  bowerPath: 'px-view-header/px-view-header.html',
};

const ReactWrapper = withReactWrapper('px-view-header', options);

class ViewHeader extends React.Component {
  render() {
    return <ReactWrapper {...this.props} />;
  }
}

ViewHeader.propTypes = propTypes;
ViewHeader.defaultProps = defaultProps;

export default ViewHeader;
