import React from 'react';
import PropTypes from 'prop-types';
import { withReactWrapper } from 'utils/polymer';

const propTypes = {
  /**
   * If true, hovering over the card will cause an overlay to appear
   * with more detailed information, including the description
   * and an optional slot for showing a footer at the bottom.
   */
  hoverable: PropTypes.bool,
  /**
   * Main text label for the tile.
   */
  title: PropTypes.string,
  /**
   * Additional information to be displayed in the overlay of a hoverable card.
   * Only the first ~6 lines of text will be displayed, after which it will be truncated.
   */
  description: PropTypes.string,
};

const defaultProps = {
  hoverable: false,
  title: "Title",
  description: "Description",
};

const options = {
  tagname: 'px-tile',
  bowerPath: 'px-tile/px-tile.html',
};

const ReactWrapper = withReactWrapper('px-tile', options);

class Tile extends React.Component {
  render() {
    return <ReactWrapper {...this.props} />;
  }
}

Tile.propTypes = propTypes;
Tile.defaultProps = defaultProps;

export default Tile;
