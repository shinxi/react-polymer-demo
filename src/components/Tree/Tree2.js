import React from 'react';
import PropTypes from 'prop-types';
import 'px-tree/px-tree.html';
import { withReactWrapper } from 'utils/polymer';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.any),
};
const PolymerTree = withReactWrapper('px-tree', propTypes);

const Keys = { id: 'id', label: 'label', children: 'children', icon: 'icon' };
function Tree({ items }) {
  return <PolymerTree keys={JSON.stringify(Keys)} items={JSON.stringify(items)} />;
}

Tree.propTypes = propTypes;

Tree.defaultProps = {
  data: [],
};

export default Tree;
