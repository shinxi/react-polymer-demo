import React from 'react';
import PropTypes from 'prop-types';
import { withReactWrapper } from 'utils/polymer';

const propTypes = {
  /**
   * The id of the element that the tooltip is anchored to. This element
   * must be a sibling of the tooltip.
   */
  for: PropTypes.string,
  /**
   * The direction that the popover is displayed relative to the
   * 'for' element.
   * - 'left' to the left of the 'for' element
   * - 'right' to the right of the 'for' element
   * - 'top' above the 'for' element
   * - 'bottom' below the 'for' element
   */
  orientation: PropTypes.string,
  /**
   * The title that will be displayed in the popover.
   */
  popoverTitle: PropTypes.string,
  /**
   * The body text that will be displayed in the popover. Note: Does not support HTML elements within the body. Set `enhanced` and pass HTML as a child of the px-popover instead.
   */
  popoverBody: PropTypes.string,
  /**
   * If the target/popover are descendent of a relative position element, wrap the target and popover in another element with relative positioning and set this flag to "relative"
   */
  position: PropTypes.string,
  /**
   * By default, the overlay covering the rest of the screen is off.
   * This property should be set to false for mobile applications.
   */
  hideOverlay: PropTypes.bool,
  /**
   * Enhanced empowers the developer to fully control the inner HTML of the popover. For instance, the popover can be used to render a form or contain an embedded video.
   * To inject your custom HTML, simply include your custom markup as the first child of the px-popover when declaring the px-popover in your application. Sample provided below.
   * 
   *     <px-popover for="someElement" enhanced>
   *         <form>
   *            <label>This is a form
   *              <input type='text'/>
   *            </label>
   *         </form>
   *     </px-popover>
   */
  enhanced: PropTypes.bool,
};

const defaultProps = {
  orientation: "right",
  popoverTitle: "",
  popoverBody: "",
  position: "absolute",
  hideOverlay: true,
  enhanced: false,
};

const options = {
  tagname: 'px-popover',
  bowerPath: 'px-popover/px-popover.html',
};

const ReactWrapper = withReactWrapper('px-popover', options);

class Popover extends React.Component {
  render() {
    return <ReactWrapper {...this.props} />;
  }
}

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;

export default Popover;
